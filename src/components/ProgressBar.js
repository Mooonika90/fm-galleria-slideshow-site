import { useSlideIndex } from '../SlideIndexProvider';

function ProgressBar() {
	const { currentIndex, artworks } = useSlideIndex();
	const progressBarStyles = {
		width: `${(currentIndex / artworks.length) * 100}%`,
	};

	return <div className='progressBar' style={progressBarStyles}></div>;
}

export default ProgressBar;
