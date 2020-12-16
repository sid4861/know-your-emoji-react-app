import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [meaning, setMeaning] = useState("");

  const emojiDictionary = {
    "🙈": "See no evil monkey",
    "🦊": "Fox",
    "🐪": "Camel",
    "🐅": "Tiger",
    "🐻": "Bear"
  };

  const emojiesArray = Object.keys(emojiDictionary);

  const inputHandler = (event) => {
    // console.log(event.target.value);
    var inputValue = event.target.value;
    var meaningFromDatabase = emojiDictionary[inputValue];
    if (meaningFromDatabase === undefined) {
      setMeaning("Oops! not found in database");
    }
    setMeaning(meaningFromDatabase);
  };

  function emojiClickHandler(emoji) {
    var meaningFromDatabase = emojiDictionary[emoji];
    if (meaningFromDatabase === undefined) {
      setMeaning("Oops! not found in database");
    }
    setMeaning(meaningFromDatabase);
  }

  return (
    <div className="App">
      <h1>Know your animal emojis</h1>
      <input onChange={inputHandler}></input>
      <h2>Meaning: {meaning}</h2>
      <h3>Emojies from our database</h3>
      {emojiesArray.map((emoji) => {
        return (
          <span
            onClick={() => {
              emojiClickHandler(emoji);
            }}
            key={emoji}
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
