"use client";
import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items";
export default function Page(){
    const Page = () => {
        const [items, setItems] = useState(itemsData);
        const handleAddItem = (item) => {
                setItems([...items, item]);
            }
            return(
                <main className="bg-slate-950">
                    <div class="m-4">
                        <h2 className="text-3xl font-bold m-2">Shopping List</h2>
                            <NewItem />
                            <ItemList />
                            <ItemData />
                    </div>
                </main>
        );
    }
};