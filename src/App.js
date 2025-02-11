import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import HelpModal from "./components/HelpModal";
import "./App.css";

const words = ["apple", "banana", "grapefruit", "strawberry", "watermelon"];

function App() {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  // 'won', 'lost', 'playing'
  const [gameStatus, setGameStatus] = useState("playing"); 

  // Initialising the word once
  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
  }, []);

  // Checking for win or loss
  useEffect(() => {
    if (remainingAttempts === 0) {
      setGameStatus("lost");
    } else if (
      word &&
      word.split("").every((letter) => guessedLetters.includes(letter))
    ) {
      setGameStatus("won");
    }
  }, [guessedLetters, remainingAttempts, word]);

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter) && gameStatus === "playing") {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setRemainingAttempts((prev) => prev - 1);
      }
    }
  };

  const restartGame = () => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setWord(newWord);
    setGuessedLetters([]);
    setRemainingAttempts(6);
    setGameStatus("playing");
  };

  return (
    <div className="app-container">
      <h1 className="text-center">Hangman Game</h1>
      {word && (
        <GameBoard
          word={word}
          guessedLetters={guessedLetters}
          remainingAttempts={remainingAttempts}
          onGuess={handleGuess}
          gameStatus={gameStatus}
          onRestart={restartGame}
        />
      )}
      <HelpModal />
    </div>
  );
}

export default App;
