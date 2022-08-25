/* eslint-disable no-nested-ternary */
import { useApi } from '../../hooks/axiosHooks';
import { StatWrapper, UserStat } from '../../styles/multiSearch/stats';
// eslint-disable-next-line import/no-cycle
import { IResultType } from './searchBox';
import top from '../../static/img/common/positions/top_focused.png';
import jungle from '../../static/img/common/positions/jungle_focused.png';
import mid from '../../static/img/common/positions/mid_focused.png';
import bottom from '../../static/img/common/positions/bottom_focused.png';
import util from '../../static/img/common/positions/utility_focused.png';

const dummyData: IResultType[] = [
  {
    info: {
      name: 'cwctboy',
      tierIcon:
        'https://i.pinimg.com/originals/69/61/ab/6961ab1af799f02df28fa74278d78120.png',
      rank: 'I',
      point: '1445',
      trollPossibility: '0.98%',
    },
    most: {
      mostThreeChampions: [
        {
          championUi:
            'https://www.leagueoflegends.com/static/fighter-7a08920b696ecdb673edeeae1d3c616e.png',
          gamePlayed: '10',
          winRate: '0.98%',
        },
        {
          championUi:
            'https://www.leagueoflegends.com/static/assassin-d64d3ffdda15e1eed637aefe6a2c7fee.png',
          gamePlayed: '20',
          winRate: '0.98%',
        },
        {
          championUi:
            'https://www.leagueoflegends.com/static/support-d63ae08baf517425864ddc020a5871d5.png',
          gamePlayed: '0',
          winRate: '0.98%',
        },
      ],
    },
    line: {
      firstLinePreference: 'Top',
      secondLinePreference: 'Jungle',
      firstLinePlayed: '10',
      secondLinePlayed: '5',
    },
    gameRecord: {
      lastTwentyRecords: {
        win: '10',
        lose: '5',
        winRate: '0.98%',
      },
      gameRecord: [
        {
          championUi:
            'https://www.leagueoflegends.com/static/fighter-7a08920b696ecdb673edeeae1d3c616e.png',
          win: true,
          kill: '15',
          death: '3',
          assist: '2',
          lastPlayTime: '2시간 전',
        },
        {
          championUi:
            'https://www.leagueoflegends.com/static/fighter-7a08920b696ecdb673edeeae1d3c616e.png',
          win: false,
          kill: '15',
          death: '53',
          assist: '54',
          lastPlayTime: '5시간 전',
        },
        {
          championUi:
            'https://www.leagueoflegends.com/static/fighter-7a08920b696ecdb673edeeae1d3c616e.png',
          win: true,
          kill: '50',
          death: '25',
          assist: '5',
          lastPlayTime: '3일 전',
        },
        {
          championUi:
            'https://www.leagueoflegends.com/static/fighter-7a08920b696ecdb673edeeae1d3c616e.png',
          win: false,
          kill: '10',
          death: '7',
          assist: '60',
          lastPlayTime: '25일 전',
        },
        {
          championUi:
            'https://www.leagueoflegends.com/static/fighter-7a08920b696ecdb673edeeae1d3c616e.png',
          win: true,
          kill: '10',
          death: '5',
          assist: '5',
          lastPlayTime: '45일 전',
        },
      ],
    },
  },
];

function Stats({
  searchData,
  load,
}: {
  searchData: IResultType[] | undefined;
  load: boolean;
}) {
  const trollParse = parseFloat(
    dummyData[0].info!.trollPossibility.split('%')[0]
  );
  return (
    <StatWrapper>
      {dummyData?.map(userData => (
        <UserStat load={load} trollParse={trollParse}>
          <div className="trollBox">
            <div className="troll">
              <span>트롤확률 </span>
              <span className="trollPer">
                {userData.info!.trollPossibility}
              </span>
            </div>
            <span className="trollAlert">
              {trollParse > 25 ? 'Danger' : 'Safe'}
            </span>
          </div>
          <div className="userBox">
            <div className="name">
              <span>{userData.info!.name}</span>
            </div>
            <div className="tier">
              <div className="tierContainer">
                <div className="tierIcon">
                  <img
                    className="icon"
                    src={userData.info!.tierIcon}
                    alt="tier"
                  />
                </div>
                <span className="rank"> - {userData.info!.rank}</span>
              </div>
              <div className="pointContainer">
                <span className="point"> {userData.info!.point}P</span>
              </div>
            </div>
          </div>
          <div className="championBox">
            <span className="title">챔피언 TOP 3</span>
            <div className="content">
              <div className="inner">
                {userData.most?.mostThreeChampions?.map(champ => {
                  return (
                    <div className="champs">
                      <div className="imgBox">
                        <img
                          src={champ.championUi}
                          alt="champion"
                          className="img"
                        />
                      </div>
                      <div className="desc">
                        <span className="winrate">
                          {champ.winRate.split('.')[1]}
                        </span>
                        <span className="played">{champ.gamePlayed}게임</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="positionBox">
            <div className="pos">
              <div className="iconBox">
                <img
                  className="icon"
                  src={
                    userData.line?.firstLinePreference === 'Top'
                      ? top
                      : userData.line?.firstLinePreference === 'Jungle'
                      ? jungle
                      : userData.line?.firstLinePreference === 'Bottom'
                      ? bottom
                      : userData.line?.firstLinePreference === 'Middle'
                      ? mid
                      : util
                  }
                  alt="position"
                />
              </div>
              <div className="desc">
                <span className="title">
                  {userData.line?.firstLinePreference.toUpperCase()}
                </span>
                <span className="played">
                  {userData.line?.firstLinePlayed}회
                </span>
              </div>
            </div>
            <div className="pos">
              <div className="iconBox">
                <img
                  className="icon"
                  src={
                    userData.line?.secondLinePreference === 'Top'
                      ? top
                      : userData.line?.secondLinePreference === 'Jungle'
                      ? jungle
                      : userData.line?.secondLinePreference === 'Bottom'
                      ? bottom
                      : userData.line?.secondLinePreference === 'Middle'
                      ? mid
                      : util
                  }
                  alt="position"
                />
              </div>
              <div className="desc">
                <span className="title">
                  {userData.line?.secondLinePreference.toUpperCase()}
                </span>
                <span className="played">
                  {userData.line?.secondLinePlayed}회
                </span>
              </div>
            </div>
          </div>
          <div className="recordBox">
            <div className="header">
              <span className="title">최근 전적</span>
            </div>
          </div>
        </UserStat>
      ))}
    </StatWrapper>
  );
}

export default Stats;
