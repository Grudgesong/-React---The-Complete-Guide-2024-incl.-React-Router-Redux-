import { useRef, useState } from "react";

// SearchableList component renders a list with search functionality
export default function SearchableList({ items, itemKeyFn, children }) {
  // useRef to keep track of the last change event
  const lastChange = useRef();
  // useState to manage the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Filter items based on search term
  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle input change event
  function handleChange(event) {
    // If there's a previous change event, clear the timeout
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    // Set a new timeout for updating the search term after 500ms
    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(event.target.value);
    }, 500);
  }

  return (
    <div className="searchable-list">
      {/* Input field for searching */}
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {/* Render search results */}
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>
            {/* Render each item using the children function */}
            {children(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
Explanation:

SearchableList is a React functional component that renders a list with search functionality.
It accepts three props:
items: An array of items to be displayed in the list.
itemKeyFn: A function used to generate unique keys for each item.
children: A function used to render each item.
It uses useRef to keep track of the last change event and useState to manage the search term.
Inside the component:
It filters the items array based on the searchTerm using the filter method.
The handleChange function is triggered when the input field value changes. It updates the searchTerm state after a delay of 500 milliseconds to debounce the input.
The filtered searchResults are mapped and rendered as list items. Each item is rendered using the children function, and its key is generated using the itemKeyFn function.
This component provides a simple yet effective way to implement search functionality for a list of items in a React application.
*/
