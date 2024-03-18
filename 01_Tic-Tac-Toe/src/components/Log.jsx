// Log component responsible for displaying the game turns
export default function Log({ turns }) {
  return (
    // Render the log as an ordered list
    <ol id="log">
      {/* Map through each turn in the turns array */}
      {turns.map((turn) => (
        // Each turn is represented as a list item
        <li key={`${turn.square.row}${turn.square.col}`}>
          {/* Display the player who made the turn and the selected square */}
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
