import next from '../assets/icon-next-button.svg';
import back from '../assets/icon-back-button.svg';
import ProgressBar from './ProgressBar';
import { useSlideIndex } from '../SlideIndexProvider';

function Footer({ title, artist }) {
	const { currentIndex, setCurrentIndex, artworks, nextSlide, prevSlide } =
		useSlideIndex();

	return (
		<footer>
			<ProgressBar />
			<div>
				<p>{title}</p>
				<p>{artist}</p>
			</div>
			<div className='buttonsControl'>
				<a onClick={prevSlide}>
					<img src={back} alt='' />
				</a>
				<a onClick={nextSlide}>
					<img src={next} alt='' />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
