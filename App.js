import React, { useState } from "react";
import "./styles.css";

var bgcolor = "gray";
var headingtext = "Lets DO some Magic";

var emojiDictonary = {
  "👿": "imp",
  "😾": "Pouting Cat",
  "😠": "angry",
  "💔": "Broken Heart",
  "😱": "Scream",
  "😟": "worried"
};

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [meaning, setMeaning] = useState("");

  inputEventHandler = (event) => {
    var userInput = event.target.value;

    var emojiMeaning = emojiDictonary[userInput]; //thus meaning is not same as useState wala meaning

    console.log(emojiMeaning);

    setMeaning(emojiMeaning);
  };

  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input onChange={inputEventHandler}></input>

      <h3>Emoji Means: {meaning}</h3>
    </div>
  );
}
