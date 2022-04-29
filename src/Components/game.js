import React, { useEffect, useState } from "react";
import Content from "./content";
import Footer from "./Footer";
import './game.css'

import Header from './Header'

const CardsImages = [
    { src: "/img/helmet-1.png", matched: false },
    { src: "/img/potion-1.png", matched: false },
    { src: "/img/ring-1.png", matched: false },
    { src: "/img/scroll-1.png", matched: false },
    { src: "/img/shield-1.png", matched: false },
    { src: "/img/sword-1.png", matched: false }

]
export default function Game() {

    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, SetChoiceOne] = useState(null)
    const [choiceTwo, SetChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)



    //Shuffle Cards
    const ShuffleCards = () => {
        const shuffledCards = [...CardsImages, ...CardsImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledCards)
        SetChoiceOne(null)
        SetChoiceTwo(null)
        setTurns(0)

    }
    //handle Choice

    const HandleChoice = (card) => {
        choiceOne ? SetChoiceTwo(card) : SetChoiceOne(card)
    }

    // Reset Turns

    const ResetTurns = () => {
        SetChoiceOne(null)
        SetChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    // use Effect Hook

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) return { ...card, matched: true }
                        else return card
                    })
                })
                ResetTurns()
            } else {
                setTimeout(() => ResetTurns(), 1000)
            }



        }


    }, [choiceOne, choiceTwo])

    //Start The Game Automatically

    useEffect(() => {
        ShuffleCards()
    }, [])

    return (<div>
        <Header onClick={ShuffleCards} />
        <Content HandleChoice={HandleChoice}
            cards={cards}
            choiceOne={choiceOne}
            choiceTwo={choiceTwo}
            disabled={disabled}
        />
        <Footer turns={turns} />
    </div>)
}