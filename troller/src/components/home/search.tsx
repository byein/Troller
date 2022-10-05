import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchForm, SearchFormWrapper } from '../../styles/home/home';

function SearchTag() {
  return (
    <div className="SearchTagBox">
      <div className="SearchTag Nation">KR</div>
      <div className="SearchTag Type">Troll</div>
    </div>
  );
}

function Search() {
  const nav = useNavigate();
  const [query, setQuery] = useState({ text: '' });
  const onChange = (e: any) => {
    const newQuery = Object.freeze({ text: e.target.value });
    setQuery(newQuery);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const newQuery = Object.freeze({ text: query.text });
    const encodeUri = encodeURI(newQuery.text);
    const uri = `/${encodeUri}/troll_possibility`;
    nav(uri);
  };
  return (
    <SearchFormWrapper>
      <SearchForm onSubmit={onSubmit}>
        <SearchTag />
        <input
          className="SearchInput"
          type="text"
          placeholder="소환사를 입력하세요"
          onChange={onChange}
        />
      </SearchForm>
    </SearchFormWrapper>
  );
}
export default Search;
