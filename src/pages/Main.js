import { Data } from '../data/data';
import Macy from 'macy';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSlideIndex } from '../SlideIndexProvider';
import { motion, AnimatePresence } from 'framer-motion';

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
	const { currentIndex } = useSlideIndex();
	useEffect(() => {
		new Macy(macyOptions);
	}, []);
	return (
		<AnimatePresence>
			<section className='grid'>
				{Data?.map((d, slideIndex) => (
					<Link to={`/slides/${slideIndex}`} key={slideIndex}>
						<motion.figure
							key={slideIndex}
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1 }}>
							<img
								src={`${process.env.PUBLIC_URL}${d?.images?.thumbnail}`}
								alt={d?.name}
							/>

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
