import React, {useState} from "react";
import "./styles.css";

var bgcolor = "gray"
var headingtext = "Lets DO some Magic"


var emojiDictonary = {

  "👿": "imp",
  "😾": "Pouting Cat",
  "😠": "angry",
  "💔": "Broken Heart",
  "😱": "Scream",
  "😟": "worried",
};

console.log(Object.keys(emojiDictonary))
var emojisWeKnow = (Object.keys(emojiDictonary))





export default function App() {


  const [meaning, setMeaning] = useState("");

  

  
  inputEventHandler = (event) => {

   var userInput = event.target.value

   var emojiMeaning = emojiDictonary[userInput]; //thus meaning is not same as useState wala meaning

   console.log(emojiMeaning);

   setMeaning(emojiMeaning);

   

  }

  checkEmojiName = (emoji) =>
  {
    console.log(emoji)
    setMeaning(emojiDictonary[emoji])
  }

  return (
    <div className="App">
      
      <h1>Whats my Emoji 😷</h1>
      <input onChange={inputEventHandler}></input>
      

      <h3>Above  ☝️️ Emoji Means: {meaning}</h3>

      <h2> Emojis in Our Database 👇 :</h2>

      <h3>Clicked Emoji : {meaning}</h3>

      <div>
        {
        emojisWeKnow.map((emoji) => 
        {

          return(
          <span 
          onClick = {() => checkEmojiName(emoji)}  
          className="big-emoji"
          key={emoji}>
          
          {emoji}</span>)
          }
        )
      }
      </div>


      

      


     
      
      
    </div>
  );
}
