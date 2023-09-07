import { Data } from '../data/data';
import Macy from 'macy';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
	useEffect(() => {
		new Macy(macyOptions);
	}, []);
	return (
		<section className='grid'>
			{Data?.map((d, index) => (
				<Link to={`/slides/${index}`} key={index}>
					<figure>
						<img src={d?.images?.thumbnail} alt={d?.name} />
						<figcaption>
							<h2>{d?.name}</h2>
							<h3>{d?.artist?.name}</h3>
						</figcaption>
					</figure>
				</Link>
			))}
		</section>
	);
}
export default Main;
