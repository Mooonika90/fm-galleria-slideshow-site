import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useSlideIndex } from '../SlideIndexProvider';

function Header() {
	const { toggleSlideshow, isSlideshowActive, setCurrentIndex } = useSlideIndex();
	return (
		<header className='mainHeader'>
			<nav>
				<Link to={'/'}>
					<img className='logo' src={logo} alt='Logo' />
				</Link>
				<button className='slideLink' onClick={toggleSlideshow}>
					{isSlideshowActive ? 'Stop slideshow' : 'Start slideshow'}
				</button>
			</nav>

			<hr />
		</header>
	);
}

export default Header;
