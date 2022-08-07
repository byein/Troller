import styled from '@emotion/styled';
import EjectIcon from '@mui/icons-material/Eject';
import React, { useState } from 'react';
import {
  BORDER_RADIUS,
  DEFAULT_FONTSIZE,
  TRANSITION,
} from '../../styles/global/global';

const SelectRateWrapper = styled('div')<{ toggle: boolean }>`
  width: 100px;
  height: 45px;
  border: 1px ${props => props.theme.bgColor.light} solid;
  background-color: ${props => props.theme.bgColor.dark};
  color: ${props => props.theme.bgColor.light};
  border-radius: ${`${BORDER_RADIUS - 5}px`};
  display: flex;
  position: relative;
  .section {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    .triangle {
      font-size: 15px;
      cursor: pointer;
      ${TRANSITION}
      color: ${props =>
        props.toggle
          ? props.theme.txtColor.selected
          : props.theme.txtColor.primary};
      transform: rotate(${props => (props.toggle ? '0' : '180deg')});
    }
  }
  .value {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .txt {
      font-size: ${`${DEFAULT_FONTSIZE}px`};
      color: ${props => props.theme.txtColor.primary};
    }
    .selection {
      width: 100%;
      height: 89px;
      position: absolute;
      right: 1px;
      top: -1px;
      z-index: 1;
      overflow: hidden;
      border-radius: ${`${BORDER_RADIUS - 5}px`};
      border: 1px solid ${props => props.theme.bgColor.light};
      .section {
        width: 100%;
        height: 43px;
        border: none;
        cursor: pointer;
        color: ${props => props.theme.txtColor.primary};
        background-color: ${props => props.theme.bgColor.dark};
        padding: 0;
        &:hover {
          color: ${props => props.theme.txtColor.selected};
        }
        &:nth-of-type(1) {
          position: absolute;
          top: 43px;
          height: 44px;
          border-top: 1px solid ${props => props.theme.bgColor.light};
        }
      }
    }
  }
`;

function SelectRate() {
  const firstRender = '시간순';
  const [isClicked, setisClicked] = useState(false);
  const [rates, setRates] = useState(['승률', 'KDA']);
  const [toggle, setToggle] = useState(false);
  const toggleSelection = () => {
    setToggle(prev => !prev);
  };
  const selectRate = (e: React.MouseEvent<HTMLButtonElement>) => {
    setisClicked(true);
    const { innerText } = e.currentTarget;
    if (innerText === rates[0]) {
      setRates([innerText, rates[1]]);
    } else {
      setRates([innerText, rates[0]]);
    }
    setToggle(false);
  };
  return (
    <SelectRateWrapper toggle={toggle}>
      <div className="value">
        <span className="txt">{isClicked ? rates[0] : firstRender}</span>
        {toggle ? (
          <div className="selection">
            {rates.map((rate, index) => (
              <button className="section" onClick={selectRate} type="button">
                {rates[index]}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      <div className="section">
        <EjectIcon className="triangle" onClick={toggleSelection} />
      </div>
    </SelectRateWrapper>
  );
}

export default SelectRate;
