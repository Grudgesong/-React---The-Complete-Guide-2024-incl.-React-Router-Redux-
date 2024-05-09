import { createContext, useContext, useState } from "react";

import AccordionItem from "./AccordionItem.jsx";
import AccordionTitle from "./AccordionTitle.jsx";
import AccordionContent from "./AccordionContent.jsx";

// Create a context for the Accordion component
const AccordionContext = createContext();

// Custom hook to access the Accordion context
export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "Accordion-related components must be wrapped by <Accordion>."
    );
  }

  return ctx;
}

// Main Accordion component
export default function Accordion({ children, className }) {
  // State to track the currently open item
  const [openItemId, setOpenItemId] = useState();

  // Function to toggle the open state of an item
  function toggleItem(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  // Context value to provide to child components
  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    // Provide the context value to child components
    <AccordionContext.Provider value={contextValue}>
      {/* Render children inside an unordered list with the given className */}
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

// Attach sub-components to the main Accordion component
Accordion.Item = AccordionItem; // AccordionItem is responsible for rendering each accordion item
Accordion.Title = AccordionTitle; // AccordionTitle represents the title of each accordion item
Accordion.Content = AccordionContent; // AccordionContent holds the content of each accordion item

/*
This code defines a React component called Accordion along with its related sub-components (AccordionItem, AccordionTitle, AccordionContent).

The Accordion component manages the state for controlling which accordion item is open.
The useAccordionContext hook allows accessing the Accordion's context, ensuring that Accordion-related components are correctly nested.
Each accordion item is represented by Accordion.Item, which is rendered using the AccordionItem component.
Accordion.Title and Accordion.Content are responsible for rendering the title and content of each accordion item respectively.
*/
