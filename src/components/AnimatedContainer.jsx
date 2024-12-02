import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames";

const AnimatedContainer = ({ children, animation = "slideIn" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when the element is in view
        } else {
          setIsVisible(false); // Reset animation when the element leaves view
        }
      },
      { threshold: 0.02 } // Trigger when 10% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={classNames(
        "transition-all ease-in-out transform  ", // Smooth transition for all properties
        {
          "opacity-0 translate-x-[10%]": !isVisible, // Start off-screen to the right
          "opacity-100 translate-x-0": isVisible, // Move to its original position when visible
          [`animate-${animation}`]: isVisible, // Apply animation class (e.g., slideIn)
        }
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedContainer;
