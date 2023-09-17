// import next from '../assets/icon-next-button.svg';
// import back from '../assets/icon-back-button.svg';
import ProgressBar from './ProgressBar';
import { useSlideIndex } from '../SlideIndexProvider';

function Footer() {
	const { currentIndex, artworks, nextSlide, prevSlide } = useSlideIndex();

	return (
		<footer>
			<ProgressBar />
			<div className='wrappFooter'>
				<div>
					<h3>{artworks[currentIndex].name}</h3>
					<p>{artworks[currentIndex].artist.name}</p>
				</div>
				<div className='buttonsControl'>
					<a onClick={prevSlide}>
						<img
							src='../assets/icon-back-button.svg'
							alt=''
							className={currentIndex <= 0 ? 'disabled' : ''}
						/>
					</a>
					<a onClick={nextSlide}>
						<img
							src='../assets/icon-next-button.svg'
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
