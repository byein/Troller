import champ1 from './dummyImg/champions/AatroxSquare.png';
import champ2 from './dummyImg/champions/EkkoSquare.png';
import champ3 from './dummyImg/champions/EliseSquare.png';
import bottom from './dummyImg/ranked-positions/bottom.png';
import top from './dummyImg/ranked-positions/top.png';
import jungle from './dummyImg/ranked-positions/jungle.png';
import bronze from './dummyImg/ranked-tier/brz.png';
import silver from './dummyImg/ranked-tier/slv.png';
import platinum from './dummyImg/ranked-tier/plt.png';

const dummyChamps = [champ1, champ2, champ3];
const dummyPositions = [top, bottom, jungle];
const dummyTiers = [bronze, silver, platinum];
const dummyNames = ['아이언포우', '에잇', '엘리스', '에브라', '에젤리스'];
const dummyWins = [23, 12, 10, 8, 7];
const dummyLoses = [10, 5, 3, 2, 1];
const dummyKills = [10, 5, 3, 2, 1];
const dummyDeaths = [10, 5, 3, 2, 1];
const dummyAssists = [10, 5, 3, 2, 1];
const dummyMike = [true, false];
const dummyValidTimes = [50, 60, 70, 80, 90];
const dummyKdaRate = [0.5, 0.6, 0.7, 0.8, 0.9];
const dummyWinRates = ['50%', '50%', '50%', '50%', '50%'];
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
  const randomPosition =
    dummyPositions[Math.floor(Math.random() * dummyPositions.length)];
  const randomTier = dummyTiers[Math.floor(Math.random() * dummyTiers.length)];
  const randomName = dummyNames[Math.floor(Math.random() * dummyNames.length)];
  const randomWin = dummyWins[Math.floor(Math.random() * dummyWins.length)];
  const randomLose = dummyLoses[Math.floor(Math.random() * dummyLoses.length)];
  const randomKill = dummyKills[Math.floor(Math.random() * dummyKills.length)];
  const randomDeath =
    dummyDeaths[Math.floor(Math.random() * dummyDeaths.length)];
  const randomAssist =
    dummyAssists[Math.floor(Math.random() * dummyAssists.length)];
  const randomMike = dummyMike[Math.floor(Math.random() * dummyMike.length)];
  const randomValidTime =
    dummyValidTimes[Math.floor(Math.random() * dummyValidTimes.length)];
  const randomKdaRate =
    dummyKdaRate[Math.floor(Math.random() * dummyKdaRate.length)];
  const randomWinRate =
    dummyWinRates[Math.floor(Math.random() * dummyWinRates.length)];
  const randomTitle =
    dummyTitles[Math.floor(Math.random() * dummyTitles.length)];
  const randomContent =
    dummyContents[Math.floor(Math.random() * dummyContents.length)];
  const dummyRandomData = [];
  for (let i = 0; i < 30; i += i) {
    dummyRandomData.push({
      lolName: randomName,
      favorPosition: randomPosition,
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
      kdaRate: randomKdaRate,
      winRate: randomWinRate,
    });
  }
  return { dummyRandomData };
}

export default randomDataProducer;
