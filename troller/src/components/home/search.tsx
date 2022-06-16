import { SearchForm, SearchFormWrapper } from "../../styles/home/home";

const SearchTag = () => {
  return (
    <div className="SearchTagBox">
      <div className="SearchTag Nation">KR</div>
      <div className="SearchTag Type">Troll</div>
    </div>
  );
};
const SearchInput = () => {
  return (
    <input
      className="SearchInput"
      type="text"
      placeholder="소환사를 입력하세요"
    ></input>
  );
};
const Search = () => {
  return (
    <SearchFormWrapper>
      <SearchForm>
        <SearchTag />
        <SearchInput></SearchInput>
      </SearchForm>
    </SearchFormWrapper>
  );
};
export default Search;
