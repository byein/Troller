import styled from '@emotion/styled';
import { BORDER_RADIUS, DEFAULT_FONTSIZE, TRANSITION } from '../global/global';

const CategoryWrapper = styled('div')`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 100%;
  height: 50px;
  margin: 15px 0 15px 0;
  padding: 0 15px;
  border: 1px black solid;
  background-color: ${props => props.theme.bgColor.dark};
  color: ${props => props.theme.txtColor.primary};
  border-radius: ${`${BORDER_RADIUS - 5}px`};
  display: flex;
  align-items: center;
  position: relative;
  font-size: ${`${DEFAULT_FONTSIZE}px`};
  .title {
    margin: 0 15px 0 0;
  }
  .create {
    position: absolute;
    right: 5px;
    width: 50px;
    height: 80%;
    background-color: ${props => props.theme.bgColor.light};
    color: ${props => props.theme.bgColor.dark};
    border-radius: ${`${BORDER_RADIUS - 5}px`};
    cursor: pointer;
    border: none;
    ${TRANSITION}
    &:hover {
      background-color: ${props => props.theme.txtColor.selected};
    }
  }
`;

const FilterPosition = styled('div')`
  width: 225px;
  height: 45px;
  display: flex;
  margin: 0 10px 0 0;
  .position {
    width: 45px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${props => props.theme.bgColor.dark};
    border-top: 1px ${props => props.theme.bgColor.light} solid;
    border-bottom: 1px ${props => props.theme.bgColor.light} solid;
    border-right: 1px ${props => props.theme.bgColor.light} solid;
    border-left: none;
    &:nth-of-type(1) {
      border-left: 1px ${props => props.theme.bgColor.light} solid;
    }
    .img {
      width: 60%;
    }
  }
`;

export { CategoryWrapper, FilterPosition };
