import Guide from '../../components/multiSearch/guide';
import Search from '../../components/multiSearch/searchBox';
import { MultiSearchWrapper } from '../../styles/multiSearch/main';

function MultiSearch() {
  return (
    <MultiSearchWrapper>
      <Search />
      <Guide />
    </MultiSearchWrapper>
  );
}
export default MultiSearch;
