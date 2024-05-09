import React, { useState } from "react";

// Creating a context object to manage products and favorite toggling
export const ProductsContext = React.createContext({
  products: [], // Initial empty array for products
  toggleFav: (id) => {}, // Initial empty function for toggling favorites
});

// ProductsProvider component
export default (props) => {
  // State to manage the list of products
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  // Function to toggle the favorite status of a product
  const toggleFavorite = (productId) => {
    setProductsList((currentProdList) => {
      const prodIndex = currentProdList.findIndex((p) => p.id === productId);
      const newFavStatus = !currentProdList[prodIndex].isFavorite;
      const updatedProducts = [...currentProdList];
      updatedProducts[prodIndex] = {
        ...currentProdList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  // Providing the products and toggleFav function to the context
  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavorite }}
    >
      {/* Rendering the child components */}
      {props.children}
    </ProductsContext.Provider>
  );
};
