import CreateIcon from '@mui/icons-material/Create';
import EjectIcon from '@mui/icons-material/Eject';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import {
  CategoryWrapper,
  FilterPosition,
  FilterRate,
} from '../../styles/findDuo/category';

function Category({
  setOnoff,
  onoff,
}: {
  setOnoff: (arg1: (arg2: boolean) => boolean) => void;
  onoff: boolean;
}) {
  return (
    <CategoryWrapper>
      <span className="title">필터링</span>
      <FilterPosition>
        <div className="position" />
        <div className="position" />
        <div className="position" />
        <div className="position" />
        <div className="position" />
      </FilterPosition>
      <FilterRate>
        <div className="select" />
        <div className="section">
          <EjectIcon className="triangle" />
        </div>
      </FilterRate>
      <button
        className="create"
        onClick={() => {
          setOnoff((prev: boolean) => !prev);
        }}
        type="button"
      >
        {onoff ? <FullscreenExitIcon /> : <CreateIcon />}
      </button>
    </CategoryWrapper>
  );
}
export default Category;
