// Define an action type for toggling the favorite status of a product
export const TOGGLE_FAV = "TOGGLE_FAV";

// Define an action creator function called toggleFav, which takes an id as a parameter
export const toggleFav = (id) => {
  // Return an action object with a type property indicating the action type (TOGGLE_FAV) and the productId
  return { type: TOGGLE_FAV, productId: id };
};

/*
export const TOGGLE_FAV = 'TOGGLE_FAV';: This line declares a constant variable TOGGLE_FAV and assigns it the string value 'TOGGLE_FAV'. This constant is used to define the type of the action, which typically describes the action that will be performed.
export const toggleFav = id => { ... }: This line declares an action creator function named toggleFav. Action creators are functions that create and return action objects. It takes an id as a parameter, which typically represents the identifier of the product whose favorite status is being toggled.
return { type: TOGGLE_FAV, productId: id };: Inside the toggleFav function, it returns an action object. This object contains a type property with the value TOGGLE_FAV, indicating the type of action being performed. Additionally, it includes a productId property, which contains the id of the product associated with the action.
*/
