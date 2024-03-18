import { useState } from "react";

// Player component responsible for displaying and editing player information
export default function Player({
  initialName, // Initial name of the player
  symbol, // Symbol associated with the player (X or O)
  isActive, // Boolean indicating whether the player is active or not
  onChangeName, // Function to handle name changes
}) {
  // State variables for player name and edit mode
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle edit button click
  function handleEditClick() {
    // Toggle edit mode
    setIsEditing((editing) => !editing);

    // If editing is being turned off, save the updated player name
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  // Function to handle input change for player name
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  // Render the player name as a span or input based on edit mode
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  // Render the Player component
  return (
    <li className={isActive ? "active" : undefined}>
      {/* Display player name and symbol */}
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      {/* Render Edit or Save button based on edit mode */}
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
