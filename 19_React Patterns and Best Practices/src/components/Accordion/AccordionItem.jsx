import { createContext, useContext } from "react";

// Create a context for the AccordionItem component
const AccordionItemContext = createContext();

// Custom hook to access the AccordionItem context
export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error(
      "AccordionItem-related components must be wrapped by <Accordion.Item>."
    );
  }

  return ctx;
}

// AccordionItem component represents each item in the accordion
export default function AccordionItem({ id, className, children }) {
  return (
    // Provide the id of the accordion item via context
    <AccordionItemContext.Provider value={id}>
      {/* Render the accordion item as a list item with the given className */}
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}

/*
Explanation:

AccordionItem is a React functional component responsible for rendering each item in the accordion.
It creates a context using createContext() from React, named AccordionItemContext.
The useAccordionItemContext() hook is exported to allow child components to access the id of the current accordion item.
Within the component:
It provides the id of the accordion item via context using <AccordionItemContext.Provider>.
The id is passed as the value prop to the provider, making it accessible to child components via the context.
The accordion item is rendered as a list item (<li>) with the specified className, and any children components passed to it are rendered inside the list item.
If a component tries to use useAccordionItemContext() outside of an AccordionItem context, it will throw an error to ensure that AccordionItem-related components are properly nested.
*/
