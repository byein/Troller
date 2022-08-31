import {
	InfoGlobalWrapper,
	ProfileImageWrapper,
	ProfileInfoWrapper,
	Records,
	Tier,
	TierImageWrapper,
	TierNickname,
	UserInfoDiv,
	UserInfoWrapper,
	UserNickName,
} from "../../styles/fullSearch/userInfo";
import Iron from "../../static/img/ranked-emblems/Emblem_Iron.png";
import Bronze from "../../static/img/ranked-emblems/Emblem_Bronze.png";
import Silver from "../../static/img/ranked-emblems/Emblem_Silver.png";
import Gold from "../../static/img/ranked-emblems/Emblem_Gold.png";
import Platinum from "../../static/img/ranked-emblems/Emblem_Platinum.png";
import Diamond from "../../static/img/ranked-emblems/Emblem_Diamond.png";
import Master from "../../static/img/ranked-emblems/Emblem_Master.png";
import GrandMaster from "../../static/img/ranked-emblems/Emblem_Grandmaster.png";
import Challenger from "../../static/img/ranked-emblems/Emblem_Challenger.png";
export interface UserInfoProps {
	nickname: string;
	profileImg: string;
	tier: string;
	winRate: number;
	winRecord: number;
	loseRecord: number;
	level: number;
}

enum TierData {
	UNRANKED = "UNRANKED",
	IRON = "IRON",
	BRONZE = "BRONZE",
	SILVER = "SILVER",
	GOLD = "GOLD",
	PLATINUM = "PLATINUM",
	DIAMOND = "DIAMOND",
	MASTER = "MASTER",
	GRANDMASTER = "GRANDMASTER",
	CHALLENGER = "CHALLENGER",
}

function TierImage({ tier }: { tier: string }) {
	// img url 임시 세팅.
	let tierImageUrl;
	switch (tier) {
		case TierData.IRON:
			tierImageUrl = Iron;
			break;
		case TierData.BRONZE:
			tierImageUrl = Bronze;
			break;
		case TierData.SILVER:
			tierImageUrl = Silver;
			break;
		case TierData.GOLD:
			tierImageUrl = Gold;
			break;
		case TierData.PLATINUM:
			tierImageUrl = Platinum;
			break;
		case TierData.DIAMOND:
			tierImageUrl = Diamond;
			break;
		case TierData.MASTER:
			tierImageUrl = Master;
			break;
		case TierData.GRANDMASTER:
			tierImageUrl = GrandMaster;
			break;
		case TierData.CHALLENGER:
			tierImageUrl = Challenger;
			break;
		default:
			break;
	}
	return <TierImageWrapper url={tierImageUrl || ""} />;
}

function Record({
	winRecord,
	loseRecord,
}: {
	winRecord: number;
	loseRecord: number;
}) {
	return (
		<Records>
			<UserInfoDiv>Win: {winRecord}</UserInfoDiv>
			<UserInfoDiv>Lose: {loseRecord}</UserInfoDiv>
		</Records>
	);
}

function ProfileImage({ profileImg }: { profileImg: string }) {
	return <ProfileImageWrapper url={profileImg} />;
}

function ProfileInfo({
	nickname,
	tier,
	winRate,
	level,
	winRecord,
	loseRecord,
}: {
	nickname: string;
	tier: string;
	winRate: number;
	level: number;
	winRecord: number;
	loseRecord: number;
}) {
	return (
		<ProfileInfoWrapper>
			<TierNickname>
				<TierImage tier={tier} />
				<UserNickName>{nickname}</UserNickName>
			</TierNickname>

			<Tier>{tier}</Tier>
			<InfoGlobalWrapper>
				<div>
					<UserInfoDiv>Lv. {level}</UserInfoDiv>
					<UserInfoDiv>Win_Rate: {winRate}</UserInfoDiv>
					<UserInfoDiv>Troll_possibility: {100 - winRate}%</UserInfoDiv>
				</div>
				<div>
					<Record winRecord={winRecord} loseRecord={loseRecord} />
				</div>
			</InfoGlobalWrapper>
		</ProfileInfoWrapper>
	);
}

function UserInfo({
	nickname,
	profileImg,
	tier,
	winRate,
	winRecord,
	loseRecord,
	level,
}: UserInfoProps) {
	return (
		<UserInfoWrapper>
			<ProfileImage profileImg={profileImg} />
			<ProfileInfo
				nickname={nickname}
				tier={tier}
				winRate={winRate}
				level={level}
				winRecord={winRecord}
				loseRecord={loseRecord}
			/>
		</UserInfoWrapper>
	);
}

export default UserInfo;
