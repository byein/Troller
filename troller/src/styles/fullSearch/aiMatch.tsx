import styled from '@emotion/styled';
import { LARGE_FONTSIZE } from '../global/global';

const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled('div')`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    font-size: ${`${LARGE_FONTSIZE - 10}px`};
    color: ${props => props.theme.txtColor.primary};
  }
`;

const List = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 10px 0;
    border-radius: 10px;
    border: 1px solid white;
    color: white;
    .rank {
      aspect-ratio: 1 / 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .name {
      width: auto;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        padding: 0 20px;
      }
    }
    .tier {
      width: auto;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        padding: 0 20px;
      }
    }
    .ranking {
      width: auto;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        padding: 0 20px;
      }
    }
    .winrate {
      width: auto;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        padding: 0 20px;
      }
    }
  }
`;

const StatWrapper = styled('div')`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
  border-radius: 10px;
  border: 1px solid white;
  color: white;
  .rank {
    width: 16%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 0 0 10px;
  }
  .name {
    width: 16%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .tier {
    width: 16%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .ranking {
    width: 16%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .winRate {
    width: 16%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .trollPossibility {
    width: 16%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const StatHeader = styled('div')`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
  border-radius: 10px;
  border: 1px solid white;
  color: white;
  .rank {
    width: 16%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 0 0 10px;
  }
  .name {
    width: 16%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .tier {
    width: 16%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .ranking {
    width: 16%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .winRate {
    width: 16%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .trollPossibility {
    width: 16%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
export { Container, Header, List, StatWrapper, StatHeader };
