import next from '../assets/icon-next-button.svg';
import back from '../assets/icon-back-button.svg';
import ProgressBar from './ProgressBar';

function Footer({
	title,
	artist,
	goToNextSlide,
	goToPreviousSlide,
	progress,
	index,
}) {
	return (
		<footer>
			<ProgressBar progress={progress} index={index} />
			<div>
				<p>{title}</p>
				<p>{artist}</p>
			</div>
			<div>
				<a onClick={goToPreviousSlide}>
					<img src={back} alt='' />
				</a>
				<a onClick={goToNextSlide}>
					<img src={next} alt='' />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
