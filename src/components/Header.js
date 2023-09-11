// import { useEffect, useState } from 'react';
// import logo from '../assets/logo.svg';
// import { Link, useLocation } from 'react-router-dom';
// import { useSlideIndex } from '../SlideIndexProvider';
// import { Data } from '../data/data';

// function Header() {
// 	const location = useLocation();
// 	const [showing, setShowing, slideIndex, setSlideIndex] = useSlideIndex();

// 	const isSlideShowPage = location.pathname.startsWith('/slides/');

// 	console.log(slideIndex);

// 	const linkTo = isSlideShowPage ? '/' : `/slides/${slideIndex}`;
// 	return (
// 		<header>
// 			<nav>
// 				<a href='/'>
// 					<img className='logo' src={logo} alt='Logo' />
// 				</a>
// 				<Link className='slideLink' to={linkTo}>
// 					<h1>{isSlideShowPage ? 'Return to gallery' : 'Start slideshow'}</h1>
// 				</Link>
// 			</nav>

// 			<hr />
// 		</header>
// 	);
// }

// export default Header;

import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { useSlideIndex } from '../SlideIndexProvider';
import { Data } from '../data/data';

function Header() {
	const location = useLocation();
	const [showing, setShowing, slideIndex, setSlideIndex] = useSlideIndex();
	const isSlideShowPage = location.pathname.startsWith('/slides/');

	const linkTo = isSlideShowPage ? '/' : `/slides/${slideIndex}`;

	// Define a function to advance the slide
	const nextSlide = () => {
		setSlideIndex((prevIndex) => (prevIndex + 1) % Data.length);
	};

	useEffect(() => {
		let intervalId;

		if (isSlideShowPage) {
			// Start the carousel when on the slideshow page
			intervalId = setInterval(nextSlide, 2000); // Change slide every 2 seconds (adjust as needed)
		} else {
			// Clear the interval when not on the slideshow page
			clearInterval(intervalId);
		}

		// Clean up the interval when the component unmounts or when not on the slideshow page
		return () => clearInterval(intervalId);
	}, [isSlideShowPage]);

	return (
		<header>
			<nav>
				<a href='/'>
					<img className='logo' src={logo} alt='Logo' />
				</a>
				<Link className='slideLink' to={linkTo}>
					<h1>{isSlideShowPage ? 'Return to gallery' : 'Start slideshow'}</h1>
				</Link>
			</nav>

			<hr />
		</header>
	);
}

export default Header;
