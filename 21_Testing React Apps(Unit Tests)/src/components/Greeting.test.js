import { render, screen } from "@testing-library/react"; // Importing render and screen utilities from '@testing-library/react'
import userEvent from "@testing-library/user-event"; // Importing userEvent utility from '@testing-library/user-event'
import Greeting from "./Greeting"; // Importing the Greeting component

describe("Greeting component", () => {
  // Test case to check if "Hello World" is rendered as text
  test('renders "Hello World" as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // No specific action needed here as we're checking for static text

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  // Test case to check if "good to see you" is rendered if the button was NOT clicked
  test('renders "good to see you" if the button was NOT clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // No specific action needed here as we're checking for initial state

    // Assert
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  // Test case to check if "Changed!" is rendered if the button was clicked
  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button"); // Finding the button element
    userEvent.click(buttonElement); // Simulating a click event on the button

    // Assert
    const outputElement = screen.getByText("Changed!"); // Finding the "Changed!" text
    expect(outputElement).toBeInTheDocument();
  });

  // Test case to check if "good to see you" is not rendered if the button was clicked
  test('does not render "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button"); // Finding the button element
    userEvent.click(buttonElement); // Simulating a click event on the button

    // Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    }); // Using queryByText to check if the text is not present
    expect(outputElement).toBeNull();
  });
});

/*
Explanation:

import { render, screen } from '@testing-library/react';: Imports the render and screen utilities from the @testing-library/react package. These utilities are used for rendering React components in tests and querying the rendered elements, respectively.
import userEvent from '@testing-library/user-event';: Imports the userEvent utility from the @testing-library/user-event package. This utility is used to simulate user interactions, such as clicking buttons.
The describe block groups together related test cases for the Greeting component.
Each test block represents an individual test case.
render(<Greeting />); is used to render the Greeting component before each test case.
screen.getByText is used to find elements containing specific text. In some cases, screen.queryByText is used to check if specific text is not present.
userEvent.click(buttonElement); is used to simulate a click event on a button element.
expect(...).toBeInTheDocument(); is used to assert that an element is present in the document. In the case of the last test, expect(outputElement).toBeNull(); is used to assert that an element is not present in the document.
*/
