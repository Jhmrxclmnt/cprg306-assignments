"use client";
import { useEffect, useState } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import MealIdeas from "./meal-ideas.js";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function ShoppingList() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [items, setItems] = useState([]);
    const { user } = useUserAuth();

    async function loadItems() {
        try {
            const items = await getItems(user.uid); // Call getItems with user.uid
            setItems(items);
        } catch (error) {
            console.error("Error loading items:", error);
        }
    }

    useEffect(() => {
      if (user && user.uid) { // Check if user and user.uid are truthy
          loadItems(); // Call loadItems when user is available
      }
  }, [user]); // useEffect dependency on user

    const handleAddItem = async (newItem) => {
      try {
          if (user && user.uid) { // Check if user and user.uid are truthy
              const newItemId = await addItem(user.uid, newItem);
              newItem.id = newItemId;
              setItems((prevItems) => [...prevItems, newItem]);
          }
      } catch (error) {
          console.error("Error adding item:", error);
      }
  };

    const handleItemSelect = (item) => {
      let cleanedItem;
          if (item.name.includes(",")) {
              cleanedItem = item.name.replace(/,.*/,"");
          }
          else {
              const regexEmoji = /[\u{1F300}-\u{1F9FF}]/gu;
              cleanedItem = item.name.replace(regexEmoji, "");
          }
          if (cleanedItem){
              setSelectedItem(cleanedItem);
          }
          else {
              console.error("Error: Unable to extract meal name from selected item.")
          }
      
  };

  return (
    <main className="bg-slate-950 p-2 m-2">
        <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
        <div className="flex">
            <div className="flex-1 max-w-sm m-2">
                <h3 className="text-xl font-bold">Add New Item</h3>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="flex-1 max-w-sm m-2">
                <h3 className="text-xl font-bold">Meal Ideas</h3>
                {selectedItem !== null ? (
                    <MealIdeas meal={selectedItem} />
                ) : (
                    <p>Select an item to see meal ideas</p>
                )}
            </div>
        </div>
    </main>
);
}