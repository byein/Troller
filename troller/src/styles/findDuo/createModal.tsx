import styled from '@emotion/styled';
import { BORDER_RADIUS } from '../global/global';

const ModalWrapper = styled('form')`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 100%;
  height: 250px;
  margin: 0 0 15px 0;
  border-radius: ${`${BORDER_RADIUS - 5}px`};
  background-color: ${props => props.theme.bgColor.dark};
`;

export default ModalWrapper;
