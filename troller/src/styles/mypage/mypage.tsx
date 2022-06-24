import styled from '@emotion/styled';
import {
  BORDER_RADIUS,
  FLOAT_COLOR,
  TRANSPARENT_TXTCOLOR,
} from '../global/global';

const MyPageWrapper = styled('div')`
  ${FLOAT_COLOR};
  width: 750px;
  height: 692px;
  border-radius: ${`${BORDER_RADIUS}px`};
  margin: 149px 381px;
`;
const MyPageContainer = styled('div')<{ pathname: string }>``;

const UserInfoWrapper = styled('div')`
  width: 740px;
  height: 167px;
  display: flex;
  margintop: 30px;
  padding-top: 30px;
  padding-bottom: 24px;
  padding-left: 46px;
`;

const ProfileInfoWrapper = styled('div')`
  width: 200px;
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ProfileImageWrapper = styled('div')<{ url: string }>`
  width: 113px;
  height: 113px;
  border-radius: ${`${BORDER_RADIUS}px`};
  background: url(${props => props.url});
  background-size: cover;
  margin-right: 7px;
`;
const UserNickName = styled('div')`
  font-size: 1.8rem;
  font-weight: 'bold';
  color: white;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  text-align: center;
  color: #ffffff;
`;

const Tier = styled('div')`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  text-align: center;
  color: ${TRANSPARENT_TXTCOLOR};
`;

const UserInfoDiv = styled('div')`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const TierRecordWrapper = styled('div')`
  width: 95px;
  height: 113px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TierImageWrapper = styled('div')<{ url: string }>`
  width: 74px;
  height: 70px;
  background: url(${props => props.url});
  background-size: cover;
  margin-bottom: 10px;
`;

const Records = styled('div')`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
`;
const GraphTabWrapper = styled('div')<{ pathname: string }>`
  width: 750px;
  height: 42px;
  background: rgba(10, 31, 98, 0.5);
  display: flex;
  align-items: center;
  z-index: 1;
  span {
    margin: 15px;
    color: ${props => props.theme.txtColor.primary};
  }
  div {
    width: 100%;
    height: 100%;
    display: block;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      li {
        display: flex;
        width: 250px;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

const ProfileTab = styled('li')<{ isActive: boolean }>`
	margin: auto;
	color: ${props =>
    props.isActive ? props.theme.txtColor.primary : TRANSPARENT_TXTCOLOR};
	border-bottom:${props => (props.isActive ? '1px solid' : '0px solid')};
	 props.theme.txtColor.primary: ;
	};
`;

export {
  MyPageWrapper,
  MyPageContainer,
  UserInfoWrapper,
  ProfileImageWrapper,
  ProfileInfoWrapper,
  UserNickName,
  Tier,
  UserInfoDiv,
  TierRecordWrapper,
  TierImageWrapper,
  Records,
  GraphTabWrapper,
  ProfileTab,
};
