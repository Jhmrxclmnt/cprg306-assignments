"use client";
import { useEffect, useState } from "react";

const fetchMealIdeas = async (meal) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`);
    
    const data = await response.json();
    return data.meals;
};


export default function MealIdeas({ meal }) {
    const [mealIdeas, setMealIdeas] = useState([]);
  

    const loadMealIdeas = async () => {
            const fetchMeals = await fetchMealIdeas(meal);
                    setMealIdeas(fetchMeals);
                };
                
    useEffect(() => {
    loadMealIdeas(meal);
    }, [meal]);


    return (
        <main>
            <div>
                <div>
                {mealIdeas ? (
                    <p>Here are some meal ideas using {meal}:</p>
                ) : (
                    <p>No meal ideas found for {meal}</p>
                )}
            </div>
                {mealIdeas ? (
                    <ul>
                        {mealIdeas.map((meal) => (
                            <li className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer" key={meal.idMeal}>{meal.strMeal} </li>
                            
                        ))}
                    </ul>
                ) : (
                    <p></p>
                )}
            </div>
        </main>
    );
}
