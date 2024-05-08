import { useContext, useState } from "react"; // Importing useContext and useState hooks from React
import { AnimatePresence, motion } from "framer-motion"; // Importing AnimatePresence and motion components from Framer Motion

import { ChallengesContext } from "../store/challenges-context.jsx"; // Importing ChallengesContext from context file
import ChallengeItem from "./ChallengeItem.jsx"; // Importing ChallengeItem component
import ChallengeTabs from "./ChallengeTabs.jsx"; // Importing ChallengeTabs component

// Define the Challenges component
export default function Challenges() {
  // Accessing challenges data from ChallengesContext
  const { challenges } = useContext(ChallengesContext);

  // State variables for selected challenge type and expanded challenge ID
  const [selectedType, setSelectedType] = useState("active");
  const [expanded, setExpanded] = useState(null);

  // Function to handle selecting a challenge type
  function handleSelectType(newType) {
    setSelectedType(newType);
  }

  // Function to handle viewing challenge details and toggling expansion
  function handleViewDetails(id) {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    });
  }

  // Filtering challenges based on their status
  const filteredChallenges = {
    active: challenges.filter((challenge) => challenge.status === "active"),
    completed: challenges.filter(
      (challenge) => challenge.status === "completed"
    ),
    failed: challenges.filter((challenge) => challenge.status === "failed"),
  };

  // Selecting challenges to be displayed based on the selected challenge type
  const displayedChallenges = filteredChallenges[selectedType];

  return (
    <div id="challenges">
      {/* Rendering ChallengeTabs component for selecting challenge type */}
      <ChallengeTabs
        challenges={filteredChallenges}
        onSelectType={handleSelectType}
        selectedType={selectedType}
      >
        {/* AnimatePresence for handling entrance and exit animations */}
        <AnimatePresence mode="wait">
          {/* Rendering list of challenges if there are any */}
          {displayedChallenges.length > 0 && (
            <motion.ol
              key="list"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ y: -30, opacity: 0 }}
              className="challenge-items"
            >
              {/* AnimatePresence for handling item entrance and exit animations */}
              <AnimatePresence>
                {/* Rendering individual ChallengeItem components */}
                {displayedChallenges.map((challenge) => (
                  <ChallengeItem
                    key={challenge.id}
                    challenge={challenge}
                    onViewDetails={() => handleViewDetails(challenge.id)}
                    isExpanded={expanded === challenge.id}
                  />
                ))}
              </AnimatePresence>
            </motion.ol>
          )}

          {/* Rendering fallback message if no challenges are found */}
          {displayedChallenges.length === 0 && (
            <motion.p
              key="fallback"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              No challenges found.
            </motion.p>
          )}
        </AnimatePresence>
      </ChallengeTabs>
    </div>
  );
}

/*
Explanation:

The component imports useContext and useState hooks from React, AnimatePresence and motion components from Framer Motion, and other necessary components like ChallengeItem and ChallengeTabs.
Inside the component, ChallengesContext is accessed using the useContext hook to obtain the list of challenges.
Two state variables, selectedType and expanded, are defined using the useState hook to manage the selected challenge type and the ID of the expanded challenge, respectively.
Functions handleSelectType and handleViewDetails are defined to handle selecting a challenge type and viewing challenge details, respectively.
Challenges are filtered based on their status into filteredChallenges object.
displayedChallenges variable holds the challenges to be displayed based on the selected challenge type.
The component renders ChallengeTabs component to allow selecting challenge types.
Inside AnimatePresence, conditional rendering is used to display either the list of challenges or a fallback message if no challenges are found. Entrance and exit animations are applied to the list and fallback message using motion component from Framer Motion.
Inside the list of challenges, each individual challenge is rendered using the ChallengeItem component, passing necessary props like challenge, onViewDetails, and isExpanded.
*/
