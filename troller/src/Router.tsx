import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hub from './pages/hub';
import FindDuo from './pages/main/findDuo';
import MultiSearch from './pages/main/multiSearch';
import NormalRank from './pages/main/normalRank';
import Login from './pages/sign/login';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Hub />}>
					<Route path="find_duo" element={<FindDuo />} />
					<Route path="multi_search" element={<MultiSearch />} />
					<Route path="normal_rank" element={<NormalRank />} />
					<Route path="signin" element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
