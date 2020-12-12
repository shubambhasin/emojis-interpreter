import React, {useState} from "react";
import "./styles.css";

var bgcolor = "gray"
var headingtext = "Lets DO some Magic"


var emojiDictonary = {
  '☠️': "skull_and_crossbones"
  ,'☹️': "frowning_face"
  ,'☺️': "relaxed"
  ,'✌️': "v"
  ,'❤️': "heart"
  ,'👄': "lips"
  ,'👊': "punch"
  ,'👌': "ok_hand"
  ,'👍': "thumbsup"
  ,'👎': "thumbsdown"
  ,'👏': "clap"
  ,'👻': "ghost"
  ,'👿': "imp"
  ,'💀': "skull"
  ,'💋': "kiss"
  ,'💓': "heartbeat"
  ,'💔': "broken_heart"
  ,'💕': "two_hearts"
  ,'💖': "sparkling_heart"
  ,'💗': "heartpulse"
  ,'💘': "cupid"
  ,'💙': "blue_heart"
  ,'💚': "green_heart"
  ,'💛': "yellow_heart"
  ,'💜': "purple_heart"
  ,'💝': "gift_heart"
  ,'💞': "revolving_hearts"
  ,'💩': "shit"
  ,'💯': "100"
  ,'🖕': "fu"
  ,'🖤': "black_heart"
  ,'😀': "grinning"
  ,'😁': "grin"
  ,'😂': "joy"
  ,'😃': "smiley"
  ,'😄': "smile"
  ,'😅': "sweat_smile"
  ,'😆': "laughing"
  ,'😇': "innocent"
  ,'😈': "smiling_imp"
  ,'😉': "wink"
  ,'😊': "blush"
  ,'😋': "yum"
  ,'😌': "relieved"
  ,'😍': "heart_eyes"
  ,'😎': "sunglasses"
  ,'😏': "smirk"
  ,'😐': "neutral_face"
  ,'😑': "expressionless"
  ,'😒': "unamused"
  ,'😓': "sweat"
  ,'😔': "pensive"
  ,'😕': "confused"
  ,'😖': "confounded"
  ,'😗': "kissing"
  ,'😘': "kissing_heart"
  ,'😙': "kissing_smiling_eyes"
  ,'😚': "kissing_closed_eyes"
  ,'😛': "stuck_out_tongue"
  ,'😜': "stuck_out_tongue_winking_eye"
  ,'😝': "stuck_out_tongue_closed_eyes"
  ,'😞': "disappointed"
  ,'😟': "worried"
  ,'😠': "angry"
  ,'😡': "rage"
  ,'😢': "cry"
  ,'😣': "persevere"
  ,'😤': "triumph"
  ,'😥': "disappointed_relieved"
  ,'😦': "frowning"
  ,'😧': "anguished"
  ,'😨': "fearful"
  ,'😩': "weary"
  ,'😪': "sleepy"
  ,'😫': "tired_face"
  ,'😬': "grimacing"
  ,'😭': "sob"
  ,'😮': "open_mouth"
  ,'😯': "hushed"
  ,'😰': "cold_sweat"
  ,'😱': "scream"
  ,'😲': "astonished"
  ,'😳': "flushed"
  ,'😴': "sleeping"
  ,'😵': "dizzy_face"
  ,'😶': "no_mouth"
  ,'😷': "mask"
  ,'😸': "smile_cat"
  ,'😹': "joy_cat"
  ,'😺': "smiley_cat"
  ,'😻': "heart_eyes_cat"
  ,'😼': "smirk_cat"
  ,'😽': "kissing_cat"
  ,'😾': "pouting_cat"
  ,'😿': "crying_cat_face"
  ,'🙀': "scream_cat"
  ,'🙁': "slightly_frowning_face"
  ,'🙂': "slightly_smiling_face"
  ,'🙃': "upside_down_face"
  ,'🙄': "roll_eyes"
  ,'🙌': "raised_hands"
  ,'🙏': "pray"
  ,'🤐': "zipper_mouth_face"
  ,'🤑': "money_mouth_face",
  '🤒': "face_with_thermometer"
  ,'🤓': "nerd_face"
  ,'🤔': "thinking"
  ,'🤕': "face_with_head_bandage"
  ,'🤗': "hugs"
  ,'🤝': "handshake"
  ,'🤞': "crossed_fingers"
  ,'🤠': "cowboy_hat_face"
  ,'🤡': "clown_face"
  ,'🤢': "nauseated_face"
  ,'🤣': "rofl"
  ,'🤤': "drooling_face"
  ,'🤥': "lying_face"
  ,'🤧': "sneezing_face"
  }

console.log(Object.keys(emojiDictonary))
var emojisWeKnow = (Object.keys(emojiDictonary))





export default function App() {


  const [meaning, setMeaning] = useState("");
  const [emojiName, setEmojiName] = useState("");

  

  
  inputEventHandler = (event) => {

   var userInput = event.target.value

   var emojiMeaning = emojiDictonary[userInput]; //thus meaning is not same as useState wala meaning

   console.log(emojiMeaning);

   setMeaning(emojiMeaning);

   

  }

  checkEmojiName = (emoji) =>
  {
    console.log(emoji)
    setEmojiName(emojiDictonary[emoji])
  }

  return (
    <div className="App">
      
      <h1 className="heading">Whats my Emoji 😍</h1>
      <input onChange={inputEventHandler}></input>
      
      <h1></h1>
      <h3 className="heading2">Above  ☝️️ Emoji Means: {meaning}</h3>
      
      
      <h2> Emojis in Our Database 👇 :</h2>

      <h3>Clicked Emoji : {emojiName}</h3>

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
