import React, { useState } from "react";
import { ResultProps } from "../../pages/fullSearch/fullSearch";
import {
	AverageKDA,
	Bar,
	ChampionImageWrapper,
	ChampionInfoWrapper,
	ChampionName,
	ChampionProfile,
	ChampionWinLose,
	ChampionWrapper,
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
import top from "../../static/img/common/positions/top_focused.png";
import jungle from "../../static/img/common/positions/jungle_focused.png";
import mid from "../../static/img/common/positions/mid_focused.png";
import bottom from "../../static/img/common/positions/bottom_focused.png";
import util from "../../static/img/common/positions/utility_focused.png";
import { Pie } from "@nivo/pie";

interface WinLoseProps {
	lose: string | undefined;
	draw: string | undefined;
	win: string | undefined;
}
interface KDAProps {
	death: string | undefined;
	assist: string | undefined;
	kda: string | undefined;
	winRate: string | undefined;
	kill: string | undefined;
}
interface WinLoseKDAProps {
	kill: string | undefined;
	lose: string | undefined;
	kda: string | undefined;
	draw: string | undefined;
	winRate: string | undefined;
	win: string | undefined;
	assist: string | undefined;
	death: string | undefined;
}

interface ChampionProps {
	championName: string | undefined;
	winRate: string | undefined;
	win: string | undefined;
	lose: string | undefined;
	kda: string | undefined;
	championUi: string | undefined;
}

interface PositionProps {
	linePlayed: string | undefined;
	linePreference: string | undefined;
}

const WinLose: React.FC<WinLoseProps> = ({ win, draw, lose }) => {
	return (
		<SumRecordTitleWrapper>
			20전 {win}승 {lose}패 {draw}무
		</SumRecordTitleWrapper>
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
			<div>
				{kill}/{death}/{assist}
			</div>
			<AverageKDA>{kda}</AverageKDA>
			<KillParticipation>킬 관여 00%</KillParticipation>
		</div>
	);
};
const MyResponsivePie = ({ data /* see data tab */ }: { data: any }) => (
	<Pie
		data={data}
		margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
		innerRadius={0.6}
		padAngle={1}
		cornerRadius={5}
		activeOuterRadiusOffset={5}
		colors={{ scheme: "category10" }}
		borderColor={{
			from: "color",
			modifiers: [["darker", 0.2]],
		}}
		arcLinkLabelsSkipAngle={15}
		arcLinkLabelsTextColor="#ffffff"
		arcLinkLabelsOffset={5}
		arcLinkLabelsDiagonalLength={15}
		arcLinkLabelsStraightLength={15}
		arcLinkLabelsThickness={2}
		arcLinkLabelsColor={{ from: "color", modifiers: [] }}
		arcLabelsSkipAngle={15}
		arcLabelsTextColor="#ffffff"
		legends={[]}
		height={88}
		width={88}
	/>
);

function WinLoseChart({ winRate }: { winRate: string | undefined }) {
	const winRateModified = winRate?.split("%")[0];
	const chartData = [
		{
			id: "win",
			label: "win",
			value: winRateModified,
			color: "hsl(162, 70%, 50%)",
		},
		{
			id: "lose",
			label: "lose",
			value: 100 - Number(winRateModified),
			color: "hsl(242, 70%, 50%)",
		},
	];
	return (
		<div style={{ paddingRight: 10, display: "flex" }}>
			<MyResponsivePie data={chartData} />
			<ChartText>{winRate}</ChartText>
		</div>
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
	death,
	assist,
	kill,
	kda,
	winRate,
}) => {
	return (
		<StatsWrapper>
			<WinLose win={win} lose={lose} draw={draw} />
			<KDAPart
				death={death}
				assist={assist}
				kda={kda}
				winRate={winRate}
				kill={kill}
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
	championUi,
}) => {
	return (
		<ChampionProfile>
			<ChampionImageWrapper src={championUi} alt={championName} />
			<ChampionInfoWrapper>
				<ChampionName>{championName}</ChampionName>
				<ChampionWinLose>
					<span>{winRate}</span>({win}승 {lose}패) kda: {kda}
				</ChampionWinLose>
			</ChampionInfoWrapper>
		</ChampionProfile>
	);
};

const Champion = ({
	userLoLName,
	resultData,
}: {
	userLoLName: string;
	resultData: ResultProps | undefined;
}) => {
	return (
		<ChampionWrapper>
			<SumRecordTitleWrapper>
				플레이한 챔피언 (최근 20게임)
			</SumRecordTitleWrapper>
			<div>
				<ChampionInfo
					championName={resultData?.most?.mostThreeChampion[0].championName}
					winRate={resultData?.most?.mostThreeChampion[0].winRate}
					win={resultData?.most?.mostThreeChampion[0].win}
					lose={resultData?.most?.mostThreeChampion[0].lose}
					kda={resultData?.most?.mostThreeChampion[0].kda}
					championUi={resultData?.most?.mostThreeChampion[0].championUi}
				/>
				<ChampionInfo
					championName={resultData?.most?.mostThreeChampion[1].championName}
					winRate={resultData?.most?.mostThreeChampion[1].winRate}
					win={resultData?.most?.mostThreeChampion[1].win}
					lose={resultData?.most?.mostThreeChampion[1].lose}
					kda={resultData?.most?.mostThreeChampion[1].kda}
					championUi={resultData?.most?.mostThreeChampion[1].championUi}
				/>
				<ChampionInfo
					championName={resultData?.most?.mostThreeChampion[2].championName}
					winRate={resultData?.most?.mostThreeChampion[2].winRate}
					win={resultData?.most?.mostThreeChampion[2].win}
					lose={resultData?.most?.mostThreeChampion[2].lose}
					kda={resultData?.most?.mostThreeChampion[2].kda}
					championUi={resultData?.most?.mostThreeChampion[2].championUi}
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
			<PositionImageWrapper
				src={
					linePreference === "TOP"
						? top
						: linePreference === "JUNGLE"
						? jungle
						: linePreference === "MID"
						? mid
						: linePreference === "BOTTOM"
						? bottom
						: util
				}
			/>
			<PositionInfoWrapper>
				<PositionName>{linePreference}</PositionName>
				<PositionProb>
					{linePlayed}회<PositionWinProb>승률 00%</PositionWinProb>
				</PositionProb>
			</PositionInfoWrapper>
		</PositionItemWrapper>
	);
};

const Position = ({
	userLoLName,
	resultData,
}: {
	userLoLName: string;
	resultData: ResultProps | undefined;
}) => {
	return (
		<PositionWrapper>
			<SumRecordTitleWrapper>선호 포지션 (랭크)</SumRecordTitleWrapper>
			<div>
				<PositionInfo
					linePlayed={resultData?.line?.firstLinePlayed}
					linePreference={resultData?.line?.firstLinePreference}
				/>
				<PositionInfo
					linePlayed={resultData?.line?.secondLinePlayed}
					linePreference={resultData?.line?.secondLinePreference}
				/>
			</div>
		</PositionWrapper>
	);
};

function SumRecord({ resultData }: { resultData: ResultProps | undefined }) {
	const [userLoLName, setUserLoLName] = useState("hideonpush");
	return (
		<SumRecordsWrapper>
			<Stats
				kill={resultData?.gameRecord?.latestTwentyRecords.averageKill}
				kda={resultData?.gameRecord?.latestTwentyRecords.averageKda}
				draw={resultData?.gameRecord?.latestTwentyRecords.draw}
				winRate={resultData?.gameRecord?.latestTwentyRecords.winRate}
				win={resultData?.gameRecord?.latestTwentyRecords.win}
				assist={resultData?.gameRecord?.latestTwentyRecords.averageAssist}
				death={resultData?.gameRecord?.latestTwentyRecords.averageDeath}
				lose={resultData?.gameRecord?.latestTwentyRecords.lose}
			/>
			<Bar />
			<Champion userLoLName={userLoLName} resultData={resultData} />
			<Bar />
			<Position userLoLName={userLoLName} resultData={resultData} />
		</SumRecordsWrapper>
	);
}
export default SumRecord;
