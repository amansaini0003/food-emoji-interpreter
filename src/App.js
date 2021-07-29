import React, { useState } from "react";
import "./styles.css";

const headingText = "Food Emoji Interpreter";

const foodEmojiDictionary = {
  "🍇": "Grapes",
  "🍏": "Pears",
  "🍎": "Apple",
  "🍐": "Guava",
  "🍊": "Orange",
  "🍋": "Mango",
  "🍌": "Banana",
  "🍉": "Watermelon"
};
const emojisWeKnow = Object.keys(foodEmojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function listItemClickHandler(emoji) {
    var newMeaning = foodEmojiDictionary[emoji];
    setMeaning(newMeaning);
  }

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var newMeaning = foodEmojiDictionary[userInput];

    if (newMeaning === undefined)
      newMeaning = "Failure to recognise this Emoji";

    setMeaning(newMeaning);
  }
  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input
        onChange={inputChangeHandler}
        placeholder="Put your food emoji here..."
      ></input>

      <div>{meaning}</div>

      <ul>
        {emojisWeKnow.map((item) => {
          return (
            <li
              key={item}
              className="emoji-list"
              onClick={() => listItemClickHandler(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
