import { Data } from '../data/data';

function ProgressBar({ index }) {
	console.log(index);
	const progressBarStyles = {
		width: `${(index / Data.length) * 100}%`,
	};
	console.log(progressBarStyles);
	console.log(Data.length);
	return <div className='progressBar' style={progressBarStyles}></div>;
}

export default ProgressBar;
