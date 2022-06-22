import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const TIMER_COLOR = keyframes`
	0% {
		color: #1CF610;
	}
	80% {
		color: #1CF610;
	}
	100% {
		color: #F70009;
	}
`;

const TimerBar = styled('div')<{
	requestAuth: boolean;
	timer: number;
}>`
	width: 120%;
	height: 50px;
	display: ${props => (!props.requestAuth ? 'none' : 'flex')};
	justify-content: center;
	align-items: center;
	animation: ${TIMER_COLOR} ${props => `${props.timer}s`} linear forwards;
`;

function Timer({
	requestAuth,
	timer,
	countDown,
}: {
	requestAuth: boolean;
	timer: number;
	countDown: () => void;
}) {
	useEffect(() => {
		const interval = setInterval(() => {
			if (timer === 0) {
				clearInterval(interval);
			} else {
				countDown();
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [timer, countDown]);
	const min = String(Math.floor(timer / 60)).padStart(2, '0');
	const sec = String(timer % 60).padStart(2, '0');
	return (
		<TimerBar requestAuth={requestAuth} timer={timer}>
			<span>
				{min === '00' && sec === '00'
					? 'The code is expired'
					: `${min} : ${sec}`}
			</span>
		</TimerBar>
	);
}
export default Timer;
