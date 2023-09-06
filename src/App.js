import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Slides from './pages/Slides';

function App() {
	return (
		<div className='App'>
			<Header />

			<main>
				<Main />
				<Slides />
			</main>

			<Footer/>
		</div>
	);
}

export default App;
