import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useParams } from 'react-router-dom';
import { useApi } from '../../hooks/axiosHooks';
import delayFetcher from '../../hooks/search/delayFetcher';
import { ChartWrapper, OutletWrapper } from '../../styles/fullSearch/kda';
import { UserNickName } from '../../styles/fullSearch/userInfo';
import { ResultProps } from './fullSearch';

function KDA() {
  const { userId } = useParams();
  const [resultData, setResultData] = useState<ResultProps>();
  useEffect(() => {
    (async () => {
      if (userId) {
        /**
         * @description 기존에 userId를 저장하던 state의 setter를 사용하지 않는 것 같아 삭제하고 useParams값을 그대로 사용
         * @description dependency에 userId를 넣어주지 않아 무한 렌더링이 발생한 것 같음
         */
        const { personalData } = await delayFetcher(userId);
        setResultData(personalData);
      }
    })();
  }, [userId]);
  const url = '/api/search/user/troll';
  const [trollData, setTrollData] = useState({
    trollPossibility: '',
    ironAvgTroll: '',
    bronzeAvgTroll: '',
    silverAvgTroll: '',
    goldAvgTroll: '',
    platinumAvgTroll: '',
    diamondAvgTroll: '',
    masterAvgTroll: '',
    grandMasterAvgTroll: '',
    challengerAvgTroll: '',
  });
  const trollAvgData = {
    options: {
      chart: {
        id: 'tier',
      },
      yaxis: {
        labels: {
          style: {
            colors: ['white', 'white', 'white', 'white', 'white'],
          },
          formatter: (val: number) => {
            return `${val.toFixed(3)}%`;
          },
        },
      },
      xaxis: {
        categories: [
          'IRON',
          'BRONZE',
          'SILVER',
          'GOLD',
          'PLATINUM',
          'DIAMOND',
          'MASTER',
          'GRANDMASTER',
          'CHALLENGER',
        ],
        labels: {
          style: {
            colors: [
              'white',
              'white',
              'white',
              'white',
              'white',
              'white',
              'white',
              'white',
              'white',
            ],
          },
        },
      },
      fill: {
        type: 'gradient',
      },
    },
    series: [
      {
        name: 'troll_possibility',
        data: [
          Number(trollData.ironAvgTroll),
          Number(trollData.bronzeAvgTroll),
          Number(trollData.silverAvgTroll),
          Number(trollData.goldAvgTroll),
          Number(trollData.platinumAvgTroll),
          Number(trollData.diamondAvgTroll),
          Number(trollData.masterAvgTroll),
          Number(trollData.grandMasterAvgTroll),
          Number(trollData.challengerAvgTroll),
        ],
      },
    ],
  };
  useEffect(() => {
    const getTrollData = async () => {
      const { data } = await useApi.get(url, {
        params: {
          lolName: resultData?.info?.lolName,
        },
      });
      setTrollData(data);
    };
    getTrollData();
  }, [resultData?.info?.lolName]);
  return (
    <OutletWrapper>
      <UserNickName>
        Troll_Possibility: {Number(trollData.trollPossibility).toFixed(3)}%
      </UserNickName>
      <ChartWrapper>
        <Chart
          options={trollAvgData.options}
          series={trollAvgData.series}
          type="line"
          width="500"
        />
      </ChartWrapper>
    </OutletWrapper>
  );
}

export default KDA;
