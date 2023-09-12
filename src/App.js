import Header from './components/Header';

import Main from './pages/Main';
import Slides from './pages/Slides';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SlideIndexProvider } from './SlideIndexProvider';

function App() {
	return (
		<div className='App'>
			<Router>
				<SlideIndexProvider>
					<Header />

					<main>
						<Routes>
							<Route path='/slides/:currentIndex' element={<Slides />} />
							<Route path='/' element={<Main />} />
						</Routes>
					</main>
				</SlideIndexProvider>
			</Router>
		</div>
	);
}

export default App;
