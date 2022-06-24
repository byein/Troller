import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { timerAtom } from '../../recoil/sign/atom';

const TimerBar = styled('div')<{
  requestAuth: boolean;
  timer: number;
  time: number;
}>`
  width: ${props => `${props.time - props.timer}px`};
  height: 2px;
  margin-bottom: ${props => (!props.requestAuth ? 0 : '10px')};
  display: ${props => (!props.requestAuth ? 'none' : 'block')};
  background-color: ${props =>
    props.timer < props.time / 2
      ? props.theme.validation.resolve
      : props.theme.validation.error};
`;

function Timer({ requestAuth, time }: { requestAuth: boolean; time: number }) {
  const [timer, setTimer] = useRecoilState(timerAtom);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === time) {
        clearInterval(interval);
      } else {
        setTimer(prev => prev + 0.1);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [time, timer, setTimer]);
  return <TimerBar requestAuth={requestAuth} timer={timer} time={time} />;
}
export default Timer;
