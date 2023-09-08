import { useParams } from 'react-router-dom';
import { Data } from '../data/data';
import Footer from '../components/Footer';

function Slides() {
	const { index } = useParams();
	const selectedPhoto = Data[index];
	console.log(selectedPhoto);
	if (!selectedPhoto) {
		return <div>Photo not found</div>;
	}

	return (
		<section>
			<h2>{selectedPhoto?.name}</h2>
			<h2>{selectedPhoto?.artist?.name}</h2>
			<img
				src={`.${selectedPhoto.images.hero.large}`}
				alt={selectedPhoto?.name}
			/>
			<img src={`.${selectedPhoto?.artist?.image}`} alt={selectedPhoto?.name} />
			<p>{selectedPhoto?.description}</p>
			<a target='_blank' rel='noopener' href={selectedPhoto?.source}>
				go to source
			</a>

			<Footer
				artist={selectedPhoto?.artist?.name}
				title={selectedPhoto?.name}
			/>
		</section>
	);
}

export default Slides;
