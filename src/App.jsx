import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./styles/css/App.css";
import "./styles/css/styles.css";
import quotes from "./data/quotes";

const App = () => {
  const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  const getRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };

  const colorMaker = () => {
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      randomColor += hexColor[getRandomIndex(hexColor)];
    }
    return randomColor;
  };

  const quotePicker = () => {
    return quotes[getRandomIndex(quotes)];
  };

  const [color, setColor] = useState(colorMaker());
  const [quote, setQuote] = useState(quotePicker());

  const setter = () => {
    setColor(colorMaker());
    setQuote(quotePicker());
  };

  return (
    <div id="app" style={{ backgroundColor: color }}>
      <div id="quote-box">
        <div id="content">
          <div id="quote">
            <span>
              <FontAwesomeIcon icon={faQuoteLeft} style={{ color: color }} />
            </span>
            <div
              id="text"
              style={{ color: color, textShadow: ".5px .5px 1px #000" }}
            >
              {quote.text}
            </div>
          </div>
          <div id="author" style={{ color: color }}>
            <h3>- {quote.author}</h3>
            <h5>{quote.source}</h5>
          </div>
          <div className="bottom">
            <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">
              <FontAwesomeIcon
                icon={faTwitter}
                style={{
                  padding: 5,
                  backgroundColor: color,
                  color: "white",
                  fontSize: 30,
                  borderRadius: 5,
                }}
                className="x-icon"
              />
            </a>
            <button
              id="new-quote"
              onClick={setter}
              style={{ backgroundColor: color }}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
      <p
        style={{
          marginTop: 5,
          color: "white",
          textShadow: "1px 1px 2px #000",
        }}
      >
        By{" "}
        <a
          href="https://codepen.io/tonybnya"
          target="_blank"
          style={{ color: "white" }}
        >
          Tony B. NYA
        </a>
      </p>
    </div>
  );
};

export default App;

