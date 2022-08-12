import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { GlobalHeader, Menu, Tab } from '../../styles/global/global';
import { ACCESS_TOKEN } from '../../hooks/axiosHooks';

function MyPageHeader() {
  const [isOpen, setisOpen] = useState(false);
  const logOut = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <span className="block">
      <MenuIcon
        className="mypage"
        onClick={() => {
          setisOpen(prev => !prev);
        }}
      />
      {isOpen ? (
        <Menu>
          <span className="menues">
            <Link to="/my_page">마이페이지</Link>
          </span>
          <span
            className="menues"
            onClick={logOut}
            onKeyDown={logOut}
            role="button"
            tabIndex={0}
          >
            로그아웃
          </span>
        </Menu>
      ) : null}
    </span>
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
