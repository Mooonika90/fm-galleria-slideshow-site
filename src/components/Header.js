import logo from '../assets/logo.svg';

function Header() {
	return (
		<header>
			<nav>
				<img className='logo' src={logo} alt='Logo' />

				<a href='/'> Start slideshow</a>
			</nav>

			<hr />
		</header>
	);
}

export default Header;
