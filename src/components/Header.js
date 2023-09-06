import logo from '../assets/logo.svg';
function Header() {
	return (
		<header>
			<img src={logo} alt='logo' />

			<a href='/'> Start slideshow</a>
		</header>
	);
}

export default Header;
