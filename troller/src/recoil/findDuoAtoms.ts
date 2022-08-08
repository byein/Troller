import { atom } from 'recoil';

const registerReqState = atom<
  {
    id: number | null;
    lolName: string | null;
    favorChampions: string[] | null;
    favorPosition: string | null;
    tier: string | null;
    win: number | null;
    lose: number | null;
    kill: number | null;
    death: number | null;
    assist: number | null;
    validTime: number | null;
    mike: boolean | null;
    title: string | null;
    content: string | null;
  }[]
>({
  key: 'registerReqState',
  default: [],
});

export default registerReqState;
