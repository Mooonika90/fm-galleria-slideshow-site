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
			<div className='wrappFooter'>
				<div>
					<h3>{title}</h3>
					<p>{artist}</p>
				</div>
				<div className='buttonsControl'>
					<a onClick={prevSlide}>
						<img
							src={back}
							alt=''
							className={currentIndex <= 0 ? 'disabled' : ''}
						/>
					</a>
					<a onClick={nextSlide}>
						<img
							src={next}
							alt=''
							className={currentIndex >= 14 ? 'disabled' : ''}
						/>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
