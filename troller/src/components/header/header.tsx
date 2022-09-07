import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { ACCESS_TOKEN } from '../../hooks/axiosHooks';
import { GlobalHeader, Tab } from '../../styles/global/global';

function MyPageHeader() {
  const router = useNavigate();
  const [isOpen, setisOpen] = useState(false);
  const handleClick = () => {
    setisOpen(!isOpen);
  };
  const logOut = () => {
    setisOpen(false);
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <button type="button" className="block" onClick={handleClick}>
      <MenuIcon className="mypage" />
      {isOpen ? (
        <div className="menuBox">
          <div className="menues">
            <button className="menu" type="button" onClick={handleClick}>
              my page
            </button>
          </div>
          <div className="menues">
            <button
              className="menu"
              type="button"
              onClick={() => {
                router('/sub/chat/room/friends/all');
              }}
            >
              live chat
            </button>
          </div>
          <div className="menues">
            <button className="menu" type="button" onClick={logOut}>
              sign out
            </button>
          </div>
        </div>
      ) : null}
    </button>
  );
}

function Header({ pathname }: { pathname: string }) {
  return (
    <GlobalHeader pathname={pathname}>
      <div className="innerWrapper">
        <div className="leftSideBlock">
          <span className="logo">
            <Link to="/">Logo</Link>
          </span>
          <div>
            <ul>
              <Tab isActive={pathname === '/multi_search'}>
                <Link to="multi_search">멀티서치</Link>
              </Tab>
              <Tab isActive={pathname === '/find_duo'}>
                <Link to="find_duo">듀오찾기</Link>
              </Tab>
              <Tab isActive={pathname.includes('/rank')}>
                <Link to="rank/normal">랭킹</Link>
              </Tab>
            </ul>
          </div>
        </div>
        <span className="signin">
          {ACCESS_TOKEN !== null || undefined ? (
            <MyPageHeader />
          ) : (
            <Link to="sign_in">로그인</Link>
          )}
        </span>
      </div>
    </GlobalHeader>
  );
}
export default Header;
