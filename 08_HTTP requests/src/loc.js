// Function to convert degrees to radians
function toRad(value) {
  return (value * Math.PI) / 180;
}

// Function to calculate the distance between two geographical coordinates using Haversine formula
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRad(lat2 - lat1); // Difference in latitude in radians
  const dLon = toRad(lng2 - lng1); // Difference in longitude in radians
  const l1 = toRad(lat1); // Latitude 1 in radians
  const l2 = toRad(lat2); // Latitude 2 in radians

  // Haversine formula to calculate distance
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(l1) * Math.cos(l2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // Central angle
  const d = R * c; // Distance in kilometers
  return d;
}

// Function to sort places by distance from a given location
export function sortPlacesByDistance(places, lat, lon) {
  // Create a copy of the places array
  const sortedPlaces = [...places];

  // Sort the places array based on the distance from the given location
  sortedPlaces.sort((a, b) => {
    // Calculate the distance between each place and the given location
    const distanceA = calculateDistance(lat, lon, a.lat, a.lon);
    const distanceB = calculateDistance(lat, lon, b.lat, b.lon);

    // Compare distances to determine the sorting order
    return distanceA - distanceB;
  });

  // Return the sorted array of places
  return sortedPlaces;
}

/*
Explanation:

toRad Function:

This function converts degrees to radians. Many trigonometric functions in JavaScript use radians instead of degrees.
calculateDistance Function:

This function calculates the distance between two geographical coordinates using the Haversine formula, which gives great-circle distances between two points on a sphere.
It takes latitude and longitude values for two points and returns the distance between them in kilometers.
sortPlacesByDistance Function:

This function sorts an array of places by their distance from a given location (specified by latitude and longitude).
It first creates a copy of the input array to avoid mutating the original array.
Then, it sorts the copied array based on the calculated distances using the calculateDistance function.
Finally, it returns the sorted array of places.
*/
