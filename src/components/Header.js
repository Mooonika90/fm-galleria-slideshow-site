import logo from '../assets/logo.svg';

import { useSlideIndex } from '../SlideIndexProvider';

function Header() {
	const { currentIndex } = useSlideIndex();
	return (
		<header>
			<nav>
				<a href='/'>
					<img className='logo' src={logo} alt='Logo' />
				</a>
				<a href='/' className='slideLink'>
					Start slideshow
				</a>
			</nav>

			<hr />
		</header>
	);
}

export default Header;
