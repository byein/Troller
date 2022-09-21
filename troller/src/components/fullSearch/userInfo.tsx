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
} from '../../styles/fullSearch/userInfo';
import Iron from '../../static/img/ranked-emblems/Emblem_Iron.png';
import Bronze from '../../static/img/ranked-emblems/Emblem_Bronze.png';
import Silver from '../../static/img/ranked-emblems/Emblem_Silver.png';
import Gold from '../../static/img/ranked-emblems/Emblem_Gold.png';
import Platinum from '../../static/img/ranked-emblems/Emblem_Platinum.png';
import Diamond from '../../static/img/ranked-emblems/Emblem_Diamond.png';
import Master from '../../static/img/ranked-emblems/Emblem_Master.png';
import GrandMaster from '../../static/img/ranked-emblems/Emblem_Grandmaster.png';
import Challenger from '../../static/img/ranked-emblems/Emblem_Challenger.png';

export interface UserInfoProps {
  name: string | undefined;
  icon: string | undefined;
  tier: string | undefined;
  winRate: string | undefined;
  win: string | undefined;
  lose: string | undefined;
  level: string | undefined;
  trollPossibility: string | undefined;
  point: string | undefined;
  rank: string | undefined;
}

export enum TierData {
  UNRANKED = 'UNRANKED',
  IRON = 'IRON',
  BRONZE = 'BRONZE',
  SILVER = 'SILVER',
  GOLD = 'GOLD',
  PLATINUM = 'PLATINUM',
  DIAMOND = 'DIAMOND',
  MASTER = 'MASTER',
  GRANDMASTER = 'GRANDMASTER',
  CHALLENGER = 'CHALLENGER',
}

function TierImage({ tier }: { tier: string | undefined }) {
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
  return <TierImageWrapper url={tierImageUrl || ''} />;
}

function Record({
  winRecord,
  loseRecord,
}: {
  winRecord: string | undefined;
  loseRecord: string | undefined;
}) {
  return (
    <Records>
      <UserInfoDiv>Win: {winRecord}</UserInfoDiv>
      <UserInfoDiv>Lose: {loseRecord}</UserInfoDiv>
    </Records>
  );
}

function ProfileImage({ profileImg }: { profileImg: string | undefined }) {
  return <ProfileImageWrapper url={profileImg} />;
}

function ProfileInfo({
  name,
  icon,
  tier,
  winRate,
  win,
  lose,
  level,
  trollPossibility,
  point,
  rank,
}: UserInfoProps) {
  return (
    <ProfileInfoWrapper>
      <TierNickname>
        <TierImage tier={tier} />
        <UserNickName>{name}</UserNickName>
      </TierNickname>
      <Tier>
        {tier} {rank}
      </Tier>
      <InfoGlobalWrapper>
        <div>
          <UserInfoDiv>Lv. {level}</UserInfoDiv>
          <UserInfoDiv>Win_Rate: {winRate}</UserInfoDiv>
          <UserInfoDiv>Troll_possibility: {trollPossibility}</UserInfoDiv>
        </div>
        <div>
          <Record winRecord={win} loseRecord={lose} />
        </div>
      </InfoGlobalWrapper>
    </ProfileInfoWrapper>
  );
}

function UserInfo({
  name,
  icon,
  tier,
  winRate,
  win,
  lose,
  level,
  trollPossibility,
  point,
  rank,
}: UserInfoProps) {
  return (
    <UserInfoWrapper>
      <ProfileImage profileImg={icon} />
      <ProfileInfo
        name={name}
        icon={icon}
        tier={tier}
        winRate={winRate}
        win={win}
        lose={lose}
        level={level}
        trollPossibility={trollPossibility}
        point={point}
        rank={rank}
      />
    </UserInfoWrapper>
  );
}

export default UserInfo;
