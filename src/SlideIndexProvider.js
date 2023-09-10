import React, { createContext, useContext, useState } from 'react';

const SlideIndexContext = createContext();

export function SlideIndexProvider({ children }) {
	const [slideIndex, setSlideIndex] = useState(0);

	return (
		<SlideIndexContext.Provider value={{ slideIndex, setSlideIndex }}>
			{children}
		</SlideIndexContext.Provider>
	);
}

export function useSlideIndex() {
	return useContext(SlideIndexContext);
}
