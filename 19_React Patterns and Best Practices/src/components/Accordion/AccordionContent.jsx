import { useAccordionContext } from "./Accordion.jsx";
import { useAccordionItemContext } from "./AccordionItem.jsx";

export default function AccordionContent({ className, children }) {
  const { openItemId } = useAccordionContext();
  const id = useAccordionItemContext();

  const isOpen = openItemId === id;

  return (
    <div
      className={
        isOpen ? `${className ?? ""} open` : `${className ?? ""} close`
      }
    >
      {children}
    </div>
  );
}

/*
Explanation:

AccordionContent is a React functional component responsible for rendering the content of an accordion item.
It imports useAccordionContext from the Accordion.jsx file and useAccordionItemContext from the AccordionItem.jsx file. These hooks are used to access the context provided by the Accordion and AccordionItem components respectively.
Within the component:
useAccordionContext() retrieves the openItemId from the Accordion context, which indicates the currently open accordion item.
useAccordionItemContext() retrieves the id of the current accordion item.
It determines whether the content should be rendered as open or closed based on whether the id matches the openItemId.
The content div is rendered with a className of either "open" or "close" based on the open state, and any additional className passed to the component.
The children of the AccordionContent component are rendered inside this div, representing the content of the accordion item.
*/
