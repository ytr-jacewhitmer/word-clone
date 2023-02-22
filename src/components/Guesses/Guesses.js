import React from "react";

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.length !== 0
        ? guesses.map((guess) => {
            return (
              <p key={guess} className="guess">
                {guess}
              </p>
            );
          })
        : null}
    </div>
  );
}

export default Guesses;
