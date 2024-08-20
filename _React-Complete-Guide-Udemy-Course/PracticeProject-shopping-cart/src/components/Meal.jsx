import React from "react";

export default function Meal({ meal }) {
  return (
    <div id="meal">
      {meal.id} {meal.price} {meal.name}
    </div>
  );
}
