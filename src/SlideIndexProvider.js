import React, { createContext, useContext, useState, useEffect } from "react";
import { Data } from "./data/data"; // Import the data

const SlideIndexContext = createContext();

export function useSlideIndex() {
  return useContext(SlideIndexContext);
}

export function SlideIndexProvider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSlideshowActive, setSlideshowActive] = useState(false);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
  };


  const toggleSlideshow = () => {
    setSlideshowActive(!isSlideshowActive);
  };

  useEffect(() => {
    let interval;

    if (isSlideshowActive) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000); 
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isSlideshowActive]);

  return (
    <SlideIndexContext.Provider
      value={{
        artworks: Data,
        currentIndex,
        isSlideshowActive,
        nextSlide,
        prevSlide,
        setCurrentIndex,
        toggleSlideshow
      }}
    >
      {children}
    </SlideIndexContext.Provider>
  );
}


