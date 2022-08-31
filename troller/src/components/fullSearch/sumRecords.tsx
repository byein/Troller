import axios from "axios";
import React, { useEffect, useState } from "react";
import {
	AverageKDA,
	Bar,
	ChampionImageWrapper,
	ChampionInfoWrapper,
	ChampionName,
	ChampionProfile,
	ChampionWinLose,
	ChampionWrapper,
	Chart,
	ChartText,
	KDAWrapper,
	KillParticipation,
	PositionImageWrapper,
	PositionInfoWrapper,
	PositionItemWrapper,
	PositionName,
	PositionProb,
	PositionWinProb,
	PositionWrapper,
	StatsWrapper,
	SumRecordsWrapper,
	SumRecordTitleWrapper,
} from "../../styles/fullSearch/sumRecords";

interface WinLoseProps {
	lose: string;
	draw: string;
	win: string;
}
interface KDAProps {
	death: string;
	assist: string;
	kda: string;
	winRate: string;
	kill: string;
}
interface WinLoseKDAProps {
	averageKill: string;
	lose: string;
	averageKda: string;
	draw: string;
	winRate: string;
	win: string;
	averageAssist: string;
	averageDeath: string;
}

interface ChampionProps {
	championName: string;
	winRate: string;
	win: string;
	lose: string;
	kda: string;
}

interface LatestTwentyRecordsProps {
	averageKill: string;
	lose: string;
	averageKda: string;
	draw: string;
	winRate: string;
	win: string;
	averageAssist: string;
	averageDeath: string;
}

interface PositionListProps {
	firstLinePlayed: string;
	firstLinePreference: string;
	secondLinePlayed: string;
	secondLinePreference: string;
}

interface PositionProps {
	linePlayed: string;
	linePreference: string;
}

const WinLose: React.FC<WinLoseProps> = ({ win, draw, lose }) => {
	return (
		<SumRecordTitleWrapper>
			20전 {win}승 {lose}패 {draw}무
		</SumRecordTitleWrapper>
	);
};

const Kill = ({ kill }: { kill: string }) => {
	return <span>{kill}</span>;
};

const Death = ({ death }: { death: string }) => {
	return <span>{death}</span>;
};
const Assistant = ({ assist }: { assist: string }) => {
	return <span>{assist}</span>;
};

const KDA: React.FC<KDAProps> = ({ kill, death, assist }) => {
	return (
		<div>
			<Kill kill={kill} />/
			<Death death={death} />/
			<Assistant assist={assist} />
		</div>
	);
};

const UserInfo: React.FC<KDAProps> = ({
	kill,
	death,
	assist,
	winRate,
	kda,
}) => {
	return (
		<div>
			<KDA kill={kill} death={death} assist={assist} kda={"0"} winRate={"0"} />
			<AverageKDA>{kda}</AverageKDA>
			<KillParticipation>킬 관여 00%</KillParticipation>
		</div>
	);
};

function WinLoseChart({ winRate }: { winRate: string }) {
	return (
		<>
			<Chart />
			<ChartText>{winRate}</ChartText>
		</>
	);
}

const KDAPart: React.FC<KDAProps> = ({ winRate, death, assist, kda, kill }) => {
	return (
		<KDAWrapper>
			<WinLoseChart winRate={winRate} />
			<UserInfo
				death={death}
				assist={assist}
				kda={kda}
				winRate={winRate}
				kill={kill}
			/>
		</KDAWrapper>
	);
};

const Stats: React.FC<WinLoseKDAProps> = ({
	lose,
	draw,
	win,
	averageDeath,
	averageAssist,
	averageKill,
	averageKda,
	winRate,
}) => {
	return (
		<StatsWrapper>
			<WinLose win={win} lose={lose} draw={draw} />
			<KDAPart
				death={averageDeath}
				assist={averageAssist}
				kda={averageKda}
				winRate={winRate}
				kill={averageKill}
			/>
		</StatsWrapper>
	);
};

const ChampionInfo: React.FC<ChampionProps> = ({
	championName,
	winRate,
	win,
	lose,
	kda,
}) => {
	return (
		<ChampionProfile>
			<ChampionImageWrapper />
			<ChampionInfoWrapper>
				<ChampionName>{championName}</ChampionName>
				<ChampionWinLose>
					<span>{winRate}</span>({win}승 {lose}패) kda: {kda}
				</ChampionWinLose>
			</ChampionInfoWrapper>
		</ChampionProfile>
	);
};

