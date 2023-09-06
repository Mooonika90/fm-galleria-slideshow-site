import next from '../assets/icon-next-button.svg';
import back from '../assets/icon-back-button.svg';
function Footer() {
	return (
		<footer>
			<div>
				<p>Scary Night</p>
				<p>Vincent</p>
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
