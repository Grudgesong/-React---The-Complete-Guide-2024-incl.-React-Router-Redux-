// Importing the Player component from the specified file path
import Player from "./components/Player.jsx";
// Importing the TimerChallenge component from the specified file path
import TimerChallenge from "./components/TimerChallenge.jsx";

// Define the main App component
function App() {
  return (
    <>
      {/* Rendering the Player component */}
      <Player />
      {/* Rendering a set of TimerChallenge components with different target times */}
      <div id="challenges">
        {/* TimerChallenge component with title "Easy" and target time of 1 second */}
        <TimerChallenge title="Easy" targetTime={1} />
        {/* TimerChallenge component with title "Not easy" and target time of 5 seconds */}
        <TimerChallenge title="Not easy" targetTime={5} />
        {/* TimerChallenge component with title "Getting tough" and target time of 10 seconds */}
        <TimerChallenge title="Getting tough" targetTime={10} />
        {/* TimerChallenge component with title "Pros only" and target time of 15 seconds */}
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

// Exporting the App component as the default export
export default App;
