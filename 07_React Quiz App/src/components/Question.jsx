import { useState } from "react";

import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import QUESTIONS from "../questions.js";

// Component for displaying a question and handling user interaction
export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  // State to manage the selected answer and its correctness
  const [answer, setAnswer] = useState({
    selectedAnswer: "", // Currently selected answer
    isCorrect: null, // Whether the selected answer is correct or not
  });

  // Determine the timeout duration based on the answer state
  let timer = 10000; // Default timeout duration

  // Adjust timeout duration based on answer state
  if (answer.selectedAnswer) {
    timer = 1000; // Shorter timeout duration after selecting an answer
  }

  if (answer.isCorrect !== null) {
    timer = 2000; // Even shorter timeout duration after revealing correctness
  }

  // Function to handle selecting an answer
  function handleSelectAnswer(answer) {
    // Update the state to reflect the selected answer
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    // Simulate delay before revealing correctness
    setTimeout(() => {
      // Update the state to reveal the correctness of the selected answer
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer, // Check if the selected answer is correct
      });

      // Delay before calling the onSelectAnswer callback
      setTimeout(() => {
        onSelectAnswer(answer); // Notify the parent component about the selected answer
      }, 2000);
    }, 1000);
  }

  // Determine the answer state based on the current selected answer and its correctness
  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong"; // Mark the answer as correct or wrong
  } else if (answer.selectedAnswer) {
    answerState = "answered"; // Mark the answer as answered but not yet checked for correctness
  }

  // Render the question, timer, and answer options
  return (
    <div id="question">
      {/* Timer component to display and manage the question timer */}
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null} // Callback to handle question timeout or skipping
        mode={answerState} // Pass the answer state to the timer component for appropriate styling
      />
      {/* Display the question text */}
      <h2>{QUESTIONS[index].text}</h2>
      {/* Answers component to display answer options and handle answer selection */}
      <Answers
        answers={QUESTIONS[index].answers} // Pass the answer options to the Answers component
        selectedAnswer={answer.selectedAnswer} // Pass the selected answer to the Answers component
        answerState={answerState} // Pass the answer state to the Answers component for appropriate styling
        onSelect={handleSelectAnswer} // Callback to handle answer selection
      />
    </div>
  );
}

/*
Explanation:

useState: Used to manage the state of the selected answer and its correctness.
timer: Determines the duration of the timer based on the current answer state.
handleSelectAnswer: Function to handle selecting an answer, updating the state, and simulating delays before revealing correctness and notifying the parent component.
answerState: Determines the state of the answer (e.g., answered, correct, wrong) based on the current selected answer and its correctness.
QuestionTimer: Component to display and manage the question timer, including handling timeouts and skipping.
Answers: Component to display answer options and handle answer selection.
*/
