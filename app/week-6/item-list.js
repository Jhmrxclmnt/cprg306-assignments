"use client";
import React, { useState } from "react";
import Item from "./item";


export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = items.slice().sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <main>
      <div className="mt-8">
        <label className="sort">Sort by: </label>
        <button className="bg-orange-700 p-1 m-2 w-28" onClick={() => setSortBy("name")} style={{ backgroundColor: sortBy === "name" ? "#ff751a" : "" }}>Name</button>
        <button className="bg-orange-700 p-1 m-2 w-28" onClick={() => setSortBy("category")} style={{ backgroundColor: sortBy === "category" ? "#ff751a" : "" }}>Category</button>
      </div>

      <div>
          <ul>
            {sortedItems.map((item) => (
              <li key={item.id} className="p-2 m-4 bg-slate-900 max-w-sm">
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              </li>
            ))}
          </ul>
      </div>
    </main>
  );
}
