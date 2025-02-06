"use client";

import { useState, useEffect } from "react";

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

function ColorGame() {
  const [targetColor, setTargetColor] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");

  // Function to start a new round
  const startNewGame = () => {
    const newTarget = colors[Math.floor(Math.random() * colors.length)];
    const shuffledColors = [...colors].sort(() => 0.5 - Math.random());
    setTargetColor(newTarget);
    setOptions(shuffledColors);
    setStatusMessage("");
  };

  // Function to handle user guesses

  interface HandleGuessProps {
    color: string;
  }

  const handleGuess = ({ color }: HandleGuessProps) => {
    if (color === targetColor) {
      setScore(score + 1);
      setStatusMessage("✅ Correct!");
      setTimeout(startNewGame, 1000); // Start a new round after 1s
    } else {
      setStatusMessage("❌ Wrong! Try again.");
    }
  };

  // Initialize the game on first render
  useEffect(() => {
    startNewGame();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1
        className="text-2xl font-bold mb-4 text-gray-700"
        data-testid="gameInstructions"
      >
        Guess the correct color!
      </h1>

      <div
        className="w-40 h-40 rounded-lg mb-4 border-2 border-gray-500"
        style={{ backgroundColor: targetColor }}
        data-testid="colorBox"
      ></div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        {options.map((color, index) => (
          <button
            key={index}
            className="w-20 h-20 rounded-md shadow-md text-white font-semibold"
            style={{ backgroundColor: color }}
            onClick={() => handleGuess({ color })}
            data-testid="colorOption"
          >
            {color}
          </button>
        ))}
      </div>

      <p className="text-lg font-semibold mb-2" data-testid="gameStatus">
        {statusMessage}
      </p>

      <p className="text-lg font-semibold mb-4" data-testid="score">
        Score: {score}
      </p>

      <button
        onClick={() => setScore(0)}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        data-testid="newGameButton"
      >
        New Game
      </button>
    </div>
  );
}

export default ColorGame;
