import React from "react";
import { Route } from "react-router-dom";

// Importing components
import Navigation from "./components/Nav/Navigation"; // Navigation component
import ProductsPage from "./containers/Products"; // Products page container
import FavoritesPage from "./containers/Favorites"; // Favorites page container
import Counter from "./containers/Counter"; // Counter container

// App component
const App = (props) => {
  return (
    <React.Fragment>
      {/* Navigation component */}
      <Navigation />
      {/* Main content */}
      <main>
        {/* Route for displaying ProductsPage component when URL path is exactly '/' */}
        <Route path="/" component={ProductsPage} exact />
        {/* Route for displaying FavoritesPage component when URL path is '/favorites' */}
        <Route path="/favorites" component={FavoritesPage} />
        {/* Counter component */}
        <Counter />
      </main>
    </React.Fragment>
  );
};

export default App; // Exporting App component
