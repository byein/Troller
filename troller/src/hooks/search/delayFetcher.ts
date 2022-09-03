import { useApi } from '../axiosHooks';

const delay = (lolName: string, api: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const { data, status } = await useApi.get(`/api/search/user/${api}`, {
          params: { lolName },
        });
        if (status === 200) {
          console.log(lolName, api, '=>delay fetch applied!');
          console.log(data);
          resolve(data);
        }
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });
};

const personalData: any = {};
const delayFetcher = async (lolName: string) => {
  const apiList = ['info', 'most', 'line', 'gameRecord'];
  await delay(lolName, apiList[0])
    .then(data => {
      personalData.info = data;
    })
    .catch(e => {
      console.log(e);
    });
  await delay(lolName, apiList[1])
    .then(data => {
      personalData.most = data;
    })
    .catch(e => {
      console.log(e);
    });
  await delay(lolName, apiList[2])
    .then(data => {
      personalData.line = data;
    })
    .catch(e => {
      console.log(e);
    });
  await delay(lolName, apiList[3])
    .then(data => {
      personalData.gameRecord = data;
    })
    .catch(e => {
      console.log(e);
    });
  return { personalData };
};

export default delayFetcher;
