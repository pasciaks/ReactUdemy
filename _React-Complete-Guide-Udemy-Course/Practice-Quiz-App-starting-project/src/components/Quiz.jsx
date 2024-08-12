import React, { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  // NOTE: avoid useEffect if possible because it can cause infinite loops

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectedAnswer = useCallback(
    function handleSelectedAnswer(answer) {
      setAnswerState("answered");
      setUserAnswers((prev) => [...prev, answer]);

      setTimeout(() => {
        if (answer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

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

  // shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          // when the key changes, the component will recreate!
          key={`timer-${activeQuestionIndex}`}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <p>Question... # {1 + activeQuestionIndex}</p>
        <p>{QUESTIONS[activeQuestionIndex].text}</p>
        <Answers
          key={`answers-${activeQuestionIndex}`}
          answers={QUESTIONS[activeQuestionIndex].answers}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          answerState={answerState}
          handleSelectedAnswer={handleSelectedAnswer}
        />
        <div id="choices"></div>
      </div>
    </div>
  );
}
