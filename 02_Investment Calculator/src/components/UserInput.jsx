// UserInput component responsible for displaying input fields for user input
export default function UserInput({ onChange, userInput }) {
  return (
    // Render the user input section with an id of "user-input"
    <section id="user-input">
      {/* Input group for initial investment and annual investment */}
      <div className="input-group">
        {/* Input field for initial investment */}
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            // Call onChange function with updated value when input changes
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        {/* Input field for annual investment */}
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            // Call onChange function with updated value when input changes
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      {/* Input group for expected return and duration */}
      <div className="input-group">
        {/* Input field for expected return */}
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            // Call onChange function with updated value when input changes
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>
        {/* Input field for duration */}
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            // Call onChange function with updated value when input changes
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
