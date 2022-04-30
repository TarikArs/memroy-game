import {
  faHourglass,
  faRefresh,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./Header.css";
export default function Header({
  onClick,
  level,
  turns,
  onGameOver,
  timer
}) {
  //count down time here
  const [countDown, setCountDown] = useState(-1);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [stopTimer, setStopTimer] = useState(false);
  const [ResetTimer, setResetTimer] = useState(false);

  useEffect(() => {
    if (countDown == -1 || ResetTimer) {
      setCountDown(timer);
      setResetTimer(false)
    }

    if (!stopTimer && countDown !== -1) {
      const interval = setInterval(() => {
        setCountDown((prevCountDown) => prevCountDown - 1);
        const m = Math.floor((countDown % 3600) / 60);
        const s = Math.floor((countDown % 3600) % 60);

        setSeconds(s);
        setMinutes(m);
        if (countDown === 0) gameOver();
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [countDown, timer, stopTimer]);

  useEffect(() => {
    if (turns === level.maxTurns) gameOver();
  }, [turns]);

  useEffect(() => {
    setResetTimer(true);
  }, [level]);

  const gameOver = () => {
    setStopTimer(true);
    onGameOver(false);
  };
  const Refresh = () => {
    setResetTimer(true);
    onClick();
  };

  return (
    <div className="header-container d-flex justify-content-around align-items-center">
      <div className="bordered-icon d-flex justify-content-center">
        <FontAwesomeIcon icon={faRefresh} onClick={Refresh} />
      </div>
      <div>{level.label}</div>
      <div>
        <FontAwesomeIcon icon={faHourglass} /> {minutes + ":" + seconds}
      </div>
      <div> Turns : {turns + "/" + level.maxTurns}</div>
      <div>
        <FontAwesomeIcon icon={faTrophy} /> 34%
      </div>
      <div className="bordered-icon d-flex justify-content-center">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
}
