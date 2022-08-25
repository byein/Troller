import styled from '@emotion/styled';
import { DEFAULT_FONTSIZE, TRANSITION } from '../global/global';

const FriendList = styled('button')`
  cursor: pointer;
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
  display: flex;
  position: relative;
  border: none;
  background-color: transparent;
  .user {
    width: 80%;
    height: 100%;
    border-bottom: 1px solid ${props => props.theme.txtColor.primary};
    display: flex;
    position: absolute;
    left: 0;
    ${TRANSITION}
    &:hover {
      border-bottom: 1px solid ${props => props.theme.txtColor.selected};
      left: 20px;
    }
    .leftside {
      width: 312px;
      height: 100%;
      .lolName {
        width: 90%;
        height: 38px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 0 0 5px;
        color: ${props => props.theme.txtColor.selected};
        font-size: ${`${DEFAULT_FONTSIZE}px`};
      }
      .content {
        width: 90%;
        height: 40px;
        font-size: ${`${DEFAULT_FONTSIZE + 3}px`};
        color: ${props => props.theme.txtColor.primary};
        display: flex;
        padding: 0 0 0 5px;
        justify-content: flex-start;
        align-items: center;
      }
    }
    .rightside {
      width: 80px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .alert {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        border-radius: 5px;
        background-color: ${props => props.theme.validation.resolve};
      }
    }
  }
  .delete {
    position: absolute;
    right: 0;
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    color: ${props => props.theme.txtColor.primary};
    ${TRANSITION}
    &:hover {
      color: #f87d64;
    }
  }
`;

export default FriendList;
