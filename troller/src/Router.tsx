import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import Login from './pages/login';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="/signin" element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
