import styled from '@emotion/styled';

const RankWrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RankTab = styled('div')<{ pathname: string }>`
  width: 266px;
  height: 52px;
  display: flex;
  background: #eaeaea;
  margin-top: 10px;
  ul {
    display: flex;
  }
`;

const RankTabItem = styled('li')<{ isActive: boolean }>`
  box-sizing: border-box;

  width: 133px;
  height: 52px;
  margin: auto;
  color: ${props =>
    props.isActive ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.2)'};
  border-bottom: 1px solid
    ${props => (props.isActive ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.2)')};
  display: flex;
  justify-content: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export { RankWrapper, RankTab, RankTabItem };
