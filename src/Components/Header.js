import React from "react";
import './Header.css'
export default function Header({ onClick }) {

    return (<div>
        <button onClick={onClick} > New Game</button>
    </div>)
}