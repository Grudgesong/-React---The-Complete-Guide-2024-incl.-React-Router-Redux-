import { useAccordionContext } from "./Accordion.jsx";
import { useAccordionItemContext } from "./AccordionItem.jsx";

// AccordionTitle component represents the title of an accordion item
export default function AccordionTitle({ className, children }) {
  // Access the accordion context to get the toggleItem function
  const { toggleItem } = useAccordionContext();
  // Access the accordion item context to get the id of the current item
  const id = useAccordionItemContext();

  // Click handler to toggle the open state of the accordion item
  const handleClick = () => {
    toggleItem(id); // Toggle the open state of the current item
  };

  return (
    // Render the title as an h3 element with the specified className
    // Clicking on the title triggers the handleClick function to toggle the item
    <h3 className={className} onClick={handleClick}>
      {children}
    </h3>
  );
}

/*
Explanation:

AccordionTitle is a React functional component responsible for rendering the title of an accordion item.
It imports useAccordionContext from the Accordion.jsx file and useAccordionItemContext from the AccordionItem.jsx file. These hooks are used to access the context provided by the Accordion and AccordionItem components respectively.
Within the component:
useAccordionContext() retrieves the toggleItem function from the Accordion context, which is used to toggle the open state of accordion items.
useAccordionItemContext() retrieves the id of the current accordion item.
When the title is clicked (onClick event), it triggers the handleClick function.
handleClick calls toggleItem with the id of the current item, toggling its open state.
The title is rendered as an <h3> element with the specified className, and any children components passed to it are rendered inside the title.
*/
