// Importing the useState and useRef hooks from the 'react' library
import { useState, useRef } from "react";

// Defining the Player component
export default function Player() {
  // Creating a reference for the player's name input field
  const playerName = useRef();

  // Defining state for the entered player name using useState hook
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  // Function to handle the button click event
  function handleClick() {
    // Setting the entered player name using the value from the input field
    setEnteredPlayerName(playerName.current.value);
    // Clearing the input field after setting the player name
    playerName.current.value = "";
  }

  // Rendering the Player component
  return (
    <section id="player">
      {/* Displaying a welcome message with the entered player name, or 'unknown entity' if no name entered */}
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      {/* Input field for entering the player name */}
      <p>
        <input ref={playerName} type="text" />
        {/* Button to set the player name */}
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
