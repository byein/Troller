import styled from '@emotion/styled';
import { TRANSITION } from '../global/global';

const ChatWrapper = styled('div')`
  width: 100%;
  height: calc(100vh - 80px);
  overflow: hidden;
  right: 0;
  ${TRANSITION}
  .contents {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    background-color: ${props => props.theme.bgColor.dark};
  }
`;

const FriendsBox = styled('div')`
  width: 450px;
  height: 100%;
  margin: 0 0 0 46px;
  overflow: scroll;
  padding-top: 80px;
  .header__chat {
    z-index: 1;
    position: fixed;
    top: 80px;
    width: 450px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.bgColor.light};
    background-color: ${props => props.theme.bgColor.dark};
    border-bottom: 3px solid ${props => props.theme.bgColor.light};
  }
`;

const SocketBox = styled('div')`
  width: calc(100% - 700px);
  height: 650px;
  margin: 80px 46px 0 0;
  border: 1px solid ${props => props.theme.txtColor.selected};
  border-radius: 10px;
  overflow: hidden;
`;

export { ChatWrapper, SocketBox, FriendsBox };
