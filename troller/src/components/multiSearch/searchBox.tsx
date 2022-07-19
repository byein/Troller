import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import userCount from '../../recoil/multiSearch/multiSearch';
import { SearchBox } from '../../styles/multiSearch/main';
import { StatWrapper, UserStat } from '../../styles/multiSearch/stats';

function Search() {
  const maxLength = 16 + 15; // 닉네임 길이 + 일반 텍스트 길이
  const [text, setText] = useState('');
  const [row, setRow] = useRecoilState(userCount);
  const [isExtracted, setisExtracted] = useState(false);
  const [userArr, setuserArr] = useState<string[]>(); // 임시
  const onChange = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    const rows = value.split('\n').length;
    setText(value);
    setRow(rows);
    console.log(rows);
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
    setisExtracted(true); // => fetch 끝나면 바꿔주는걸로
    const contents = text.split('\n');
    const users: string[] = [];
    const req: { [user: string]: string } = {};
    for (let i = 0; i < 5; i += 1) {
      if (contents[i] !== '') {
        users.push(contents[i].slice(0, -15));
      }
      if (users[i] !== '') {
        req[`user${i + 1}`] = users[i];
      }
    }
    setuserArr(users); // 임시
    console.log(req, users);
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
      {isExtracted ? (
        <StatWrapper>
          {userArr?.map(item => (
            <UserStat>
              {item}
              <div className="skeleton" />
            </UserStat> // 임시
          ))}
        </StatWrapper>
      ) : null}
    </>
  );
}

export default Search;
