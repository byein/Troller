import React, { ReactNode } from 'react';
import {
	ProfileImageWrapper,
	ProfileInfoWrapper,
	Records,
	Tier,
	TierImageWrapper,
	TierRecordWrapper,
	UserInfoDiv,
	UserInfoWrapper,
	UserNickName,
} from '../../styles/mypage/mypage';

export interface UserInfoProps {
	nickname: string;
	profileImg: string;
	tier: string;
	winRate: number;
	winRecord: number;
	loseRecord: number;
	level: number;
}

function ProfileImage({ profileImg }: { profileImg: string }) {
	return <ProfileImageWrapper url={profileImg} />;
}

function ProfileInfo({
	nickname,
	tier,
	winRate,
	level,
}: {
	nickname: string;
	tier: string;
	winRate: number;
	level: number;
}) {
	return (
		<ProfileInfoWrapper>
			<UserNickName>{nickname}</UserNickName>
			<Tier>{tier}</Tier>
			<UserInfoDiv>Lv. {level}</UserInfoDiv>
			<UserInfoDiv>Win_Rate: {winRate}%</UserInfoDiv>
			<UserInfoDiv>Troll_possibility: {100 - winRate}%</UserInfoDiv>
		</ProfileInfoWrapper>
	);
}

enum TierData {
	UNRANKED = 'UnRanked',
	IRON = 'Iron',
	BRONZE = 'Bronze',
	SILVER = 'Silver',
	GOLD = 'Gold',
	PLATINUM = 'Platinum',
	DIAMOND = 'Diamond',
	MASTER = 'Master',
	GRANDMASTER = 'Grandmaster',
	CHALLENGER = 'Challenger',
}
function TierImage({ tier }: { tier: string }) {
	let tierImageUrl;
	switch (tier) {
		case TierData.IRON:
			break;
		case TierData.BRONZE:
			break;
		case TierData.SILVER:
			break;
		case TierData.GOLD:
			break;
		case TierData.PLATINUM:
			tierImageUrl =
				'https://w.namu.la/s/745ebb10157397861954049ef4c0b9f8ae47a0ca4ad4333f7b198e02f9712f63789756f32792483823e132c9e49b86cc4ece11e8610e342329c206f751e08cb21ec70211265038e410a2f2c46bd496ad885203ac249e98b581a4c94152a3da78';
			break;
		case TierData.DIAMOND:
			break;
		case TierData.MASTER:
			break;
		case TierData.GRANDMASTER:
			break;
		case TierData.CHALLENGER:
			break;
		default:
			break;
	}
	return <TierImageWrapper url={tierImageUrl || ''} />;
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
			Recent 100
			<UserInfoDiv>Win: {winRecord}</UserInfoDiv>
			<UserInfoDiv>Lose: {loseRecord}</UserInfoDiv>
		</Records>
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
			/>
			<TierRecordWrapper>
				<TierImage tier={tier} />
				<Record winRecord={winRecord} loseRecord={loseRecord} />
			</TierRecordWrapper>
		</UserInfoWrapper>
	);
}
export default UserInfo;
