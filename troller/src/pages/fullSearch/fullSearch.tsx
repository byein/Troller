import { Outlet, useLocation } from "react-router-dom";
import {
	FullSearchGlobalWrapper,
	RecordSection,
	UserSection,
} from "../../styles/fullSearch/fullSearch";
import GraphTab from "../../components/fullSearch/graphTab";
import UserInfo from "../../components/fullSearch/userInfo";
import SumRecord from "../../components/fullSearch/sumRecords";
import {
	FullSearchContainer,
	FullSearchWrapper,
	Tier,
} from "../../styles/fullSearch/userInfo";
import RecordList from "../../components/fullSearch/recordList";
import { useEffect, useState } from "react";
import axios from "axios";

type UserInfoProps = {
	name: string;
	tier: string;
	profileImg: string;
	winRate: number;
	winRecord: number;
	loseRecord: number;
	level: number;
};
type GameRecordProps = {
	latestTwentyRecords: {
		death: number;
		lose: number;
		assist: number;
		kda: number;
		draw: number;
		winRate: number;
		kill: number;
		win: number;
	};
	gameRecord: [
		{
			semiRune: number;
			death: number;
			csPerMiutes: number;
			visionWard: number;
			kda: number;
			playtime: string;
			kill: number;
			killRate: number;
			cs: number;
			primaryRune: number;
			lastPlayTime: string;
			assist: number;
			gameMode: string;
			win: boolean;
			spell2: number;
			spell1: number;
			players: [
				{
					championImg: string;
					tier: string;
					lolName: string;
					championName: string;
					Position: string;
					team: string;
				},
				{
					championImg: string;
					tier: string;
					lolName: string;
					championName: string;
					Position: string;
					team: string;
				},
				{
					championImg: string;
					tier: string;
					lolName: string;
					championName: string;
					Position: string;
					team: string;
				},
				{
					championImg: string;
					tier: string;
					lolName: string;
					championName: string;
					Position: string;
					team: string;
				},
				{
					championImg: string;
					tier: string;
					lolName: string;
					championName: string;
					Position: string;
					team: string;
				},
				{
					championImg: string;
					tier: string;
					lolName: string;
					championName: string;
					Position: string;
					team: string;
				},
				{
					championImg: string;
					tier: string;
					lolName: string;
					championName: string;
					Position: string;
					team: string;
				},
				{
					championImg: string;
					tier: string;
					lolName: string;
					championName: string;
					Position: string;
					team: string;
				},
				{
					championImg: string;
					tier: string;
					lolName: string;
					championName: string;
					Position: string;
					team: string;
				},
				{
					championImg: string;
					tier: string;
					lolName: string;
					championName: string;
					Position: string;
					team: string;
				}
			];
		}
	];
};
// 임시 데이터 세팅
function FullSearch() {
	const { pathname } = useLocation();
	const [userInfo, setUserInfo] = useState({
		name: "test",
		tier: "Platinum",
		profileImg:
			"https://dimg.donga.com/wps/NEWS/IMAGE/2013/12/18/59635708.3.jpg",
		winRate: 0,
		winRecord: 0,
		loseRecord: 0,
		level: 0,
	});
	const [userLoLName, setUserLoLName] = useState("hideonpush");
	useEffect(() => {
		axios
			.get("/api/search/user/info", {
				params: {
					lolName: userLoLName,
				},
			})
			.then(async (response) => {
				const data = await response.data;
				console.log(data);
				setUserInfo({
					name: data.name,
					tier: data.tier,
					profileImg: data.icon,
					winRate: data.winRate,
					winRecord: data.win,
					loseRecord: data.lose,
					level: data.level,
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}, [userLoLName]);
	return (
		<FullSearchGlobalWrapper>
			<UserSection>
				<FullSearchWrapper>
					<UserInfo
						nickname={userInfo.name}
						profileImg={userInfo.profileImg}
						tier={userInfo.tier}
						winRate={userInfo.winRate}
						winRecord={userInfo.winRecord}
						loseRecord={userInfo.loseRecord}
						level={userInfo.level}
					/>
					<GraphTab pathname={pathname} />
					<FullSearchContainer pathname={pathname}>
						<Outlet />
					</FullSearchContainer>
				</FullSearchWrapper>
			</UserSection>
			<RecordSection>
				<SumRecord />
				<RecordList />
			</RecordSection>
		</FullSearchGlobalWrapper>
	);
}

export default FullSearch;
