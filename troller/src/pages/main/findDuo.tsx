import { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRecoilValue } from 'recoil';
import { dummyRandomData } from '../../api/dummyData';
import Category from '../../components/findDuo/category';
import Contents from '../../components/findDuo/contents';
import CreateModal from '../../components/findDuo/createModal';
import { ContentsWrapper } from '../../styles/findDuo/contents';
import { FindDuoWrapper, MoreBtn } from '../../styles/findDuo/findDuo';
import registerReqState from '../../recoil/findDuoAtoms';
import { useApi } from '../../hooks/axiosHooks';

type HeadDataType = {
  id: number;
  lolName: string;
  favorPositions: string;
  favorChampion: string[];
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

const limitNumber = 3 * 4;
function FindDuo() {
  const [headData, setHeadData] = useState<HeadDataType>(dummyRandomData); // 나중에 []로 바꿔야함
  const [onoff, setOnoff] = useState(false);
  const [contentsNum, setContentsNum] = useState(limitNumber);
  const findDuoData = useRecoilValue(registerReqState);
  useEffect(() => {
    (async () => {
      const { status, data } = await useApi.get<HeadDataType>('exampleAPI');
      if (status === 200) {
        setHeadData(data);
      }
    })();
  }, [findDuoData.length, findDuoData]);
  return (
    <FindDuoWrapper>
      <Category setOnoff={setOnoff} onoff={onoff} />
      {onoff ? <CreateModal setOnoff={setOnoff} /> : null}
      <ContentsWrapper>
        {headData?.slice(0, contentsNum).map(data => (
          <Contents userData={data} key={data.lolName} />
        ))}
      </ContentsWrapper>
      <MoreBtn onClick={() => setContentsNum(prev => prev + limitNumber)}>
        <ExpandMoreIcon className="more" />
      </MoreBtn>
    </FindDuoWrapper>
  );
}
export default FindDuo;
