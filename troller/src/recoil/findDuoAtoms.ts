import { atom } from 'recoil';

const contentData = atom<
  {
    id: number;
    lolName: string;
    favorChampions: string[];
    favorPosition: string;
    tier: string;
    win: number;
    lose: number;
    kill: number;
    death: number;
    assist: number;
    validTime: number;
    mike: boolean;
    title: string;
    content: string;
  }[]
>({
  key: 'contentData',
  default: [],
});

export default contentData;
