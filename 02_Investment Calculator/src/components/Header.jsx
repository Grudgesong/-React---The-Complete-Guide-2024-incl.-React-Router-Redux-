import logo from "../assets/investment-calculator-logo.png";

// Header component responsible for displaying the header of the application
export default function Header() {
  return (
    // Render the header section with an id of "header"
    <header id="header">
      {/* Render the logo */}
      <img src={logo} alt="Logo showing a money bag" />
      {/* Render the title */}
      <h1>Investment Calculator</h1>
    </header>
  );
}
