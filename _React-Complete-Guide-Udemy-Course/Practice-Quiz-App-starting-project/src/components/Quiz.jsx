import React, { useState, useEffect, useCallback } from "react";

import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    answer
  ) {
    setUserAnswers((prev) => [...prev, answer]);
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy" />
        <p>Quiz is over!</p>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];

  shuffledAnswers.sort((a, b) => {
    return 0.5 - Math.random();
  });

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          // when the key changes, the component will recreate!
          key={activeQuestionIndex}
          timeout={1000}
          onTimeout={handleSkipAnswer}
        />
        <p>Question... # {1 + activeQuestionIndex}</p>
        <p>{QUESTIONS[activeQuestionIndex].text}</p>
        <div id="choices">
          <ul id="answers">
            {shuffledAnswers.map((choice, index) => (
              <li className="answer" key={index}>
                <button onClick={() => handleSelectedAnswer(choice)}>
                  {choice}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
