import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js"; // Importing the array of quiz questions
import Question from "./Question.jsx"; // Importing the Question component
import Summary from "./Summary.jsx"; // Importing the Summary component

// Component for managing the quiz state and rendering individual questions
export default function Quiz() {
  // State to store user answers
  const [userAnswers, setUserAnswers] = useState([]);

  // Determine the index of the active question based on the number of user answers
  const activeQuestionIndex = userAnswers.length;

  // Check if the quiz is complete by comparing the number of user answers to the total number of questions
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  // Callback function to handle selecting an answer for a question
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    // Update the userAnswers state by adding the selected answer to the array
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  // Callback function to handle skipping an answer for a question
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null), // If an answer is skipped, pass null as the selected answer
    [handleSelectAnswer] // Dependency array to ensure the callback function remains stable
  );

  // Render the Summary component if the quiz is complete
  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  // Render the Quiz component with the active question
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex} // Ensure that the Question component updates when the active question changes
        index={activeQuestionIndex} // Pass the index of the active question to the Question component
        onSelectAnswer={handleSelectAnswer} // Pass the handleSelectAnswer callback to the Question component
        onSkipAnswer={handleSkipAnswer} // Pass the handleSkipAnswer callback to the Question component
      />
    </div>
  );
}

/*
Explanation:

useState: Used to manage the state of user answers in the quiz.
activeQuestionIndex: Derived from the length of userAnswers, representing the index of the currently active question.
quizIsComplete: Boolean value indicating whether all questions have been answered.
handleSelectAnswer: Callback function to handle selecting an answer for a question. It updates the userAnswers state by adding the selected answer.
handleSkipAnswer: Callback function to handle skipping an answer for a question. It invokes handleSelectAnswer with a null value to indicate that the answer was skipped.
The component conditionally renders either the Summary component if the quiz is complete or the Question component with the active question otherwise.
When rendering the Question component, the activeQuestionIndex, handleSelectAnswer, and handleSkipAnswer callbacks are passed as props to handle user interactions with the question. Using the key prop ensures that the Question component updates when the active question changes.
*/
