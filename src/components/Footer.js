import next from '../assets/icon-next-button.svg';
import back from '../assets/icon-back-button.svg';
function Footer({ title, artist }) {
	return (
		<footer>
			<div>
				<p>{title}</p>
				<p>{artist}</p>
			</div>
			<div>
				<a>
					<img src={back} alt='' />
				</a>
				<a>
					<img src={next} alt='' />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
