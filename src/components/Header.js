import logo from '../assets/logo.svg';

function Header() {
	return (
		<header>
			<nav>
				<a href='/'>
					<img className='logo' src={logo} alt='Logo' />
				</a>
				<a href='/'> Start slideshow</a>
			</nav>

			<hr />
		</header>
	);
}

export default Header;
