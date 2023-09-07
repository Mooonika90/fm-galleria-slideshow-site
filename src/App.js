import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Slides from './pages/Slides';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Header />

			<main>
				<Router>
					<Routes>
						<Route path='/slides/:index' element={<Slides />} />
						<Route path='/' element={<Main />} />
					</Routes>
				</Router>
			</main>

			<Footer />
		</div>
	);
}

export default App;
