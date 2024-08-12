import React, { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  handleSelectedAnswer,
}) {
  const shuffledAnswers = useRef();

  if (shuffledAnswers.current === undefined) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort((a, b) => {
      return 0.5 - Math.random();
    });
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((choice, index) => {
        const isSelected = selectedAnswer === choice;
        let cssClasses = "";
        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }

        return (
          <li className="answer" key={index}>
            <button
              className={cssClasses}
              onClick={() => handleSelectedAnswer(choice)}
            >
              {choice}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
