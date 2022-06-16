import { SearchForm, SearchFormWrapper } from '../../styles/home/home';

function SearchTag() {
	return (
		<div className="SearchTagBox">
			<div className="SearchTag Nation">KR</div>
			<div className="SearchTag Type">Troll</div>
		</div>
	);
}
function SearchInput() {
	return <input className="SearchInput" type="text" placeholder="소환사를 입력하세요" />;
}
function Search() {
	return (
		<SearchFormWrapper>
			<SearchForm>
				<SearchTag />
				<SearchInput />
			</SearchForm>
		</SearchFormWrapper>
	);
}
export default Search;
