import styled from '@emotion/styled';
import { useEffect } from 'react';
import { TRANSITION } from '../../styles/global/global';

const Clock = styled('div')<{ validTime: number }>`
  width: 120%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${TRANSITION}
  color: ${props =>
    props.validTime <= 30
      ? props.theme.validation.error
      : props.theme.validation.resolve};
`;

function Timer({
  validTime,
  setvalidTime,
  setrequestAuth,
}: {
  validTime: number;
  setvalidTime: (arg: number) => void;
  setrequestAuth: (arg: boolean) => void;
}) {
  useEffect(() => {
    let interval: any;
    if (validTime !== 0) {
      interval = setInterval(() => {
        setvalidTime(validTime - 1);
        if (validTime === 1) {
          clearInterval(interval);
          setrequestAuth(false);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [validTime, setvalidTime, setrequestAuth]);
  const min = String(Math.floor(validTime / 60)).padStart(2, '0');
  const sec = String(validTime % 60).padStart(2, '0');
  return (
    <Clock validTime={validTime}>
      <span>
        {min} : {sec}
      </span>
    </Clock>
  );
}
export default Timer;
