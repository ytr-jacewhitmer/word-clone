import React from "react";

function GuessInput({ guess, setGuess, setGuesses, guesses }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nextGuesses = [...guesses, guess];
    setGuesses([...nextGuesses]);
    setGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        pattern="[A-Z]{5}"
        title="Please enter a 5-letter word"
      />
    </form>
  );
}

export default GuessInput;
