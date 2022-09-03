import React, { useEffect, useState } from 'react';
import delayFetcher from '../../hooks/search/delayFetcher';
import { SearchBox } from '../../styles/multiSearch/main';
import { Loader } from '../../styles/multiSearch/stats';
// eslint-disable-next-line import/no-cycle
import Stats from './stats';

interface IUserType {
  name: string;
  tier: string;
  icon: string;
  rank: string;
  point: string;
  trollPossibility: string;
}

interface IMostChampionsType {
  championUi: string;
  gamePlayed: string;
  winRate: string;
}

interface IPositionsType {
  firstLinePreference: string;
  secondLinePreference: string;
  firstLinePlayed: string;
  secondLinePlayed: string;
}

interface IRecordsType {
  lastTwentyRecords: {
    win: string;
    lose: string;
    winRate: string;
  };
  gameRecord: {
    championUi: string;
    win: boolean;
    kill: string;
    death: string;
    assist: string;
    lastPlayTime: string;
  }[];
}
export interface IResultType {
  info: IUserType | undefined;
  most: {
    mostThreeChampion: IMostChampionsType[] | undefined;
  };
  line: IPositionsType | undefined;
  gameRecord: IRecordsType | undefined;
}

function Search() {
  const [row, setRow] = useState(1);
  const [text, setText] = useState('');
  const [isParsed, setIsParsed] = useState(false);
  const [load, setload] = useState(false);
  const [focused, setfocused] = useState(false);
  const [searchData, setsearchData] = useState<IResultType[]>();
  const onChange = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    const rows = value.split('\n').length;
    setText(value);
    setRow(rows);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    const rows = value.split('\n').length;
    setText(value);
    setRow(rows);
    if (e.keyCode === 13 && rows >= 5) {
      e.preventDefault();
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsParsed(false);
    setload(true);
    const contents = text.split('\n');
    let req: string[] = [];
    for (let i = 0; i < row; i += 1) {
      if (contents[i] !== '' && contents[i].length > 14) {
        req = [...req, contents[i].slice(0, -15)];
      } else {
        alert('멀티서치: 공백 또는 줄바꿈은 없애 주십시오.');
        return; // 공백 줄바꿈 방지
      }
      if (i === 6) {
        alert('멀티서치: 최대 5줄까지 입력이 가능합니다.');
        return;
      }
    }
    const getUsersData = async () => {
      const reqLen = req.length;
      if (reqLen === 1) {
        const { personalData } = await delayFetcher(req[0]);
        setsearchData([personalData]);
      } else if (reqLen === 2) {
        const { personalData } = await delayFetcher(req[0]);
        const { personalData: personalData2 } = await delayFetcher(req[1]);
        setsearchData([personalData, personalData2]);
      } else if (reqLen === 3) {
        const { personalData } = await delayFetcher(req[0]);
        const { personalData: personalData2 } = await delayFetcher(req[1]);
        const { personalData: personalData3 } = await delayFetcher(req[2]);
        setsearchData([personalData, personalData2, personalData3]);
      } else if (reqLen === 4) {
        const { personalData } = await delayFetcher(req[0]);
        const { personalData: personalData2 } = await delayFetcher(req[1]);
        const { personalData: personalData3 } = await delayFetcher(req[2]);
        const { personalData: personalData4 } = await delayFetcher(req[3]);
        setsearchData([
          personalData,
          personalData2,
          personalData3,
          personalData4,
        ]);
      } else if (reqLen === 5) {
        const { personalData } = await delayFetcher(req[0]);
        const { personalData: personalData2 } = await delayFetcher(req[1]);
        const { personalData: personalData3 } = await delayFetcher(req[2]);
        const { personalData: personalData4 } = await delayFetcher(req[3]);
        const { personalData: personalData5 } = await delayFetcher(req[4]);
        setsearchData([
          personalData,
          personalData2,
          personalData3,
          personalData4,
          personalData5,
        ]);
      }
    };
    setload(true);
    await getUsersData();
    setload(false);
    setIsParsed(true);
  };
  useEffect(() => {
    if (text === '') {
      setfocused(false);
    } else {
      setfocused(true);
    }
  }, [text]);
  return (
    <>
      <SearchBox onSubmit={onSubmit} focused={focused} load={load}>
        <div className="placeholder">
          고양이님이 로비에 참가하셨습니다.
          <br />
          멍멍스님이 로비에 참가하셨습니다.
          <br />
          너굴맨님이 로비에 참가하셨습니다.
          <br />
          두더지님이 로비에 참가하셨습니다.
          <br />
          미어캣님이 로비에 참가하셨습니다.
        </div>
        <textarea
          className="search__input"
          onKeyDown={onKeyDown}
          onChange={onChange}
          onFocus={() => setfocused(prev => !prev)}
          spellCheck="false"
        />
        <div className="search__submit">
          <button type="submit" className="search__btn">
            {load ? <Loader /> : '멀티서치'}
          </button>
        </div>
      </SearchBox>
      {isParsed && <Stats searchData={searchData} load={load} />}
    </>
  );
}

export default Search;
