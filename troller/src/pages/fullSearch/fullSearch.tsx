import axios from 'axios';
/* eslint-disable import/no-cycle */
import { Outlet, useLocation, useParams } from 'react-router-dom';
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
import { useApi } from '../../hooks/axiosHooks';

interface UserInfoProps {
  lolName: string;
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
    averageKillRate: string;
  };
  gameRecord: {
    championLevel: string;
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
  /**
   * @description useParams를 통해 라우터에 등록된 :userId를 깨지지 않은 채로 가져올 수 있어서 사용
   * @description useLocation은 props로 넘겨줄 컴포넌트에 함수로 바로 넘겨줌
   */
  const { userId } = useParams();
  const [resultData, setResultData] = useState<ResultProps>();

  const url = '';

  useEffect(() => {
    (async () => {
      if (userId) {
        /**
         * @description 기존에 userId를 저장하던 state의 setter를 사용하지 않는 것 같아 삭제하고 useParams값을 그대로 사용
         * @description dependency에 userId를 넣어주지 않아 무한 렌더링이 발생한 것 같음
         */
        const { personalData } = await delayFetcher(userId);
        setResultData(personalData);
      }
    })();
  }, [userId]);

  return (
    <FullSearchGlobalWrapper>
      <UserSection>
        <FullSearchWrapper>
          <UserInfo
            name={resultData?.info?.lolName}
            icon={resultData?.info?.icon}
            tier={resultData?.info?.tier}
            winRate={resultData?.info?.winRate}
            win={resultData?.info?.win}
            lose={resultData?.info?.lose}
            level={resultData?.info?.level}
            // trollPossibility={resultData?.info?.trollPossibility}
            point={resultData?.info?.point}
            rank={resultData?.info?.rank}
          />
          <GraphTab pathname={useLocation().pathname} />
          <FullSearchContainer pathname={useLocation().pathname}>
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
