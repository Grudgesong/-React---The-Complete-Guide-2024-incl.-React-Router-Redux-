import { render, screen } from "@testing-library/react"; // Importing render and screen utilities from '@testing-library/react'
import Async from "./Async"; // Importing the Async component

describe("Async component", () => {
  // Test case for rendering posts if request succeeds
  test("renders posts if request succeeds", async () => {
    // Mocking the fetch function using jest
    window.fetch = jest.fn();
    // Mocking the resolved value of the fetch function to return a promise
    window.fetch.mockResolvedValueOnce({
      // Mocking the json() method of the response object to return a promise
      json: async () => [{ id: "p1", title: "First post" }],
    });
    // Rendering the Async component
    render(<Async />);

    // Asynchronously finding all list item elements
    const listItemElements = await screen.findAllByRole("listitem");
    // Expecting that there are list item elements found
    expect(listItemElements).not.toHaveLength(0);
  });
});

/*
Explanation:

import { render, screen } from '@testing-library/react';: This line imports the render and screen utilities from the @testing-library/react package. These utilities are used for rendering React components in tests and querying the rendered elements, respectively.
import Async from './Async';: This line imports the Async component that we want to test.
describe('Async component', () => { ... });: This block of code defines a test suite using the describe function. It groups together related test cases for the Async component.
test('renders posts if request succeeds', async () => { ... });: This block of code defines a test case using the test function. It tests whether the Async component renders posts when the fetch request succeeds.
window.fetch = jest.fn();: This line mocks the fetch function using jest.fn() so that we can control its behavior in the test.
window.fetch.mockResolvedValueOnce({ ... });: This line mocks the resolved value of the fetch function to return a promise that resolves to a response object with a json method. The json method is mocked to return a promise that resolves to an array of post objects.
render(<Async />);: This line renders the Async component into a virtual DOM provided by @testing-library/react.
const listItemElements = await screen.findAllByRole('listitem');: This line asynchronously finds all list item elements in the rendered component using the screen.findAllByRole query. It waits for the promise to resolve before proceeding to the next line.
expect(listItemElements).not.toHaveLength(0);: This line asserts that the listItemElements array is not empty, indicating that the posts were successfully rendered. If the assertion fails, it means that the test case failed.
*/
