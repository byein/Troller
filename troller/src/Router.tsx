import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hub from './pages/hub';
import FindDuo from './pages/main/findDuo';
import MultiSearch from './pages/main/multiSearch';
import Rank from './pages/main/Rank';
import ItemTree from './pages/fullSearch/itemTree';
import KDA from './pages/fullSearch/kda';
import FullSearch from './pages/fullSearch/fullSearch';
import ForgotPw from './pages/sign/forgot';
import Login from './pages/sign/signin';
import Signup from './pages/sign/signup';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hub />}>
          <Route path="find_duo" element={<FindDuo />} />
          <Route path="multi_search" element={<MultiSearch />} />
          <Route path="rank" element={<Rank />}>
            {/* <Route path="normal" element={} />
            <Route path="troll" element={} /> */}
          </Route>
          <Route path="sign_in" element={<Login />} />
          <Route path="sign_up" element={<Signup />} />
          <Route path="forgot_pw" element={<ForgotPw />} />
          <Route path=":userId" element={<FullSearch />}>
            <Route path="kda" element={<KDA />} />
            <Route path="item_tree" element={<ItemTree />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
