import CreateIcon from '@mui/icons-material/Create';
import EjectIcon from '@mui/icons-material/Eject';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import positions from '../../api/findDuoPositionCategory';
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
        {positions.map(position => (
          <div className="position" key={position.favorPositionDesc}>
            <img
              className="img"
              src={position.disabled}
              alt={position.favorPositionDesc}
            />
          </div>
        ))}
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
