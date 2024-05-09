import { useEffect, useState } from "react";

// Functional component Async
const Async = () => {
  // State to store the fetched posts
  const [posts, setPosts] = useState([]);

  // useEffect hook to fetch posts when the component mounts
  useEffect(() => {
    // Fetching data from the specified URL
    fetch("https://jsonplaceholder.typicode.com/posts")
      // Parsing the response as JSON
      .then((response) => response.json())
      // Updating the state with the fetched posts
      .then((data) => {
        setPosts(data);
      });
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Rendering the fetched posts as a list
  return (
    <div>
      <ul>
        {/* Mapping through the posts array and rendering each post */}
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async; // Exporting the Async component

/*
Explanation:

import { useEffect, useState } from 'react';: This line imports the useEffect and useState hooks from the react library. These hooks are used to manage side effects and state in functional components.
const Async = () => { ... }: This is a functional component named Async. It uses arrow function syntax.
const [posts, setPosts] = useState([]);: This line initializes state using the useState hook. It creates a state variable posts to store the fetched posts, and a function setPosts to update the state.
useEffect(() => { ... }, []);: This is an effect hook. It runs the specified callback function (fetchPosts) when the component mounts ([] means it has no dependencies, so it only runs once). Inside the callback function, it fetches data from the specified URL, parses the response as JSON, and updates the state with the fetched posts.
return (...);: This is the JSX code returned by the Async component. It renders a <div> element containing an unordered list (<ul>) of posts. Inside the list, it maps through the posts array and renders each post title as a list item (<li>). Each list item has a unique key attribute set to the id of the post to ensure efficient rendering.
export default Async;: This line exports the Async component as the default export, allowing it to be imported and used in other files.
*/
