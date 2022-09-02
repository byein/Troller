import styled from '@emotion/styled';
import {
  BORDER_RADIUS,
  BOX_SHADOW,
  DEFAULT_FONTSIZE,
  TRANSITION,
  TRANSPARENT_TXTCOLOR,
} from '../global/global';

const MultiSearchWrapper = styled('div')`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SearchBox = styled('form')<{ focused: boolean }>`
  ${BOX_SHADOW}
  width: 450px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.bgColor.dark};
  margin-top: 30px;
  border-radius: ${`${BORDER_RADIUS}px`};
  position: relative;
  .placeholder {
    display: ${props => (props.focused ? 'none' : 'flex')};
    width: 100%;
    height: 100px;
    position: absolute;
    top: 0;
    margin: 20px 0 20px 0;
    justify-content: center;
    align-items: center;
    color: ${TRANSPARENT_TXTCOLOR};
    z-index: 0;
  }
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
    z-index: 1;
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
      color: ${props => props.theme.bgColor.dark};
      background-color: ${props => props.theme.bgColor.light};
      cursor: pointer;
      ${TRANSITION}
      &:hover {
        background-color: ${props => props.theme.txtColor.selected};
      }
    }
  }
`;

const GuideBox = styled('div')`
  width: 1410px;
  height: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 0 0;
  background-color: ${props => props.theme.bgColor.light};
  border-radius: ${`${BORDER_RADIUS}px`};
  .imgBox {
    ${BOX_SHADOW}
    width: 28%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: ${`${BORDER_RADIUS - 5}px`};
    overflow: hidden;
    .img {
      width: 100%;
      height: 70%;
      overflow: hidden;
    }
    img {
      width: 100%;
    }
    .desc {
      width: 100%;
      height: 30%;
      background-color: white;
      padding: 10px;
    }
  }
`;

export { MultiSearchWrapper, SearchBox, GuideBox };
