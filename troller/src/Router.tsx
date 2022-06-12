import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/home';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
