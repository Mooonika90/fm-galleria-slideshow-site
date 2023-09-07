import { useParams } from 'react-router-dom';
import { Data } from '../data/data';

function Slides() {
	const { index } = useParams();
	const selectedPhoto = Data[index];

	if (!selectedPhoto) {
		return <div>Photo not found</div>;
	}

	return (
		<section>
			<h2>{selectedPhoto?.name}</h2>
			<img
				src={`.${selectedPhoto.images.hero.large}`}
				alt={selectedPhoto?.name}
			/>
			<p>{selectedPhoto?.description}</p>
		</section>
	);
}

export default Slides;
