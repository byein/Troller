import { atom } from 'recoil';

const userCount = atom({
  key: 'numberOfUser',
  default: 0,
});

export default userCount;
