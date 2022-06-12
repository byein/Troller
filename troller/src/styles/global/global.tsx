import styled from '@emotion/styled';

const TABLET_STANDARD = 1024; // 반응형 픽셀기준
const MOBILE_STANDARD = 768; // 반응형 픽셀기준

const GlobalHeader = styled('header')<{ pathname: string }>`
	width: 100vw;
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	background-color: ${(props) => (props.pathname === '/normal_rank' ? '#0A1F62' : 'none')};
	// props로 theme 전달 받지를 못함. theme.d.ts에서 import안돼서 그런 듯 함. 임시로 string으로 색상값 전달.
	z-index: 1;
	span {
		margin: 15px;
		color: white;
	}
	.logo {
		font-size: 30px;
		color: white;
	}
	.signin {
		font-size: 15px;
		color: white;
		display: ${(props) => (props.pathname !== '/signin' ? 'block' : 'none')};
	}
	div {
		width: 315px;
		height: 100%;
		position: absolute;
		left: 130px;
		display: ${(props) => (props.pathname !== '/signin' ? 'block' : 'none')};
		ul {
			width: 100%;
			height: 100%;
			display: flex;
			color: white;
			align-items: center;
		}
	}
`;
const Tab = styled('li')<{ isActive: boolean }>`
	margin: auto;
	color: ${(props) => (!props.isActive ? 'white' : '#59EAD0')}; //이것도 themeProvider적용 안됨...
`;
const GlobalContainer = styled('div')`
	width: 100vw;
	height: 100vh;
	position: relative;
`; // Header와 MainContainer를 감싸는 Container!

const MainContainer = styled('div')<{ pathname: string }>`
	width: 100vw;
	height: 100vh;
	position: absolute;
	background: linear-gradient(
		${(props) =>
			props.pathname === '/normal_rank'
				? `{0, rgba(255, 255, 255, 1) 0, rgba(255, 255, 255, 1) 0}`
				: `130.84deg, rgba(10, 31, 98, 0.81) 25.47%, rgba(143, 143, 143, 0.9) 95.87%`}
	);
	z-index: 0;
`;
export { GlobalContainer, MainContainer, Tab, GlobalHeader, TABLET_STANDARD, MOBILE_STANDARD };
