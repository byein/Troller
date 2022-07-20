import styled from '@emotion/styled';
import {
  BORDER_RADIUS,
  BOX_SHADOW,
  DEFAULT_FONTSIZE,
  FLOAT_COLOR,
  TRANSITION,
} from '../global/global';

const MultiSearchWrapper = styled('div')`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SearchBox = styled('form')`
  ${FLOAT_COLOR}
  ${BOX_SHADOW}
  width: 450px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  border-radius: ${`${BORDER_RADIUS}px`};
  .search__input {
    width: 73%;
    height: 100px;
    text-align: center;
    margin: 20px 0 20px 0;
    color: ${props => props.theme.txtColor.selected};
    font-size: ${`${DEFAULT_FONTSIZE}px`};
    border: none;
    background-color: rgba(0, 0, 0, 0);
    padding: 0;
    resize: none;
    &:focus {
      outline: none;
    }
  }
  .search__submit {
    width: 95%;
    padding: 0 0 18px 0;
    display: flex;
    justify-content: center;
    .search__btn {
      width: 45%;
      height: 30px;
      border-radius: ${`${BORDER_RADIUS - 5}px`};
      border: none;
      color: ${props => props.theme.txtColor.primary};
      background-color: ${props => props.theme.btnColor.primary};
      ${TRANSITION}
      &:hover {
        background-color: ${props => props.theme.btnColor.onHover};
      }
    }
  }
`;

const GuideBox = styled('div')`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0 0 0;
  background-color: ${props => props.theme.bgColor.anotherOne};
  border-radius: ${`${BORDER_RADIUS}px`};
  .img {
    //임시
    width: 28%;
    height: 90%;
    border: 1px solid black;
  }
`;

export { MultiSearchWrapper, SearchBox, GuideBox };
