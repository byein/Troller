import {
  GlobalRankWrapper,
  RankItemStyle,
  RankTable,
  RankTableTR,
  RankTitle,
  RankTRBar,
  TableBody,
  TDKDA,
  TDNickname,
  TDRank,
  TDWinRate,
} from "../../styles/home/home";

interface RankItemProps {
  rank: number;
  nickname: string;
  kda: number;
  winRate: number;
}
const RankTableTRBar = () => {
  return (
    <RankTRBar>
      <td />
      <td />
      <td />
      <td />
    </RankTRBar>
  );
};
const RankItem: React.FunctionComponent<RankItemProps> = (props) => {
  return (
    <RankTableTR>
      <TDRank>{props.rank}</TDRank>
      <TDNickname>{props.nickname}</TDNickname>
      <TDKDA>KDA:{props.kda.toFixed(3)}</TDKDA>
      <TDWinRate>Win Rate:{props.winRate.toFixed(3)}</TDWinRate>
    </RankTableTR>
  );
};

const RankTableRender = () => {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < 10; i++) {
      if (i === 9) {
        result.push(
          <div>
            <RankItem
              key={i}
              rank={i + 1}
              nickname="닉네임"
              kda={i * 0.05}
              winRate={i * 0.06}
            ></RankItem>
          </div>
        );
      } else {
        result.push(
          <RankItemStyle>
            <RankItem
              key={i}
              rank={i + 1}
              nickname="닉네임"
              kda={i * 0.05}
              winRate={i * 0.06}
            ></RankItem>
            <RankTableTRBar></RankTableTRBar>{" "}
          </RankItemStyle>
        );
      }
    }
    return result;
  };
  return <TableBody>{rendering()}</TableBody>;
};
const GeneralRank = () => {
  return (
    <GlobalRankWrapper>
      <RankTitle>일반인 랭킹</RankTitle>
      <RankTable>
        <RankTableRender></RankTableRender>
      </RankTable>
    </GlobalRankWrapper>
  );
};
const ProRank = () => {
  return (
    <GlobalRankWrapper>
      <RankTitle>프로 랭킹</RankTitle>
      <RankTable>
        <RankTableRender></RankTableRender>
      </RankTable>
    </GlobalRankWrapper>
  );
};
export { GeneralRank, ProRank };
