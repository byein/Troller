import styled from '@emotion/styled';

const TABLET_STANDARD = 1024; // 반응형 픽셀기준
const MOBILE_STANDARD = 768; // 반응형 픽셀기준

const GlobalHeader = styled('header')`
	width: 100vw;
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	z-index: 100;
	/* background-color: rgba(10, 31, 98, 1); */ //props로 조건문 나중에
	span {
		margin: 15px;
		color: white;
	}
	.logo {
		font-size: 30px;
		color: white;
	}
	.login {
		font-size: 15px;
		color: white;
	}
	div {
		width: 315px;
		height: 100%;
		display: flex;
		position: absolute;
		left: 150px;
		ul {
			width: 100%;
			height: 100%;
			display: flex;
			color: white;
			align-items: center;
			li {
				margin: auto;
			}
		}
	}
`;
const GlobalContainer = styled('div')`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(130.84deg, rgba(10, 31, 98, 0.81) 25.47%, rgba(143, 143, 143, 0.9) 95.87%);
	/* background-color: white; */ // props로 나중에 조건문
`;
export { GlobalContainer, GlobalHeader, TABLET_STANDARD, MOBILE_STANDARD };
