import { useApi } from '../axiosHooks';

const delay = (lolName: string, api: string) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const { data, status } = await useApi.get(`/api/search/user/${api}`, {
          params: { lolName },
        });
        if (status === 200) {
          resolve(data);
        }
      } catch (e) {
        reject(e);
      }
    })();
  });
};

const delayFetcher = async (lolName: string) => {
  const personalData: any = {};
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
