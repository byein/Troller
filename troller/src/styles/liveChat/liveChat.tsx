import styled from '@emotion/styled';
import { DEFAULT_FONTSIZE } from '../global/global';

const TextArea = styled('div')`
  width: 100%;
  height: calc(100% - 70px);
  background-color: rgba(0, 0, 0, 0.3);
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Form = styled('form')`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  .input {
    width: 90%;
    height: 100%;
    border: none;
    padding: 0;
    text-indent: 20px;
    resize: none;
    font-size: ${DEFAULT_FONTSIZE + 5}px;
    background-color: transparent;
    color: ${props => props.theme.txtColor.primary};
    display: flex;
    align-items: center;
    &:focus {
      outline: none;
    }
  }
  .send {
    width: 10%;
    height: 100%;
    border: none;
    padding: 0;
    background-color: transparent;
    color: ${props => props.theme.txtColor.primary};
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.txtColor.selected};
    }
  }
`;

export { TextArea, Form };
