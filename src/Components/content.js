import React from "react";
import './content.css'
import SingleCard from "./SingleCard";
export default function Content({ cards, HandleChoice, choiceOne, choiceTwo,disabled }) {

    return (<div className="card-grid">
        {
            cards.map(card => (
                <SingleCard HandleChoice={HandleChoice}
                    key={card.id}
                    card={card}
                    flipped={card === choiceOne || card === choiceTwo || card.matched}
                    disabled={disabled}
                />
            ))
        }
    </div>)
}