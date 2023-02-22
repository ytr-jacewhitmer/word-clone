import React, { useEffect, useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import Banner from "../Banner";
import Grid from "../Grid";
import GuessInput from "../GuessInput";

const answer = sample(WORDS);

function Game() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [checked, setChecked] = useState({});
  const [guessCount, setGuessCount] = useState(0);
  const [correct, setCorrect] = useState(false);

  console.log({ answer });

  useEffect(() => {
    let arr = Object.keys(checked);
    let count = Number(arr[arr.length - 1]) + 1;
    setGuessCount(count);
  }, [checked]);

  useEffect(() => {
    const correctAnswer = guesses.map((guess) => guess === answer);

    if (correctAnswer.includes(true)) {
      setCorrect(true);
    }
  }, [guesses]);

  return (
    <>
      <Grid
        numRows={NUM_OF_GUESSES_ALLOWED}
        numCols={5}
        guesses={guesses}
        answer={answer}
        checked={checked}
        setChecked={setChecked}
      />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        setGuesses={setGuesses}
        guesses={guesses}
      />
      {correct || guessCount === NUM_OF_GUESSES_ALLOWED ? (
        <Banner
          answer={answer}
          guessCount={guessCount}
          correct={correct}
          className={correct ? "happy banner" : "sad banner"}
        />
      ) : null}
    </>
  );
}

export default Game;
