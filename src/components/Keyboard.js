import React from "react";

const Keyboard = ({ onGuess, guessedLetters }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button
          key={letter}
          className="btn btn-secondary"
          onClick={() => onGuess(letter)}
          disabled={guessedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
