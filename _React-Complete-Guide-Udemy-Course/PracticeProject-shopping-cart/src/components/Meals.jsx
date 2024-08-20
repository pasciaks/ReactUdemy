import React, { useEffect, useCallback, useState } from "react";

import Meal from "./Meal";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [order, setOrder] = useState("price");

  const fetchMeals = useCallback(
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      } else {
        const meals = await response.json();
        console.log(meals);
        meals.sort((a, b) => {
          if (order === "name") {
            return a[order].localeCompare(b[order]);
          } else {
            return a[order] - b[order];
          }
        });
        setMeals(meals);
      }
    },
    [order]
  );

  useEffect(() => {
    fetchMeals();

    return () => {
      console.log("Cleanup");
    };
  }, [fetchMeals]);

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          setOrder("id");
        }}
      >
        id
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setOrder("price");
        }}
      >
        price
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setOrder("name");
        }}
      >
        name
      </button>
      <ul id="meals">
        {meals.map((meal) => (
          <li key={meal.id}>
            <Meal meal={meal} />
          </li>
        ))}
      </ul>
    </>
  );
}
