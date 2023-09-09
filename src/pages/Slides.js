import { useParams } from 'react-router-dom';
import { Data } from '../data/data';
import Footer from '../components/Footer';
import view  from '../assets/icon-view-image.svg';

function Slides() {
	const { index } = useParams();
	const selectedPhoto = Data[index];
	console.log(selectedPhoto);
	if (!selectedPhoto) {
		return <div>Photo not found</div>;
	}

	// <img class="painting-detail__image" src="./assets/girl-with-pearl-earring/hero-small.jpg" alt="" srcset="./assets/girl-with-pearl-earring/hero-small.jpg 600w, ./assets/girl-with-pearl-earring/hero-large.jpg 1440w"></img>

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
						<button className='show-photo'>
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
			/>
		</>
	);
}

export default Slides;
