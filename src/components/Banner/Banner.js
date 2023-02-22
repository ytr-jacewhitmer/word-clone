import React from "react";

function Banner({ className, guessCount, correct, answer }) {
  return (
    <div className={className}>
      {correct ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {`${guessCount} guesses`}</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>
        </p>
      )}
    </div>
  );
}

export default Banner;
