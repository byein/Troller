import styled from '@emotion/styled';

const TextArea = styled('div')`
  width: 100%;
  height: calc(100% - 70px);
  background-color: rgba(0, 0, 0, 0.3);
  overflow: scroll;
  padding: 10px;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
  .opponent {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin: 5px 0;
    .person {
      width: auto;
      height: 100%;
      border-radius: 10px;
      background-color: #fae100;
      padding: 10px;
      .msg {
        font-size: 18px;
      }
    }
    .date {
      font-size: 12px;
      color: white;
      margin: 0 0 2px 5px;
    }
  }
  .me {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 5px 0;
    .person {
      width: auto;
      height: 100%;
      border-radius: 10px;
      background-color: #fae100;
      padding: 10px;
      .msg {
        font-size: 18px;
      }
    }
    .date {
      font-size: 12px;
      color: white;
      margin: 0 5px 2px 0;
    }
  }
`;

export default TextArea;
