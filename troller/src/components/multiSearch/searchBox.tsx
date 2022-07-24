import React, { useState } from 'react';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import { SearchBox } from '../../styles/multiSearch/main';
// import { Axios as axios } from '../../hooks/axiosMethod';

interface ISearchDataType {
  name: 'sdfsdf';
  level: 'dsfgdsf';
} // 임시 데이터
interface IOutletDataType {
  searchData: ISearchDataType[];
  load: boolean;
}

function Search() {
  const navigate = useNavigate();
  const [row, setRow] = useState(1);
  const [text, setText] = useState('');
  const [isExtracted, setisExtracted] = useState(false);
  const [load, setload] = useState(true);
  const [searchData, setsearchData] = useState<ISearchDataType[]>(); // 회의 후 타입지정
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
    const contents = text.split('\n');
    const req: { [user: string]: string } = {};
    let query = '';
    for (let i = 0; i < row; i += 1) {
      if (contents[i] !== '') {
        req[`user${i + 1}`] = contents[i].slice(0, -15);
        if (i === row - 1) {
          query += `user${i + 1}=${contents[i].slice(0, -15)}`;
        } else {
          query += `user${i + 1}=${contents[i].slice(0, -15)}&`;
        }
      } else {
        alert('멀티서치: 공백 줄바꿈은 없애 주십시오.');
        return; // 공백 줄바꿈 방지
      }
      if (i === 6) {
        alert('멀티서치: 최대 5줄까지 입력이 가능합니다.');
        return;
      }
    }
    setisExtracted(true);
    navigate(`/multi_search/${query}`);
  };
  return (
    <>
      <SearchBox onSubmit={onSubmit}>
        <textarea
          className="search__input"
          onKeyDown={onKeyDown}
          onChange={onChange}
          spellCheck="false"
          placeholder="고양이님이 로비에 참가하셨습니다.&#13;&#10;멍멍스님이 로비에 참가하셨습니다.&#13;&#10;너굴맨님이 로비에 참가하셨습니다.&#13;&#10;두더지님이 로비에 참가하셨습니다.&#13;&#10;미어캣님이 로비에 참가하셨습니다."
        />
        <div className="search__submit">
          <button type="submit" className="search__btn">
            멀티서치
          </button>
        </div>
      </SearchBox>
      {isExtracted ? <Outlet context={{ load }} /> : null}
    </>
  );
}
function useStats() {
  return useOutletContext<IOutletDataType>();
}
export { Search, useStats };

// if (req !== undefined) {
//   const { res, data } = await axios.post<ISearchDataType[]>(
//     '/multiSearch',
//     req
//   );
//   if (data !== undefined || null) {
//   setisExtracted(true);
//   setsearchData(data);
//   }
//   if (res?.status === 401) {
//     // 해당 유저정보가 없을 때 401 or something
//     alert('멀티서치: 해당 유저를 찾을 수 없습니다.');
//   }
// }
