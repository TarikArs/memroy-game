import {
  faClock,
  faHourglass,
  faRefresh,
  faTimesCircle,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./Header.css";
export default function Header({ onClick, level, turns }) {
  //count down time here
 


  return (
    <div className="header-container d-flex justify-content-around align-items-center">
      <div className="bordered-icon d-flex justify-content-center">
        <FontAwesomeIcon icon={faRefresh} onClick={onClick} />
      </div>
      <div>{level.label}</div>
      <div>
        <FontAwesomeIcon icon={faHourglass} /> {level.duration}
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
