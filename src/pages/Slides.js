import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Data } from '../data/data';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import view from '../assets/icon-view-image.svg';

function Slides() {
	const { slideIndex } = useParams();
	const [index, setIndex] = useState(slideIndex);
	const selectedPhoto = Data[index];
	const [openModal, setOpenModal] = useState(false);

	if (!selectedPhoto) {
		return <div>Photo not found</div>;
	}

	const goToNextSlide = () => {
		setIndex((prevIndex) => (prevIndex + 1) % Data.length);
	};

	const goToPreviousSlide = () => {
		setIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
	};
	const showModal = () => {
		setOpenModal((prevOpen) => !prevOpen);
	};

	return (
		<>
			<section className='slide'>
				<div>
					<div className='photo-wrapper'>
						<header>
							<h2>{selectedPhoto?.name}</h2>
							<h3>{selectedPhoto?.artist?.name}</h3>
						</header>
						<img
							src={`.${selectedPhoto?.artist?.image}`}
							alt={selectedPhoto?.name}
						/>
					</div>
					<div className='img-main'>
						<img
							src={`.${selectedPhoto.images?.hero?.small}`}
							srcSet={`.${selectedPhoto.images?.hero?.small} 600w, .${selectedPhoto.images?.hero?.large} 1440w`}
							alt={selectedPhoto?.name}
						/>
						<button className='show-photo' onClick={showModal}>
							<img src={view} alt='' />
							view image
						</button>
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
			</section>

			<Footer
				artist={selectedPhoto?.artist?.name}
				title={selectedPhoto?.name}
				goToNextSlide={goToNextSlide}
				goToPreviousSlide={goToPreviousSlide}
			/>
			{openModal && (
				<Modal selectedPhoto={selectedPhoto} closeModal={showModal} />
			)}
		</>
	);
}

export default Slides;
