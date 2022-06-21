import { atom } from 'recoil';

const pwVisibleAtom = atom({
	key: 'show',
	default: false,
});

export default pwVisibleAtom;
