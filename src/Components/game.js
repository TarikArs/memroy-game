import React, { useEffect, useState } from "react";

import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Result from "./Micro/Result";

import "./game.css";
import { AllLevelsCards } from "../data/data";
import Stepper from "./Stepper/Stepper";

export default function Game() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, SetChoiceOne] = useState(null);
  const [choiceTwo, SetChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [showNextLevelContent, setShowNextLevelContent] = useState(false);
  const [isWinner, setIsWinner] = useState(true);
  const [timer, setTimer] = useState(-1);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsloading] = useState(true);

  //Shuffle Cards
  const ShuffleCards = () => {
    const level = AllLevelsCards[currentLevel];
    setTimer(level?.duration * 60);
    const CardsImages = level?.data;

    const shuffledCards = [...CardsImages, ...CardsImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    initData(level);
  };
  //handle Choice

  const initData = (level) => {
    SetChoiceOne(null);
    SetChoiceTwo(null);
    setTurns(0);
    setTimer(level.duration * 60);
    setDisabled(false);
    setShowNextLevelContent(false);
    setRefresh(true);
    setIsloading(false);
  };

  const HandleChoice = (card) => {
    choiceOne ? SetChoiceTwo(card) : SetChoiceOne(card);
  };

  // Reset Turns

  const ResetTurns = () => {
    SetChoiceOne(null);
    SetChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // use Effect Hook

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) return { ...card, matched: true };
            else return card;
          });
        });
        ResetTurns();
      } else {
        setTimeout(() => ResetTurns(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //Start The Game Automatically

  useEffect(() => {
    ShuffleCards();
  }, [currentLevel]);

  // on Game Over

  const onGameOver = (result) => {
    //if result is true than show modal and calculate Score
    console.log(result);
    setDisabled(true);
    setIsWinner(result);
    setShowNextLevelContent(true);
    setRefresh(false);
  };

  const onNext = () => {
    setCurrentLevel((prevLevel) => prevLevel + 1);
  };

  return isLoading ? (
    <></>
  ) : (
    <div>
      {/* <Stepper /> */}
      <div className="game-body">
        <Header
          onClick={ShuffleCards}
          level={AllLevelsCards[currentLevel]}
          turns={turns}
          timer={timer}
          onGameOver={onGameOver}
        />
        {showNextLevelContent ? (
          <Result
            status={isWinner}
            onNext={onNext}
            onRetry={ShuffleCards}
            cardsLength={AllLevelsCards.length - (currentLevel + 1)}
          />
        ) : (
          <Content
            HandleChoice={HandleChoice}
            cards={cards}
            choiceOne={choiceOne}
            choiceTwo={choiceTwo}
            disabled={disabled}
            onGameOver={onGameOver}
          />
        )}
      </div>
    </div>
  );
}
