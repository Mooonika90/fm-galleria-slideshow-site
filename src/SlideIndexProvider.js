import { createContext, useState, useContext } from 'react';

const SlideIndexContext = createContext();

export function SlideIndexProvider({ children }) {
	const [showing, setShowing] = useState(false);

	const [slideIndex, setSlideIndex] = useState(0);
	

	return (
		<SlideIndexContext.Provider
			value={[showing, setShowing, slideIndex, setSlideIndex]}>
			{children}
		</SlideIndexContext.Provider>
	);
}

export function useSlideIndex() {
	return useContext(SlideIndexContext);
}
