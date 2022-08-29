import amu from './dummyImg/champions/amu.jpg';
import anivia from './dummyImg/champions/anivia.jpg';
import ari from './dummyImg/champions/ari.jpg';
import bard from './dummyImg/champions/bard.jpg';
import barum from './dummyImg/champions/barum.jpg';
import top from '../static/img/common/positions/top_focused.png';
import mid from '../static/img/common/positions/mid_focused.png';
import bottom from '../static/img/common/positions/bottom_focused.png';
import jungle from '../static/img/common/positions/jungle_focused.png';
import utility from '../static/img/common/positions/utility_focused.png';
import bronze from './dummyImg/ranked-tier/bronze.jpg';
import silver from './dummyImg/ranked-tier/silver.jpg';
import gold from './dummyImg/ranked-tier/gold.jpg';

const dummyChamps = [amu, anivia, ari, bard, barum];
const dummyPositions = [top, mid, bottom, jungle, utility];
const dummyTiers = [bronze, silver, gold];
const dummyNames = ['Croco'];
const dummyWins = [23, 12, 10, 8, 7];
const dummyLoses = [10, 5, 3, 2, 1];
const dummyKills = [10, 5, 3, 2, 1];
const dummyDeaths = [10, 5, 3, 2, 1];
const dummyAssists = [10, 5, 3, 2, 1];
const dummyMike = [true, false];
const dummyValidTimes = [50, 60, 70, 80, 90];
const dummyTitles = [
  '나랑 할 사람',
  '아이언포우임',
  '에잇 싯8',
  '엘리스 구하러 갈사람',
  '에젤리스가 젤조아',
];
const dummyContents = [
  '나랑 칼바람 하러 갈사람? kda 20이상만 받는다',
  '아이언포우 구하러 갈사람?',
  'AI 돌리고 채팅 걸어라',
  '아 피곤피곤 해',
  '승률 왤케들 낮아요',
];

const randomChampsProducer = () => {
  const randomChamps = [];
  for (let i = 0; i < dummyChamps.length; i += i) {
    randomChamps.push(
      dummyChamps[Math.floor(Math.random() * dummyChamps.length)]
    );
  }
  const randomChampions = randomChamps.slice(0, 3);
  return randomChampions;
};
const randomPosition =
  dummyPositions[Math.floor(Math.random() * dummyPositions.length)];
const randomTier = dummyTiers[Math.floor(Math.random() * dummyTiers.length)];
const randomName = dummyNames[Math.floor(Math.random() * dummyNames.length)];
const randomWin = dummyWins[Math.floor(Math.random() * dummyWins.length)];
const randomLose = dummyLoses[Math.floor(Math.random() * dummyLoses.length)];
const randomKill = dummyKills[Math.floor(Math.random() * dummyKills.length)];
const randomDeath = dummyDeaths[Math.floor(Math.random() * dummyDeaths.length)];
const randomAssist =
  dummyAssists[Math.floor(Math.random() * dummyAssists.length)];
const randomMike = dummyMike[Math.floor(Math.random() * dummyMike.length)];
const randomValidTime =
  dummyValidTimes[Math.floor(Math.random() * dummyValidTimes.length)];
const randomTitle = dummyTitles[Math.floor(Math.random() * dummyTitles.length)];
const randomContent =
  dummyContents[Math.floor(Math.random() * dummyContents.length)];

type HeadDataType = {
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
}[];

