import { Data } from '../data/data';
import Macy from 'macy';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSlideIndex } from '../SlideIndexProvider';

const macyOptions = {
	container: '.grid',
	trueOrder: false,
	mobileFirst: true,
	margin: 40,
	columns: 1,
	breakAt: {
		1000: 4,
		650: {
			margin: 40,
			columns: 2,
		},
	},
};

function Main() {
	const { setCurrentIndex } = useSlideIndex();
	useEffect(() => {
		new Macy(macyOptions);
	}, []);

	const handlePhotoClick = (currentIndex) => {
		setCurrentIndex(currentIndex);
	};

	return (
		<AnimatePresence>
			<section className='grid'>
				{Data?.map((d, currentIndex) => (
					<Link
						to={`/slides/${currentIndex}`}
						key={currentIndex}
						onClick={() => handlePhotoClick(currentIndex)}>
						<motion.figure
							key={currentIndex}
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1 }}>
							<img src={d?.images?.thumbnail} alt={d?.name} />

							<figcaption>
								<h2>{d?.name}</h2>
								<h3>{d?.artist?.name}</h3>
							</figcaption>
						</motion.figure>
					</Link>
				))}
			</section>
		</AnimatePresence>
	);
}
export default Main;
