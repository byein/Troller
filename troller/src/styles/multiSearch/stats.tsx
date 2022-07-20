import styled from '@emotion/styled';
import { BORDER_RADIUS, FLOAT_COLOR } from '../global/global';

const StatWrapper = styled('div')`
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0 0 0;
`;
const UserStat = styled('div')`
  width: 270px;
  height: 100%;
  color: ${props => props.theme.txtColor.primary};
  text-align: center;
  border-radius: ${`${BORDER_RADIUS}px`};
  ${FLOAT_COLOR};
  position: relative;
`;

export { StatWrapper, UserStat };
