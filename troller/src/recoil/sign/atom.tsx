import { atom } from 'recoil';

const timerAtom = atom({
  key: 'time',
  default: 0,
});
const pwVisibleAtom = atom({
  key: 'show',
  default: false,
});

export { timerAtom, pwVisibleAtom };
