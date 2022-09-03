/* eslint-disable no-nested-ternary */
import { useEffect } from 'react';
import { Record, StatWrapper, UserStat } from '../../styles/multiSearch/stats';
// eslint-disable-next-line import/no-cycle
import { IResultType } from './searchBox';
import top from '../../static/img/common/positions/top_focused.png';
import jungle from '../../static/img/common/positions/jungle_focused.png';
import mid from '../../static/img/common/positions/mid_focused.png';
import bottom from '../../static/img/common/positions/bottom_focused.png';
import util from '../../static/img/common/positions/utility_focused.png';

function Stats({
  searchData,
  load,
}: {
  searchData: IResultType[] | undefined;
  load: boolean;
}) {
  return (
    <StatWrapper>
      {searchData?.map(userData => (
        <UserStat load={load} key={userData.info?.name}>
          <div className="trollBox">
            <div className="troll">
              <span>트롤확률 </span>
              <span className="trollPer">
                {userData.info?.trollPossibility}
              </span>
            </div>
            <span className="trollAlert">Safe</span>
          </div>
          <div className="userBox">
            <div className="name">
              <span>{userData.info?.name}</span>
            </div>
            <div className="tier">
              <div className="tierContainer">
                <div className="tierIcon">
                  <img className="icon" src={userData.info?.icon} alt="tier" />
                </div>
                <span className="rank">{userData.info?.rank}</span>
              </div>
              <div className="pointContainer">
                <span className="point"> {userData.info?.point}P</span>
              </div>
            </div>
          </div>
          <div className="championBox">
            <span className="title">챔피언 TOP 3</span>
            <div className="content">
              <div className="inner">
                {userData.most?.mostThreeChampion?.map(champ => {
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
                    userData.line?.firstLinePreference === 'TOP'
                      ? top
                      : userData.line?.firstLinePreference === 'JUNGLE'
                      ? jungle
                      : userData.line?.firstLinePreference === 'BOTTOM'
                      ? bottom
                      : userData.line?.firstLinePreference === 'MIDDLE'
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
                  {userData.line?.firstLinePlayed}게임
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
                  {userData.line?.secondLinePlayed}게임
                </span>
              </div>
            </div>
          </div>
          <div className="recordBox">
            <div className="header">
              <span className="title">최근 전적</span>
            </div>
            <div className="records">
              {userData.gameRecord?.gameRecord.slice(0, 5).map(record => (
                <Record win={record.win} key={record.lastPlayTime}>
                  <div className="left">
                    <div className="championBox">
                      <img
                        className="championUi"
                        src={record.championUi}
                        alt="champion"
                      />
                    </div>
                    <span className="isWin">{record.win ? '승' : '패'}</span>
                  </div>
                  <div className="kdaBox">
                    <span className="kda">
                      {record.kill} / {record.death} / {record.assist}
                    </span>
                  </div>
                  <span className="time">23시간 전</span>
                </Record>
              ))}
            </div>
          </div>
        </UserStat>
      ))}
    </StatWrapper>
  );
}

export default Stats;
