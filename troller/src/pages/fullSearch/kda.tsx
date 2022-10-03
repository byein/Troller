import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { ChartWrapper, OutletWrapper } from '../../styles/fullSearch/kda';
import { UserNickName } from '../../styles/fullSearch/userInfo';

function KDA() {
  const url = '';
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
  const getTrollData = () => {
    axios
      .get(url)
      .then(async response => {
        const data = await response.data;
        setTrollData(data);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  };

  const dummyData = {
    options: {
      chart: {
        id: 'tier',
      },
      yaxis: {
        labels: {
          style: {
            colors: ['white', 'white', 'white', 'white', 'white'],
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
        ],
      },
    ],
  };
  useEffect(() => {
    getTrollData();
  }, []);
  return (
    <OutletWrapper>
      <UserNickName>
        Troll_Possibility: {trollData.trollPossibility}%
      </UserNickName>
      <ChartWrapper>
        <Chart
          options={dummyData.options}
          series={dummyData.series}
          type="line"
          width="500"
        />
      </ChartWrapper>
    </OutletWrapper>
  );
}

export default KDA;
