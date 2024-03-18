// GameOver component responsible for displaying the game result and providing an option to restart
export default function GameOver({ winner, onRestart }) {
  return (
    // Container for the game over message and restart button
    <div id="game-over">
      {/* Heading indicating the end of the game */}
      <h2>Game Over!</h2>
      {/* Display the winner if there is one */}
      {winner && <p>{winner} won!</p>}
      {/* Display a draw message if there's no winner */}
      {!winner && <p>It&apos;s a draw!</p>}
      {/* Button to initiate a rematch */}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
