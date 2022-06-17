import styled from '@emotion/styled';

import { BORDER_RADIUS, BOX_SHADOW, FLOAT_COLOR } from '../global/global';

const HomeWrapper = styled('div')`
	width: 100%;
	align-items: center;
	justify-content: center;
`;

const TitleWrapper = styled('div')`
	width: 100%;
	height: auto;
	display: flex;
	margin: 90px 0px 90px 0px;
	align-items: center;
	justify-content: center;
`;

const TitleText = styled('h1')`
	color: white;
	font-size: 5rem;
	font-style: italic;
`;

const SearchFormWrapper = styled('div')`
	width: 100%;
	height: 102px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SearchForm = styled('form')`
	display: relative;
	width: 60%;
	height: 319px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: ${`${BORDER_RADIUS}px`};
	.SearchTagBox {
		display: flex;
		position: absolute;
		left: 18%;
	}
	.SearchTag {
		position: relative;
		display: flex;
		width: 68px;
		height: 30px;
		border-radius: ${`${BORDER_RADIUS}px`};
		background-color: rgba(196, 196, 196, 0.55);
		font-size: 1rem;
		font-weight: bold;
		justify-content: center;
		align-items: center;
		margin: 0px 2px 0px 2px;
		z-index: 10;
		.Nation {
		}
		.Type {
		}
	}

	input {
		position: absolute;
		width: 60%;
		height: 66px;
		font-size: 1em;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		display: flex;
		padding-left: 130px;
		text-align: center;
	}
`;

const SearchTag = styled('div')`
	display: flex;
	width: 68px;
	height: 30px;
	border-radius: ${`${BORDER_RADIUS}px`};
	background-color: rgba(196, 196, 196, 0.55);
	font-size: 1rem;
	font-weight: bold;
	justify-content: center;
	align-items: center;
	margin: 0px 2px 0px 2px;
	z-index: 10;
`;

const Section = styled('section')`
	margin-bottom: 300px;
	display: flex;
	justify-content: center;
`;

const GlobalRankWrapper = styled('div')`
	width: 35%;
	min-height: auto;
	display: flex;
	flex-direction: column;
	margin: 0px 5%;
`;

const RankTitle = styled('h2')`
	margin-top: 267px;
	color: white;
	font-size: 1.2rem;
	padding: 20px;
`;

const RankTable = styled('table')`
	${FLOAT_COLOR};
	${BOX_SHADOW};
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: ${`${BORDER_RADIUS}px`};
	color: white;
`;

const TableBody = styled('tbody')`
	width: 100%;
	height: auto;
`;

const RankItemStyle = styled('div')`
	width: 100%;
`;
const RankTableTR = styled('tr')`
	display: flex;
	width: 100%;
	height: 60px;
	td {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
const RankTRBar = styled('tr')`
	width: 100%;
	height: 0px;
	border: 1px solid #969eba;
	td {
		width: 100%;
		height: 0px;
		border: 1px solid ${props => props.theme.borderColor};
	}
`;
const TDRank = styled('td')`
	width: 10%;
`;
const TDNickname = styled('td')`
	width: 40%;
`;
const TDKDA = styled('td')`
	width: 20%;
`;
const TDWinRate = styled('td')`
	width: 30%;
`;
export {
	HomeWrapper,
	TitleWrapper,
	TitleText,
	SearchFormWrapper,
	SearchForm,
	SearchTag,
	RankTitle,
	RankItemStyle,
	RankTable,
	RankTableTR,
	RankTRBar,
	TableBody,
	TDRank,
	TDNickname,
	TDKDA,
	TDWinRate,
	GlobalRankWrapper,
	Section,
};
