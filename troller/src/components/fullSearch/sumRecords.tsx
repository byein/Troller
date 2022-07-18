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

function WinLose() {
	return <SumRecordTitleWrapper>20전 10승 9패</SumRecordTitleWrapper>;
}
function KDA() {
	return (
		<div>
			<Kill />/
			<Death />/
			<Assistant />
		</div>
	);
}

function UserInfo() {
	return (
		<div>
			<KDA />
			<AverageKDA>3.11:1</AverageKDA>
			<KillParticipation>킬 관여 46%</KillParticipation>
		</div>
	);
}

function KDAPart() {
	return (
		<KDAWrapper>
			<WinLoseChart />
			<UserInfo />
		</KDAWrapper>
	);
}

function WinLoseChart() {
	return (
		<>
			<Chart />
			<ChartText>53%</ChartText>
		</>
	);
}

function Kill() {
	return <span>6.3</span>;
}

function Death() {
	return <span>3.7</span>;
}

function Assistant() {
	return <span>5.2</span>;
}
// function AverageKDA() {
// 	return <span>3.11:1</span>;
// }
function Stats() {
	return (
		<StatsWrapper>
			<WinLose />
			<KDAPart />
		</StatsWrapper>
	);
}

function ChampionInfo() {
	return (
		<ChampionProfile>
			<ChampionImageWrapper />
			<ChampionInfoWrapper>
				<ChampionName>사일러스</ChampionName>
				<ChampionWinLose>
					<span>100%</span>
					(5승 0패) 8.73 평점
				</ChampionWinLose>
			</ChampionInfoWrapper>
		</ChampionProfile>
	);
}

function Champion() {
	return (
		<ChampionWrapper>
			<SumRecordTitleWrapper>
				플레이한 챔피언 (최근 20게임)
			</SumRecordTitleWrapper>
			<div>
				<ChampionInfo />
				<ChampionInfo />
				<ChampionInfo />
			</div>
		</ChampionWrapper>
	);
}
function PositionInfo() {
	return (
		<PositionItemWrapper>
			<PositionImageWrapper />
			<PositionInfoWrapper>
				<PositionName>미드</PositionName>
				<PositionProb>
					79%
					<PositionWinProb>승률 53%</PositionWinProb>
				</PositionProb>
			</PositionInfoWrapper>
		</PositionItemWrapper>
	);
}

function Position() {
	return (
		<PositionWrapper>
			<SumRecordTitleWrapper>선호 포지션 (랭크)</SumRecordTitleWrapper>
			<div>
				<PositionInfo />
				<PositionInfo />
			</div>
		</PositionWrapper>
	);
}
function SumRecord() {
	return (
		<SumRecordsWrapper>
			<Stats />
			<Bar />
			<Champion />
			<Bar />
			<Position />
		</SumRecordsWrapper>
	);
}
export default SumRecord;
