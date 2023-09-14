import logo from '../assets/logo.svg';

import { useSlideIndex } from '../SlideIndexProvider';

function Header() {
	const { toggleSlideshow, isSlideshowActive } = useSlideIndex();
	return (
		<header className='mainHeader'>
			<nav>
				<a href='/'>
					<img className='logo' src={logo} alt='Logo' />
				</a>
				<button className='slideLink' onClick={toggleSlideshow}>
					{isSlideshowActive ? 'Stop slideshow' : 'Start slideshow'}
				</button>
			</nav>

			<hr />
		</header>
	);
}

export default Header;
