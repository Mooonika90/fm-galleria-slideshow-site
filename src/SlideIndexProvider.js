import React, { createContext, useContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { Data } from './data/data';

const SlideIndexContext = createContext();

export function useSlideIndex() {
	return useContext(SlideIndexContext);
}

export function SlideIndexProvider({ children }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isSlideshowActive, setSlideshowActive] = useState(false);
	const navigate = useNavigate();

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
		navigate(`/slides/${(currentIndex + 1 + Data.length) % Data.length}`);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
		navigate(`/slides/${(currentIndex - 1 + Data.length) % Data.length}`);
	};

	const toggleSlideshow = () => {
		setSlideshowActive(!isSlideshowActive);
	};
	let interval;
	useEffect(() => {
		if (isSlideshowActive) {
			interval = setInterval(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
				navigate(`/slides/${(currentIndex + 1 + Data.length) % Data.length}`);
			}, 2000);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [isSlideshowActive, navigate]);

	return (
		<SlideIndexContext.Provider
			value={{
				artworks: Data,
				currentIndex,
				isSlideshowActive,
				nextSlide,
				prevSlide,
				setCurrentIndex,
				toggleSlideshow,
			}}>
			{children}
		</SlideIndexContext.Provider>
	);
}
