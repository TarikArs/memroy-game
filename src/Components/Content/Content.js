import React, { useEffect } from "react";
import "./Content.css";
import SingleCard from "../Micro/SingleCard";
export default function Content({
  cards,
  HandleChoice,
  choiceOne,
  choiceTwo,
  disabled,
  onGameOver,
}) {
  //check if all cards are matched

  useEffect(() => {
    if (cards.length > 0) {
      const matches = cards.filter((card) => card.matched === false);
      if (matches.length === 0) onGameOver(true);
    }
  }, [choiceTwo, choiceOne]);

  return (
    <div className="card-grid">
      {cards.map((card) => (
        <SingleCard
          HandleChoice={HandleChoice}
          key={card.id}
          card={card}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
        />
      ))}
    </div>
  );
}
