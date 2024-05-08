import { useContext } from "react"; // Importing useContext hook from React
import { AnimatePresence, motion } from "framer-motion"; // Importing AnimatePresence and motion components from Framer Motion

import { ChallengesContext } from "../store/challenges-context.jsx"; // Importing ChallengesContext from context file

// Define the ChallengeItem component
export default function ChallengeItem({
  challenge,
  onViewDetails,
  isExpanded,
}) {
  // Destructuring updateChallengeStatus from the ChallengesContext
  const { updateChallengeStatus } = useContext(ChallengesContext);

  // Formatting the deadline date of the challenge
  const formattedDate = new Date(challenge.deadline).toLocaleDateString(
    "en-US",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );

  // Function to handle marking a challenge as failed
  function handleCancel() {
    updateChallengeStatus(challenge.id, "failed");
  }

  // Function to handle marking a challenge as completed
  function handleComplete() {
    updateChallengeStatus(challenge.id, "completed");
  }

  return (
    <motion.li layout exit={{ y: -30, opacity: 0 }}>
      {/* Container for individual challenge item */}
      <article className="challenge-item">
        <header>
          {/* Challenge image */}
          <img {...challenge.image} />
          <div className="challenge-item-meta">
            {/* Challenge title */}
            <h2>{challenge.title}</h2>
            {/* Deadline of the challenge */}
            <p>Complete until {formattedDate}</p>
            {/* Buttons for marking challenge as failed or completed */}
            <p className="challenge-item-actions">
              <button onClick={handleCancel} className="btn-negative">
                Mark as failed
              </button>
              <button onClick={handleComplete}>Mark as completed</button>
            </p>
          </div>
        </header>
        {/* Container for challenge details */}
        <div className="challenge-item-details">
          <p>
            {/* Button to view challenge details */}
            <button onClick={onViewDetails}>
              View Details{" "}
              <motion.span
                // Rotating icon based on expansion state
                animate={{ rotate: isExpanded ? 180 : 0 }}
                className="challenge-item-details-icon"
              >
                &#9650;
              </motion.span>
            </button>
          </p>
          {/* AnimatePresence for smooth entrance and exit animations */}
          <AnimatePresence>
            {/* Display challenge description if expanded */}
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                {/* Challenge description */}
                <p className="challenge-item-description">
                  {challenge.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </article>
    </motion.li>
  );
}

/*
Explanation:

The component imports useContext hook from React for accessing context, and AnimatePresence and motion components from Framer Motion for animation-related functionalities.
The component accepts props challenge, onViewDetails, and isExpanded, likely passed from a parent component.
Inside the component, useContext hook is used to access updateChallengeStatus function from ChallengesContext, allowing the component to interact with challenge state.
The formattedDate variable is calculated by converting the deadline date of the challenge to a formatted string using toLocaleDateString.
handleCancel and handleComplete functions are defined to handle marking a challenge as failed or completed, respectively, using the updateChallengeStatus function from context.
The component renders a list item (<li>) wrapped with the motion component for animations. Inside, it renders an article element representing an individual challenge item.
The challenge item includes the challenge image, title, deadline, buttons for marking challenge status, and a button for viewing challenge details.
AnimatePresence component is used for smooth entrance and exit animations of the challenge description.
Challenge description is rendered inside a motion.div element with animation properties defined for initial render, animation, and exit. It is only displayed if isExpanded prop is true, indicating that the user wants to view the challenge details.
The component utilizes Framer Motion's animation capabilities to provide smooth and visually appealing interactions for individual challenge items within the UI.
*/
