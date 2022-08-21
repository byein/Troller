import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hub from './pages/hub';
import FindDuo from './pages/main/findDuo';
import MultiSearch from './pages/main/multiSearch';
import Rank from './pages/rank/rank';
import KDA from './pages/fullSearch/kda';
import FullSearch from './pages/fullSearch/fullSearch';
import ForgotPw from './pages/sign/forgot';
import Login from './pages/sign/signin';
import Signup from './pages/sign/signup';
import NormalRank from './pages/rank/normalRank';
import TrollRank from './pages/rank/trollRank';
import TierAbility from './pages/fullSearch/tierAbility';
import Stats from './components/multiSearch/stats';
import MyPage from './pages/mypage/mypage';
import { Auth } from './components/sign/anotherLogin';
import ChatBox from './pages/liveChat/chatBox';
import LiveChat from './components/liveChat/liveChat';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hub />}>
          <Route path="find_duo" element={<FindDuo />} />
          <Route path="multi_search" element={<MultiSearch />}>
            <Route path=":users" element={<Stats />} />
          </Route>
          <Route path="my_page" element={<MyPage />} />
          <Route path="rank" element={<Rank />}>
            <Route path="normal" element={<NormalRank />} />
            <Route path="troll" element={<TrollRank />} />
          </Route>
          <Route path="sign_in" element={<Login />} />
          <Route path="auth/kakao" element={<Auth />} />
          <Route path="sign_up" element={<Signup />} />
          <Route path="forgot_pw" element={<ForgotPw />} />
          <Route path=":userId" element={<FullSearch />}>
            <Route path="kda" element={<KDA />} />
            <Route path="tier_ability" element={<TierAbility />} />
          </Route>
          <Route path="sub/chat/room" element={<ChatBox />}>
            <Route path=":roomId" element={<LiveChat />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
