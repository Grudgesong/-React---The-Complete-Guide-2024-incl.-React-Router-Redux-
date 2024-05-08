import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import cityImg from "../assets/city.jpg";
import heroImg from "../assets/hero.png";

export default function WelcomePage() {
  // Using Framer Motion hooks for scroll-based animations
  const { scrollY } = useScroll();

  // Define animations for various elements based on scroll position
  const yCity = useTransform(scrollY, [0, 200], [0, -100]);
  const opacityCity = useTransform(
    scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  );
  const yHero = useTransform(scrollY, [0, 200], [0, -150]);
  const opacityHero = useTransform(scrollY, [0, 300, 500], [1, 1, 0]);
  const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 300]);
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.5]);

  return (
    <>
      {/* Header section */}
      <header id="welcome-header">
        {/* Animated content with motion.div */}
        <motion.div
          id="welcome-header-content"
          style={{ scale: scaleText, y: yText }}
        >
          <h1>Ready for a challenge?</h1>
          {/* Link to challenges page */}
          <Link id="cta-link" to="/challenges">
            Get Started
          </Link>
        </motion.div>
        {/* Animated city image */}
        <motion.img
          style={{ opacity: opacityCity, y: yCity }}
          src={cityImg}
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
        {/* Animated hero image */}
        <motion.img
          style={{ y: yHero, opacity: opacityHero }}
          src={heroImg}
          alt="A superhero wearing a cape"
          id="hero-image"
        />
      </header>

      {/* Main content section */}
      <main id="welcome-content">
        {/* Sections explaining the platform */}
        <section>
          <h2>There&apos;s never been a better time.</h2>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it&apos;s personal growth, professional
            achievements, or just for fun, we&apos;ve got you covered.
          </p>
        </section>

        <section>
          <h2>Why Challenge Yourself?</h2>
          <p>
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            {/* List of platform features */}
            <li>Custom challenge creation: Set the rules, define your pace.</li>
            <li>
              Track your progress: See your growth over time with our analytics
              tools.
            </li>
            <li>
              Community Support: Join our community and get motivated by peers.
            </li>
          </ul>
        </section>

        <section>
          <h2>Join Thousands Embracing The Challenge</h2>
          <p>
            {/* Testimonial from a user */}
            “I never realized what I was capable of until I set my first
            challenge here. It&apos;s been a transformative experience!” - Alex
            P.
          </p>
          {/* Additional testimonials or carousel can be added here */}
        </section>
      </main>
    </>
  );
}

/*
Explanation:

The component imports necessary dependencies like Link from 'react-router-dom' for routing and motion, useScroll, and useTransform from 'framer-motion' for scroll-based animations.
It defines state variables (scrollY) and various animated values (yCity, opacityCity, etc.) using Framer Motion's hooks like useScroll and useTransform.
In the render function:
The header section contains animated content with the challenge title and a call-to-action link to the challenges page. It also includes animated images of a city skyline and a superhero.
The main content section includes different sections explaining the platform, its benefits, features, and a testimonial from a user.
Comments are added throughout the code to explain the purpose of each section and element. These comments help in understanding the code structure and functionality.
*/
