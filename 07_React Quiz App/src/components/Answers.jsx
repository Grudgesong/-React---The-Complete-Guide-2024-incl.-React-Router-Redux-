import { useRef } from "react";

// Component for displaying answers
export default function Answers({
  answers, // Array of answer options
  selectedAnswer, // Currently selected answer
  answerState, // State of the answer (e.g., answered, correct, wrong)
  onSelect, // Function to handle answer selection
}) {
  // useRef hook to shuffle answers only once during component lifecycle
  const shuffledAnswers = useRef();

  // If shuffledAnswers is not initialized yet, shuffle the answers
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers]; // Create a copy of the answers array
    shuffledAnswers.current.sort(() => Math.random() - 0.5); // Shuffle the answers randomly
  }

  // Render the answers
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer; // Check if the answer is selected
        let cssClass = ""; // CSS class for styling the answer button

        // Add CSS class based on answer state
        if (answerState === "answered" && isSelected) {
          cssClass = "selected"; // Add 'selected' class if the answer is selected and question is answered
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState; // Add 'correct' or 'wrong' class if the answer is selected and question is answered
        }

        // Render each answer as a list item with a button
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)} // Call onSelect function when the answer button is clicked
              className={cssClass} // Apply CSS class
              disabled={answerState !== ""} // Disable the button if the answer state is not empty (i.e., question is already answered)
            >
              {answer} {/* Display the answer text */}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

/*
Explanation:

useRef: Used to persist the shuffled order of answers across re-renders without causing re-shuffling on each render.
shuffledAnswers.current: Stores the shuffled order of answers. It's initialized with useRef to persist its value across re-renders.
if (!shuffledAnswers.current): Checks if the shuffled answers have been initialized yet. If not, shuffles the answers array and assigns it to shuffledAnswers.current.
map((answer)): Iterates over each answer in the shuffled order.
isSelected: Checks if the current answer is the selected answer.
cssClass: Determines the CSS class to apply to the answer button based on the answer state and whether it's selected.
button: Renders each answer option as a button element. It calls the onSelect function when clicked, applies appropriate CSS classes based on the answer state and selection, and disables the button if the question has already been answered.
*/
