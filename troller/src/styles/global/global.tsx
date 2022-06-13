import styled from '@emotion/styled';

const TABLET_STANDARD = 1024;
const MOBILE_STANDARD = 768;

const GlobalHeader = styled('header')<{ pathname: string }>`
	width: 100vw;
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	background-color: ${(props) => (props.pathname === '/normal_rank' ? props.theme.bgColor : 'none')};
	z-index: 1;
	span {
		margin: 15px;
		color: ${(props) => props.theme.txtColor.primary};
	}
	.logo {
		font-size: 30px;
		color: ${(props) => props.theme.txtColor.primary};
	}
	.signin {
		font-size: 15px;
		color: ${(props) => props.theme.txtColor.primary};
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
			align-items: center;
		}
	}
`;
const Tab = styled('li')<{ isActive: boolean }>`
	margin: auto;
	color: ${(props) => (!props.isActive ? props.theme.txtColor.primary : props.theme.txtColor.selected)};
`;

const GlobalContainer = styled('div')`
	width: 100vw;
	height: auto;
	position: relative;
`; // Header와 MainContainer를 감싸는 Container!

const MainContainer = styled('div')<{ pathname: string }>`
	width: 100vw;
	min-height: 100vh;
	padding: 80px 15px 0 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
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
