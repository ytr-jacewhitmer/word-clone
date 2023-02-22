import React, { useEffect } from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Grid({ numRows, numCols, guesses, answer, checked, setChecked }) {
  useEffect(() => {
    let nextChecked = { ...checked };
    let idx = 0;
    for (const guess of guesses) {
      const result = checkGuess(guess, answer);
      nextChecked[idx] = result;
      idx++;
    }
    setChecked({ ...nextChecked });
  }, [guesses]);

  return (
    <div className="grid">
      {range(numRows).map((rowIndex) => (
        <div key={rowIndex} className="guess">
          {range(numCols).map((colIndex) => {
            let checkedItem;
            try {
              checkedItem = checked[rowIndex][colIndex];
            } catch (err) {}
            return (
              <span
                key={colIndex}
                className={`cell ${checkedItem ? checkedItem.status : null}`}
              >
                {checkedItem ? checkedItem.letter : null}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Grid;

//    (
//   <span key={colIndex} className="cell">
//     {guesses.length === 0
//       ? null
//       : !guesses[rowIndex]
//       ? null
//       : guesses[rowIndex][colIndex]}
//   </span>
// )
