import CreateIcon from '@mui/icons-material/Create';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import React, { useEffect, useState } from 'react';
import { CategoryWrapper, FilterPosition } from '../../styles/findDuo/category';
import positions from '../../api/findDuoPositionCategory';
import SelectRate from './selectRate';

function Category({
  setOnoff,
  onoff,
}: {
  setOnoff: (arg1: (arg2: boolean) => boolean) => void;
  onoff: boolean;
}) {
  const [selectedPosition, setSelectedPosition] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const select = (index: number) => {
    const newSelectedPosition = [...selectedPosition];
    for (let i = 0; i < selectedPosition.length; i += 1) {
      if (selectedPosition[i]) {
        newSelectedPosition[i] = false;
        setSelectedPosition(newSelectedPosition);
      }
    }
    newSelectedPosition[index] = true;
    setSelectedPosition(newSelectedPosition);
  };
  return (
    <CategoryWrapper>
      <span className="title">필터링</span>
      <FilterPosition>
        {positions.map((position, index) => (
          <button
            onClick={e => {
              select(index);
            }}
            type="button"
            className="position"
            key={position.favorPositionDesc}
          >
            <img
              className="img"
              src={
                selectedPosition[index] ? position.focused : position.disabled
              }
              alt={position.favorPositionDesc}
            />
          </button>
        ))}
      </FilterPosition>
      <SelectRate />
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
