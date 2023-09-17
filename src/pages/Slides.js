import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSlideIndex } from '../SlideIndexProvider';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';
import view from '../assets/icon-view-image.svg';
import Footer from '../components/Footer';

function Slides() {
	const { artworks } = useSlideIndex();
	const { currentIndex } = useParams();
	const selectedPhoto = artworks[currentIndex];
	const [openModal, setOpenModal] = useState(false);

	if (!selectedPhoto) {
		return <div className='notFound'>Photo not found</div>;
	}

	const showModal = () => {
		setOpenModal((prevOpen) => !prevOpen);
	};

	return (
		<>
			<main>
				<AnimatePresence>
					<motion.section
						className='slide'
						key={currentIndex}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1 }}>
						<div className='slideTop'>
							<div className='imgMain'>
								<img
									className='imgHero'
									src={`.${selectedPhoto.images?.hero?.small}`}
									srcSet={`.${selectedPhoto.images?.hero?.small} 600w, .${selectedPhoto.images?.hero?.large} 1200w`}
									alt={selectedPhoto?.name}
								/>
								<a className='showPhoto' onClick={showModal}>
									<img src={view} alt='' />
									view image
								</a>
							</div>
							<div className='photoWrapper'>
								<header>
									<h2>{selectedPhoto?.name}</h2>
									<h3>{selectedPhoto?.artist?.name}</h3>
								</header>
								<img
									src={`.${selectedPhoto?.artist?.image}`}
									alt={selectedPhoto?.name}
								/>
							</div>
						</div>
						<blockquote>
							<h4>{selectedPhoto?.year}</h4>
							<div>
								<p>{selectedPhoto?.description}</p>
								<a target='_blank' rel='noopener' href={selectedPhoto?.source}>
									go to source
								</a>
							</div>
						</blockquote>
					</motion.section>
				</AnimatePresence>
			</main>
			<Footer />
			{openModal && (
				<Modal selectedPhoto={selectedPhoto} closeModal={showModal} />
			)}
		</>
	);
}

export default Slides;
