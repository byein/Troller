import CreateIcon from '@mui/icons-material/Create';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import React, { useState } from 'react';
import {
  CategoryWrapper,
  FilterPosition,
  SelectBtn,
} from '../../styles/findDuo/category';
import positions from '../../api/findDuoPositionCategory';
import SelectRate from './selectRate';

function Category({
  setOnoff,
  onoff,
}: {
  setOnoff: (arg1: (arg2: boolean) => boolean) => void;
  onoff: boolean;
}) {
  const [top, mid, bottom, jungle, utility] = [
    'TOP',
    'MID',
    'BOTTOM',
    'JUNGLE',
    'UTILITY',
  ]; // selectPosition에서 TRUE값이 있는 위치를 감지하는 배열
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
          <SelectBtn
            onClick={e => {
              select(index);
            }}
            type="button"
            className="position"
            key={position.favorPositionDesc}
            isSelected={selectedPosition[index]}
          >
            <img
              className="img"
              src={
                selectedPosition[index] ? position.focused : position.disabled
              }
              alt={position.favorPositionDesc}
            />
          </SelectBtn>
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
