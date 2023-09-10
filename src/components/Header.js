import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { useSlideIndex } from '../SlideIndexProvider';
import { Data } from '../data/data';

function Header() {
	const location = useLocation();

	const { slideIndex, setSlideIndex } = useSlideIndex();
	const isSlideShowPage = location.pathname.startsWith('/slides/');

	console.log(slideIndex);

	const linkTo = isSlideShowPage ? '/' : `/slides/${slideIndex}`;
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
