import { calculateInvestmentResults, formatter } from "../util/investment.js";

// Results component responsible for displaying investment calculation results
export default function Results({ input }) {
  // Calculate investment results based on input data
  const resultsData = calculateInvestmentResults(input);

  // Calculate initial investment
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  // Render the Results table
  return (
    <table id="result">
      <thead>
        <tr>
          {/* Table headers */}
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {/* Map through each year's data and render corresponding rows */}
        {resultsData.map((yearData) => {
          // Calculate total interest for the year
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          // Calculate total amount invested for the year
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          // Render table row for each year's data
          return (
            <tr key={yearData.year}>
              {/* Display year */}
              <td>{yearData.year}</td>
              {/* Display investment value formatted using formatter */}
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              {/* Display interest for the year formatted using formatter */}
              <td>{formatter.format(yearData.interest)}</td>
              {/* Display total interest formatted using formatter */}
              <td>{formatter.format(totalInterest)}</td>
              {/* Display total amount invested formatted using formatter */}
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