const Champion = ({ userLoLName }: { userLoLName: string }) => {
	const [cham1, setCham1] = useState<ChampionProps>({
		championName: "",
		winRate: "",
		win: "",
		lose: "",
		kda: "",
	});
	const [cham2, setCham2] = useState<ChampionProps>({
		championName: "",
		winRate: "",
		win: "",
		lose: "",
		kda: "",
	});
	const [cham3, setCham3] = useState<ChampionProps>({
		championName: "",
		winRate: "",
		win: "",
		lose: "",
		kda: "",
	});

	useEffect(() => {
		axios
			.get("/api/search/user/most", {
				params: {
					lolName: userLoLName,
				},
			})
			.then(async (response) => {
				const data = await response.data;
				setCham1(data.mostThreeChampion[0]);
				setCham2(data.mostThreeChampion[1]);
				setCham3(data.mostThreeChampion[2]);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [userLoLName]);

	return (
		<ChampionWrapper>
			<SumRecordTitleWrapper>
				플레이한 챔피언 (최근 20게임)
			</SumRecordTitleWrapper>
			<div>
				<ChampionInfo
					championName={cham1?.championName}
					winRate={cham1?.winRate}
					win={cham1?.win}
					lose={cham1?.lose}
					kda={cham1?.kda}
				/>
				<ChampionInfo
					championName={cham2?.championName}
					winRate={cham2?.winRate}
					win={cham2?.win}
					lose={cham2?.lose}
					kda={cham2?.kda}
				/>
				<ChampionInfo
					championName={cham3?.championName}
					winRate={cham3?.winRate}
					win={cham3?.win}
					lose={cham3?.lose}
					kda={cham3?.kda}
				/>
			</div>
		</ChampionWrapper>
	);
};

const PositionInfo: React.FC<PositionProps> = ({
	linePlayed,
	linePreference,
}) => {
	return (
		<PositionItemWrapper>
			<PositionImageWrapper />
			<PositionInfoWrapper>
				<PositionName>{linePreference}</PositionName>
				<PositionProb>
					{linePlayed}회<PositionWinProb>승률 00%</PositionWinProb>
				</PositionProb>
			</PositionInfoWrapper>
		</PositionItemWrapper>
	);
};

const Position = ({ userLoLName }: { userLoLName: string }) => {
	const [position1, setPosition1] = useState<PositionProps>({
		linePlayed: "",
		linePreference: "",
	});
	const [position2, setPosition2] = useState<PositionProps>({
		linePlayed: "",
		linePreference: "",
	});
	useEffect(() => {
		axios
			.get("/api/search/user/line", {
				params: {
					lolName: userLoLName,
				},
			})
			.then(async (response) => {
				const data = await response.data;
				setPosition1({
					linePlayed: data.firstLinePlayed,
					linePreference: data.firstLinePreference,
				});
				setPosition2({
					linePlayed: data.secondLinePlayed,
					linePreference: data.secondLinePreference,
				});
				console.log(data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [userLoLName]);

	return (
		<PositionWrapper>
			<SumRecordTitleWrapper>선호 포지션 (랭크)</SumRecordTitleWrapper>
			<div>
				<PositionInfo
					linePlayed={position1.linePlayed}
					linePreference={position1.linePreference}
				/>
				<PositionInfo
					linePlayed={position2.linePlayed}
					linePreference={position2.linePreference}
				/>
			</div>
		</PositionWrapper>
	);
};

function SumRecord() {
	const [latestTwentyRecords, setLatestTwentyRecords] =
		useState<LatestTwentyRecordsProps>({
			averageKill: "",
			lose: "",
			averageKda: "",
			draw: "",
			winRate: "",
			win: "",
			averageAssist: "",
			averageDeath: "",
		});
	const [userLoLName, setUserLoLName] = useState("hideonpush");

	useEffect(() => {
		axios
			.get("/api/search/user/gameRecord", {
				params: {
					lolName: userLoLName,
				},
			})
			.then(async (response) => {
				const data = await response.data;
				console.log(data);
				setLatestTwentyRecords({
					lose: data.latestTwentyRecords.lose,
					draw: data.latestTwentyRecords.draw,
					winRate: data.latestTwentyRecords.winRate,
					win: data.latestTwentyRecords.win,
					averageDeath: data.latestTwentyRecords.averageDeath,
					averageAssist: data.latestTwentyRecords.averageAssist,
					averageKda: data.latestTwentyRecords.averageKda,
					averageKill: data.latestTwentyRecords.averageKill,
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}, [userLoLName]);

	return (
		<SumRecordsWrapper>
			<Stats
				averageKill={latestTwentyRecords.averageKill}
				averageKda={latestTwentyRecords.averageKda}
				draw={latestTwentyRecords.draw}
				winRate={latestTwentyRecords.winRate}
				win={latestTwentyRecords.win}
				averageAssist={latestTwentyRecords.averageAssist}
				averageDeath={latestTwentyRecords.averageDeath}
				lose={latestTwentyRecords.lose}
			/>
			<Bar />
			<Champion userLoLName={userLoLName} />
			<Bar />
			<Position userLoLName={userLoLName} />
		</SumRecordsWrapper>
	);
}
export default SumRecord;
