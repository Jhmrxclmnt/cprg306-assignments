"use client";
import { useState } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import MealIdeas from "./meal-ideas.js";
import itemsData from "./items.json";

export default function Page(){

    const [items, setItems] = useState(itemsData);
    const [selectedItem, setSelectedItem] = useState(null);
    

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

    const HandleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    

    
    return (
        <main className="bg-slate-950 p-2 m-2">
            <h2 className="text-3xl font-bold mb-4">Shopping List!</h2>
            <div className="flex">
                <div className="flex-1 max-w-sm m-2">
                    <h3 className="text-xl font-bold">Add New Item</h3>
                    <NewItem onAddItem={HandleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect}/>
                </div>
                <div className="flex-1 max-w-sm m-2">
                    <h3 className="text-xl font-bold">Meal Ideas</h3>
                    {selectedItem !== null ? ( <MealIdeas meal={selectedItem} />) : ( <p>Select an item to see meal ideas</p>)}
                </div>
            </div>
        </main>
        
    );
}
