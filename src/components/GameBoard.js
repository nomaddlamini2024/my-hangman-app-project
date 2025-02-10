import React from "react";
import HangmanFigure from "./HangmanFigure";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";

function GameBoard({
  word,
  guessedLetters,
  remainingAttempts,
  onGuess,
  gameStatus,
  onRestart,
}) {
  return (
    <div className="game-board">
      <HangmanFigure attemptsLeft={remainingAttempts} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />

      {gameStatus === "playing" ? (
        <Keyboard onGuess={onGuess} guessedLetters={guessedLetters} />
      ) : (
        <h2>{gameStatus === "won" ? "You Won!" : "Game Over!"}</h2>
      )}

      {/* Always show the Restart button */}
      <button className="btn btn-primary restart-button" onClick={onRestart}>
        Restart Game
      </button>
    </div>
  );
}

export default GameBoard;

