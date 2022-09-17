/* eslint-disable import/no-cycle */
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  FullSearchGlobalWrapper,
  RecordSection,
  UserSection,
} from '../../styles/fullSearch/fullSearch';
import GraphTab from '../../components/fullSearch/graphTab';
import UserInfo from '../../components/fullSearch/userInfo';
import SumRecord from '../../components/fullSearch/sumRecords';
import {
  FullSearchContainer,
  FullSearchWrapper,
} from '../../styles/fullSearch/userInfo';
import RecordList from '../../components/fullSearch/recordList';
import delayFetcher from '../../hooks/search/delayFetcher';

interface UserInfoProps {
  name: string;
  icon: string;
  tier: string;
  winRate: string;
  win: string;
  lose: string;
  level: string;
  trollPossibility: string;
  point: string;
  rank: string;
}
interface GameRecordProps {
  latestTwentyRecords: {
    averageDeath: string;
    lose: string;
    averageAssist: string;
    averageKda: string;
    draw: string;
    winRate: string;
    averageKill: string;
    win: string;
  };
  gameRecord: {
    averageTier: string;
    championName: string;
    championUI: string;
    csPerMinutes: string;
    itemArray: {
      item: string;
      itemImg: string;
    }[];
    primaryRuneImg: string;
    semiRune: string;
    semiRuneImg: string;
    death: string;
    visionWard: string;
    kda: string;
    playtime: string;
    kill: string;
    killRate: string;
    cs: string;
    primaryRune: string;
    lastPlayTime: string;
    assist: string;
    gameMode: string;
    win: boolean;
    spell2: string;
    spell2img: string;
    spell1: string;
    spell1img: string;
    players: {
      championImg: string;
      tier: string;
      lolName: string;
      championName: string;
      Position: string;
      team: string;
    }[];
  }[];
}
interface ChampionProps {
  mostThreeChampion: {
    championName: string;
    championUi: string;
    winRate: string;
    win: string;
    lose: string;
    kda: string;
  }[];
}
interface PositionProps {
  firstLinePreference: string;
  secondLinePreference: string;
  firstLinePlayed: string;
  secondLinePlayed: string;
}

export interface ResultProps {
  info: UserInfoProps | undefined;
  most: ChampionProps | undefined;
  line: PositionProps | undefined;
  gameRecord: GameRecordProps | undefined;
}

function FullSearch() {
  const { pathname } = useLocation();
  const decodeUri = decodeURI(pathname);
  const user = decodeUri.split('/')[1];
  const [userLoLName, setUserLoLName] = useState(user);
  const [resultData, setResultData] = useState<ResultProps>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getUsersData = async () => {
    const { personalData } = await delayFetcher(userLoLName);
    setResultData(personalData);
    return personalData;
  };

  useEffect(() => {
    /**
     * @description info, most, line, gameRecord 사이클 무한요청됨.
     */
    (async () => {
      await getUsersData();
    })();
  }, [getUsersData]);
  return (
    <FullSearchGlobalWrapper>
      <UserSection>
        <FullSearchWrapper>
          <UserInfo
            name={resultData?.info?.name}
            icon={resultData?.info?.icon}
            tier={resultData?.info?.tier}
            winRate={resultData?.info?.winRate}
            win={resultData?.info?.win}
            lose={resultData?.info?.lose}
            level={resultData?.info?.level}
            trollPossibility={resultData?.info?.trollPossibility}
            point={resultData?.info?.point}
            rank={resultData?.info?.rank}
          />
          <GraphTab pathname={pathname} />
          <FullSearchContainer pathname={pathname}>
            <Outlet />
          </FullSearchContainer>
        </FullSearchWrapper>
      </UserSection>
      <RecordSection>
        <SumRecord resultData={resultData} />
        <RecordList resultData={resultData} />
      </RecordSection>
    </FullSearchGlobalWrapper>
  );
}

export default FullSearch;
