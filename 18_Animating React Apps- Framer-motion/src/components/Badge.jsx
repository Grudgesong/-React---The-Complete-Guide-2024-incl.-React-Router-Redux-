import { motion } from "framer-motion"; // Importing the motion component from Framer Motion

// Define the Badge component, which takes a prop named 'caption'
export default function Badge({ caption }) {
  return (
    <motion.span
      // Applying animation to the span element using Framer Motion
      animate={{ scale: [1, 1.2, 1] }} // Define animation for scale property
      transition={{ duration: 0.3 }} // Define transition duration for the animation
      className="badge" // Assigning a class name for styling
    >
      {caption} {/* Rendering the caption text passed as a prop */}
    </motion.span>
  );
}

/*
Explanation:

The code imports the motion component from the Framer Motion library. This component is used to apply animations to React elements.
The Badge function component is defined. It takes a single prop named caption, which likely represents the text content of the badge.
Inside the component's return statement:
<motion.span>: This is a span element wrapped with the motion component, indicating that it will be animated using Framer Motion.
animate: This prop defines the animation to be applied to the element. In this case, it specifies a scale animation where the element's scale will transition from 1 to 1.2 and back to 1.
transition: This prop specifies the transition configuration for the animation. Here, it sets the duration of the animation to 0.3 seconds.
className: This prop assigns a class name to the span element. This class name can be used for styling the badge.
{caption}: This renders the text content passed as the caption prop. It represents the content displayed within the badge.
By wrapping the span element with the motion component and providing animation and transition configurations, the badge can be animated when rendered in the UI. This allows for adding engaging visual effects to UI elements, enhancing the user experience.
*/
