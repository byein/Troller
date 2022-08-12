import { atom } from 'recoil';
import { dummyRandomData } from '../api/dummyData';

export interface IHeadDataType {
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
}

const headData = atom<IHeadDataType[]>({
  key: 'headData',
  default: dummyRandomData, // 더미 데이터를 사용하기 위해 설정 => 나중에 []로 바꿔야함
});

const filterParams = atom({
  key: 'filterParams',
  default: {
    position: 'All' || 'TOP' || 'MID' || 'BOTTOM' || 'JUNGLE' || 'UTILITY',
    rate: 'TIME' || 'KDA' || 'WIN',
  },
});

export { headData, filterParams };
