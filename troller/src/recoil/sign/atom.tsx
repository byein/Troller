import { atom } from 'recoil';

const timerAtom = atom({
	key: 'timer',
	default: 0,
});

export default timerAtom;
