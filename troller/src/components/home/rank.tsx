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
function RankTableTRBar() {
  return (
    <RankTRBar>
      <td />
      <td />
      <td />
      <td />
    </RankTRBar>
  );
}
function RankItem({ rank, nickname, kda, winRate }: RankItemProps) {
  return (
    <RankTableTR>
      <TDRank>{rank}</TDRank>
      <TDNickname>{nickname}</TDNickname>
      <TDKDA>KDA:{kda.toFixed(3)}</TDKDA>
      <TDWinRate>Win Rate:{winRate.toFixed(3)}</TDWinRate>
    </RankTableTR>
  );
}

function RankTableRender() {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < 10; i += 1) {
      if (i === 9) {
        result.push(
          <div>
            <RankItem
              key={i}
              rank={i + 1}
              nickname="닉네임"
              kda={i * 0.05}
              winRate={i * 0.06}
            />
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
            />
            <RankTableTRBar />{" "}
          </RankItemStyle>
        );
      }
    }
    return result;
  };
  return <TableBody>{rendering()}</TableBody>;
}
function GeneralRank() {
  return (
    <GlobalRankWrapper>
      <RankTitle>일반인 랭킹</RankTitle>
      <RankTable>
        <RankTableRender />
      </RankTable>
    </GlobalRankWrapper>
  );
}
function ProRank() {
  return (
    <GlobalRankWrapper>
      <RankTitle>프로 랭킹</RankTitle>
      <RankTable>
        <RankTableRender />
      </RankTable>
    </GlobalRankWrapper>
  );
}
export { GeneralRank, ProRank };
