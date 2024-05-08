import { motion } from "framer-motion"; // Importing motion component from Framer Motion library

import Badge from "./Badge.jsx"; // Importing the Badge component

// Define the Tab component
function Tab({ isSelected, onSelect, badgeCaption, children }) {
  return (
    <li>
      {/* Button representing a tab, with optional 'selected' class if isSelected is true */}
      <button
        className={isSelected ? "selected" : undefined}
        onClick={onSelect}
      >
        {/* Text content of the tab */}
        {children}
        {/* Badge component displaying a badge with a caption */}
        <Badge key={badgeCaption} caption={badgeCaption}></Badge>
      </button>
      {/* Displaying an active tab indicator if isSelected is true */}
      {isSelected && (
        <motion.div layoutId="tab-indicator" className="active-tab-indicator" />
      )}
    </li>
  );
}

// Define the ChallengeTabs component
export default function ChallengeTabs({
  selectedType,
  onSelectType,
  challenges,
  children,
}) {
  return (
    <>
      {/* Menu containing tabs */}
      <menu id="tabs">
        {/* Tab for active challenges */}
        <Tab
          isSelected={selectedType === "active"}
          onSelect={() => onSelectType("active")}
          badgeCaption={challenges.active.length}
        >
          Active
        </Tab>
        {/* Tab for completed challenges */}
        <Tab
          isSelected={selectedType === "completed"}
          onSelect={() => onSelectType("completed")}
          badgeCaption={challenges.completed.length}
        >
          Completed
        </Tab>
        {/* Tab for failed challenges */}
        <Tab
          isSelected={selectedType === "failed"}
          onSelect={() => onSelectType("failed")}
          badgeCaption={challenges.failed.length}
        >
          Failed
        </Tab>
      </menu>
      {/* Content area for the selected tab */}
      <div>{children}</div>
    </>
  );
}

/*
Explanation:

The component imports the motion component from the Framer Motion library and the Badge component.
Inside the Tab component:
It represents an individual tab in the tab menu.
A button element is used to create the tab. It receives a class of 'selected' if it is currently selected (isSelected is true).
The Badge component is rendered within the button, displaying a badge with a caption representing the number of challenges in the respective category (badgeCaption).
An active tab indicator (active-tab-indicator) is displayed if the tab is selected (isSelected is true). This indicator is wrapped in a motion.div to allow for layout animations using Framer Motion.
Inside the ChallengeTabs component:
It represents the container for the tab menu and the content area.
A menu element with the id 'tabs' contains the individual Tab components for each challenge status category (active, completed, and failed).
Each Tab component receives props to determine if it is selected (isSelected), to handle selection (onSelect), and to display the number of challenges in the respective category (badgeCaption).
The content area for the selected tab is represented by a div, which renders the children passed to the ChallengeTabs component. This allows for the rendering of additional content related to the selected tab.
*/
