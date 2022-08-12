import styled from '@emotion/styled';
import { BORDER_RADIUS, BOX_SHADOW, TRANSITION } from '../global/global';

const FindDuoWrapper = styled('div')`
  width: 1410px;
  height: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const MoreBtn = styled('button')`
  width: 1410px;
  height: 50px;
  margin: 0 0 15px 0;
  border: none;
  border-radius: ${`${BORDER_RADIUS}px`};
  background-color: ${props => props.theme.bgColor.light};
  cursor: pointer;
  ${BOX_SHADOW}
  ${TRANSITION}
  z-index: 1;
  &:hover {
    background-color: ${props => props.theme.btnColor.primary};
    color: white;
  }
`;

export { FindDuoWrapper, MoreBtn };