const dummyRandomData: HeadDataType = [
  {
    id: 1,
    lolName: randomName,
    favorChampions: dummyChamps.slice(0, 3),
    favorPosition: randomPosition,
    tier: randomTier,
    win: randomWin,
    lose: randomLose,
    kill: randomKill,
    death: randomDeath,
    assist: randomAssist,
    validTime: randomValidTime,
    mike: randomMike,
    title: randomTitle,
    content: randomContent,
  },
  {
    id: 2,
    lolName: randomName,
    favorChampions: dummyChamps.slice(0, 3),
    favorPosition: randomPosition,
    tier: randomTier,
    win: randomWin,
    lose: randomLose,
    kill: randomKill,
    death: randomDeath,
    assist: randomAssist,
    validTime: randomValidTime,
    mike: randomMike,
    title: randomTitle,
    content: randomContent,
  },
  {
    id: 3,
    lolName: randomName,
    favorChampions: dummyChamps.slice(0, 3),
    favorPosition: randomPosition,
    tier: randomTier,
    win: randomWin,
    lose: randomLose,
    kill: randomKill,
    death: randomDeath,
    assist: randomAssist,
    validTime: randomValidTime,
    mike: randomMike,
    title: randomTitle,
    content: randomContent,
  },
  {
    id: 4,
    lolName: randomName,
    favorChampions: dummyChamps.slice(0, 3),
    favorPosition: randomPosition,
    tier: randomTier,
    win: randomWin,
    lose: randomLose,
    kill: randomKill,
    death: randomDeath,
    assist: randomAssist,
    validTime: randomValidTime,
    mike: randomMike,
    title: randomTitle,
    content: randomContent,
  },
  {
    id: 5,
    lolName: randomName,
    favorChampions: dummyChamps.slice(0, 3),
    favorPosition: randomPosition,
    tier: randomTier,
    win: randomWin,
    lose: randomLose,
    kill: randomKill,
    death: randomDeath,
    assist: randomAssist,
    validTime: randomValidTime,
    mike: randomMike,
    title: randomTitle,
    content: randomContent,
  },
  {
    id: 6,
    lolName: randomName,
    favorChampions: dummyChamps.slice(0, 3),
    favorPosition: randomPosition,
    tier: randomTier,
    win: randomWin,
    lose: randomLose,
    kill: randomKill,
    death: randomDeath,
    assist: randomAssist,
    validTime: randomValidTime,
    mike: randomMike,
    title: randomTitle,
    content: randomContent,
  },
  {
    id: 7,
    lolName: randomName,
    favorChampions: dummyChamps.slice(0, 3),
    favorPosition: randomPosition,
    tier: randomTier,
    win: randomWin,
    lose: randomLose,
    kill: randomKill,
    death: randomDeath,
    assist: randomAssist,
    validTime: randomValidTime,
    mike: randomMike,
    title: randomTitle,
    content: randomContent,
  },
  {
    id: 8,
    lolName: randomName,
    favorChampions: dummyChamps.slice(0, 3),
    favorPosition: randomPosition,
    tier: randomTier,
    win: randomWin,
    lose: randomLose,
    kill: randomKill,
    death: randomDeath,
    assist: randomAssist,
    validTime: randomValidTime,
    mike: randomMike,
    title: randomTitle,
    content: randomContent,
  },
  {
    id: 9,
    lolName: randomName,
    favorChampions: dummyChamps.slice(0, 3),
    favorPosition: randomPosition,
    tier: randomTier,
    win: randomWin,
    lose: randomLose,
    kill: randomKill,
    death: randomDeath,
    assist: randomAssist,
    validTime: randomValidTime,
    mike: randomMike,
    title: randomTitle,
    content: randomContent,
  },
  {
    id: 10,
    lolName: randomName,
    favorChampions: dummyChamps.slice(0, 3),
    favorPosition: randomPosition,
    tier: randomTier,
    win: randomWin,
    lose: randomLose,
    kill: randomKill,
    death: randomDeath,
    assist: randomAssist,
    validTime: randomValidTime,
    mike: randomMike,
    title: randomTitle,
    content: randomContent,
  },
  {
    id: 11,
    lolName: randomName,
    favorChampions: dummyChamps.slice(0, 3),
    favorPosition: randomPosition,
    tier: randomTier,
    win: randomWin,
    lose: randomLose,
    kill: randomKill,
    death: randomDeath,
    assist: randomAssist,
    validTime: randomValidTime,
    mike: randomMike,
    title: randomTitle,
    content: randomContent,
  },
  {
    id: 12,
    lolName: randomName,
    favorChampions: dummyChamps.slice(0, 3),
    favorPosition: randomPosition,
    tier: randomTier,
    win: randomWin,
    lose: randomLose,
    kill: randomKill,
    death: randomDeath,
    assist: randomAssist,
    validTime: randomValidTime,
    mike: randomMike,
    title: randomTitle,
    content: randomContent,
  },
  {
    id: 13,
    lolName: randomName,
    favorChampions: dummyChamps.slice(0, 3),
    favorPosition: randomPosition,
    tier: randomTier,
    win: randomWin,
    lose: randomLose,
    kill: randomKill,
    death: randomDeath,
    assist: randomAssist,
    validTime: randomValidTime,
    mike: randomMike,
    title: randomTitle,
    content: randomContent,
  },
  {
    id: 14,
    lolName: randomName,
    favorChampions: dummyChamps.slice(0, 3),
    favorPosition: randomPosition,
    tier: randomTier,
    win: randomWin,
    lose: randomLose,
    kill: randomKill,
    death: randomDeath,
    assist: randomAssist,
    validTime: randomValidTime,
    mike: randomMike,
    title: randomTitle,
    content: randomContent,
  },
  {
    id: 15,
    lolName: randomName,
    favorChampions: dummyChamps.slice(0, 3),
    favorPosition: randomPosition,
    tier: randomTier,
    win: randomWin,
    lose: randomLose,
    kill: randomKill,
    death: randomDeath,
    assist: randomAssist,
    validTime: randomValidTime,
    mike: randomMike,
    title: randomTitle,
    content: randomContent,
  },
];

/// //////////////////////////////////////////////////////////////////////////////

function favorChampionProducer() {
  const randomChamp =
    dummyChamps[Math.floor(Math.random() * dummyChamps.length)];
  const randomChamps = [];
  for (let i = 0; i < dummyChamps.length; i += i) {
    randomChamps.push(randomChamp);
  }
  return { randomChamps };
}

function randomDataProducer() {
  const { randomChamps } = favorChampionProducer();
  const dummyRandomDatas = [];
  for (let i = 0; i < 30; i += i) {
    dummyRandomDatas.push({
      lolName: randomName,
      favorPositions: randomPosition,
      favorChampion: randomChamps,
      tier: randomTier,
      win: randomWin,
      lose: randomLose,
      kill: randomKill,
      death: randomDeath,
      assist: randomAssist,
      validTime: randomValidTime,
      mike: randomMike,
      title: randomTitle,
      content: randomContent,
    });
  }
  return { dummyRandomDatas };
}

export { dummyRandomData, randomDataProducer };
