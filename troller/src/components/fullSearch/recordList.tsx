import {
  FlexDiv,
  RecordItemAction,
  RecordItemGame,
  RecordItemInfo,
  RecordItemInfoWrapper,
  RecordItemLi,
  RecordItemParticipants,
  RecordItemUl,
  RecordItemWrapper,
  RecordsWrapper,
} from '../../styles/fullSearch/recordList';

interface ResultProps {
  result: string;
}

function RecordItem(props: ResultProps) {
  // let result = "LOSE";
  return (
    <RecordItemLi>
      <RecordItemWrapper result={props.result}>
        <RecordItemGame result={props.result}>
          <div className="type">솔랭</div>
          <div className="time-stamp">
            <div>한 달 전</div>
          </div>
          <div className="bar"></div>
          <div className="result">패배</div>
          <div className="length">31분 40초</div>
        </RecordItemGame>
        <RecordItemInfo>
          <FlexDiv result={props.result}>
            <RecordItemInfoWrapper>
              <FlexDiv result={props.result}>
                <div className="champion">
                  <div className="icon">
                    <img
                      src="https://opgg-static.akamaized.net/images/lol/champion/Akali.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_96&amp;v=1657538065501"
                      width="48"
                      alt="아칼리"
                      height="48"
                    />
                    <span className="champion-level">15</span>
                  </div>
                </div>
                <div className="spells">
                  <div className="spell">
                    <img
                      src="https://opgg-static.akamaized.net/images/lol/spell/SummonerDot.png?image=q_auto,f_webp,w_44&amp;v=1657538065501"
                      width="22"
                      alt="점화"
                    />
                  </div>
                  <div className="spell">
                    <img
                      src="https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_44&amp;v=1657538065501"
                      width="22"
                      alt="점멸"
                    />
                  </div>
                </div>

                <div className="runes">
                  <div className="rune">
                    <img
                      src="https://opgg-static.akamaized.net/images/lol/perk/8010.png?image=q_auto,f_webp,w_44&amp;v=1657538065501"
                      width="22"
                      alt="정복자"
                    />
                  </div>
                  <div className="rune">
                    <img
                      src="https://opgg-static.akamaized.net/images/lol/perkStyle/8400.png?image=q_auto,f_webp,w_44&amp;v=1657538065501"
                      width="22"
                      alt="결의"
                    />
                  </div>
                </div>
              </FlexDiv>
            </RecordItemInfoWrapper>
            <div className="kda">
              <div className="k-d-a">
                <span>7</span> / <span className="d">7</span> / <span>6</span>
              </div>
              <div className="ratio">
                <span>1.86:1 </span>
                평점
              </div>
            </div>

            <div className="stats">
              <div className="p-kill">
                <div>킬관여 39%</div>
              </div>
              <div className="ward">제어와드 3</div>
              <div className="cs">CS 197 (6.2)</div>
              <div className="average-tier">gold 2</div>
            </div>
          </FlexDiv>
          <FlexDiv result={props.result}>
            <div className="items">
              <ul>
                <li>
                  <img
                    src="https://opgg-static.akamaized.net/images/lol/item/3152.png?image=q_auto,f_webp,w_44&amp;v=1657538065312"
                    width="22"
                    alt="마법공학 로켓 벨트"
                  />
                </li>
                <li>
                  <img
                    src="https://opgg-static.akamaized.net/images/lol/item/3152.png?image=q_auto,f_webp,w_44&amp;v=1657538065312"
                    width="22"
                    alt="마법공학 로켓 벨트"
                  />
                </li>
                <li>
                  <img
                    src="https://opgg-static.akamaized.net/images/lol/item/3152.png?image=q_auto,f_webp,w_44&amp;v=1657538065312"
                    width="22"
                    alt="마법공학 로켓 벨트"
                  />
                </li>
                <li>
                  <img
                    src="https://opgg-static.akamaized.net/images/lol/item/3152.png?image=q_auto,f_webp,w_44&amp;v=1657538065312"
                    width="22"
                    alt="마법공학 로켓 벨트"
                  />
                </li>
                <li>
                  <img
                    src="https://opgg-static.akamaized.net/images/lol/item/3152.png?image=q_auto,f_webp,w_44&amp;v=1657538065312"
                    width="22"
                    alt="마법공학 로켓 벨트"
                  />
                </li>
                <li>
                  <img
                    src="https://opgg-static.akamaized.net/images/lol/item/3152.png?image=q_auto,f_webp,w_44&amp;v=1657538065312"
                    width="22"
                    alt="마법공학 로켓 벨트"
                  />
                </li>
              </ul>
              <div className="ward">
                <img
                  src="https://opgg-static.akamaized.net/images/lol/item/3364.png?image=q_auto,f_webp,w_44&amp;v=1657538065312"
                  width="22"
                  alt="예언자의 렌즈"
                />
              </div>
            </div>
          </FlexDiv>
        </RecordItemInfo>
        <RecordItemParticipants>
          <ul>
            <li>
              <div className="icon">
                <img
                  src="https://opgg-static.akamaized.net/images/lol/champion/Malphite.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1657620388852"
                  width="16"
                  alt="말파이트"
                />
              </div>
              <div className="name">내가 안 키웠을걸</div>
            </li>
            <li>
              <div className="icon">
                <img
                  src="https://opgg-static.akamaized.net/images/lol/champion/LeeSin.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1657620388852"
                  width="16"
                  alt="리 신"
                />
              </div>
              <div className="name">2023년12월19일</div>
            </li>
            <li>
              <div className="icon">
                <img
                  src="https://opgg-static.akamaized.net/images/lol/champion/Vex.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1657620388852"
                  width="16"
                  alt="벡스"
                />
              </div>
              <div className="name">채 희 솔</div>
            </li>
            <li>
              <div className="icon">
                <img
                  src="https://opgg-static.akamaized.net/images/lol/champion/Kaisa.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1657620388852"
                  width="16"
                  alt="카이사"
                />
              </div>
              <div className="name">몇시영</div>
            </li>
            <li>
              <div className="icon">
                <img
                  src="https://opgg-static.akamaized.net/images/lol/champion/Ashe.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1657620388852"
                  width="16"
                  alt="애쉬"
                />
              </div>
              <div className="name">me me she</div>
            </li>
          </ul>
          <ul>
            <li>
              <div className="icon">
                <img
                  src="https://opgg-static.akamaized.net/images/lol/champion/Maokai.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1657620388852"
                  width="16"
                  alt="마오카이"
                />
              </div>
              <div className="name">상대갱먼저옴안함</div>
            </li>
            <li>
              <div className="icon">
                <img
                  src="https://opgg-static.akamaized.net/images/lol/champion/Belveth.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1657620388852"
                  width="16"
                  alt="벨베스"
                />
              </div>
              <div className="name">In the Roon</div>
            </li>
            <li>
              <div className="icon">
                <img
                  src="https://opgg-static.akamaized.net/images/lol/champion/Akali.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1657620388852"
                  width="16"
                  alt="아칼리"
                />
              </div>
              <div className="name">asdf</div>
            </li>
            <li>
              <div className="icon">
                <img
                  src="https://opgg-static.akamaized.net/images/lol/champion/Senna.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1657620388852"
                  width="16"
                  alt="세나"
                />
              </div>
              <div className="name">강형욱이파양한개</div>
            </li>
            <li>
              <div className="icon">
                <img
                  src="https://opgg-static.akamaized.net/images/lol/champion/Pantheon.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1657620388852"
                  width="16"
                  alt="판테온"
                />
              </div>
              <div className="name">눈 속에 돌 있다</div>
            </li>
          </ul>
        </RecordItemParticipants>
        <RecordItemAction result={props.result}>
          <button className="detail">
            {props.result === 'LOSE' ? (
              <img
                src="https://s-lol-web.op.gg/images/icon/icon-arrow-down-red.svg?v=1657538065312"
                width="24"
                alt="More"
                height="24"
              />
            ) : (
              <img
                src="https://s-lol-web.op.gg/images/icon/icon-arrow-down-blue.svg?v=1657538065312"
                width="24"
                alt="More"
                height="24"
              />
            )}
          </button>
        </RecordItemAction>
      </RecordItemWrapper>
    </RecordItemLi>
  );
}

enum WINLOSE {
  WIN = 'WIN',
  LOSE = 'LOSE',
}

function RecordList() {
  const arr: WINLOSE[] = [
    WINLOSE.WIN,
    WINLOSE.LOSE,
    WINLOSE.WIN,
    WINLOSE.WIN,
    WINLOSE.WIN,
    WINLOSE.WIN,
    WINLOSE.LOSE,
    WINLOSE.LOSE,
    WINLOSE.LOSE,
    WINLOSE.LOSE,
    WINLOSE.WIN,
    WINLOSE.LOSE,
    WINLOSE.WIN,
    WINLOSE.WIN,
    WINLOSE.WIN,
    WINLOSE.WIN,
    WINLOSE.LOSE,
    WINLOSE.LOSE,
    WINLOSE.LOSE,
    WINLOSE.LOSE,
  ];

  return (
    <RecordsWrapper>
      <RecordItemUl>
        {arr.map(function (e) {
          return <RecordItem result={e} />;
        })}
      </RecordItemUl>
    </RecordsWrapper>
  );
}
export default RecordList;
