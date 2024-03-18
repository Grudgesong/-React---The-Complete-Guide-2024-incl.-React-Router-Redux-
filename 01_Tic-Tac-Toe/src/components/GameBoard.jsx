// GameBoard component responsible for rendering the game board
export default function GameBoard({ onSelectSquare, board }) {
  return (
    // Render the game board as an ordered list
    <ol id="game-board">
      {/* Map through each row of the game board */}
      {board.map((row, rowIndex) => (
        // Each row is represented as a list item
        <li key={rowIndex}>
          {/* Render an ordered list for each row */}
          <ol>
            {/* Map through each column of the row */}
            {row.map((playerSymbol, colIndex) => (
              // Each cell is represented as a list item
              <li key={colIndex}>
                {/* Render a button for each cell */}
                <button
                  // When clicked, call onSelectSquare with row and column indices
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  // Disable button if the cell is already occupied
                  disabled={playerSymbol !== null}
                >
                  {/* Display the player's symbol in the cell */}
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
