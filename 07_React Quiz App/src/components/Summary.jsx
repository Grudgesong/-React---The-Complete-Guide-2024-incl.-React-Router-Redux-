import quizCompleteImg from "../assets/quiz-complete.png"; // Importing the image for the quiz completion icon
import QUESTIONS from "../questions.js"; // Importing the array of quiz questions

// Component for rendering the summary of the quiz, including user statistics and answers
export default function Summary({ userAnswers }) {
  // Filter user answers to find skipped answers
  const skippedAnswers = userAnswers.filter((answer) => answer === null);

  // Filter user answers to find correctly answered questions
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  // Calculate the percentage of skipped, correct, and wrong answers
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />{" "}
      {/* Trophy icon indicating quiz completion */}
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        {/* Display statistics for skipped, correct, and wrong answers */}
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      {/* Render a list of user answers with question numbers and corresponding feedback */}
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          // Determine CSS class based on the type of answer (correct, wrong, or skipped)
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3> {/* Display the question number */}
              <p className="question">{QUESTIONS[index].text}</p>{" "}
              {/* Display the question text */}
              <p className={cssClass}>{answer ?? "Skipped"}</p>{" "}
              {/* Display the user's answer or 'Skipped' if no answer */}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/*
Explanation:

skippedAnswers: Filters the userAnswers array to find all the answers that are null, indicating skipped questions.
correctAnswers: Filters the userAnswers array to find all the answers that match the correct answer for each question.
skippedAnswersShare: Calculates the percentage of skipped answers out of the total number of questions.
correctAnswersShare: Calculates the percentage of correct answers out of the total number of questions.
wrongAnswersShare: Calculates the percentage of wrong answers out of the total number of questions, which is derived from the difference between total, skipped, and correct answers.
The component renders a summary of the quiz, including statistics about skipped, correct, and wrong answers, as well as a list of user answers with feedback (correct, wrong, or skipped) for each question.
*/
