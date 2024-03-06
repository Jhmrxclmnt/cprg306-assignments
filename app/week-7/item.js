import React from 'react';

export default function Item({ name, quantity, category, onSelect}){
    return(
        <div onClick={() => onSelect({ name, quantity, category })}>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm">Buy {quantity} in {category}</p>
        </div>
    )   
}