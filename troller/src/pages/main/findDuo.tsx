import { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRecoilState, useRecoilValue } from 'recoil';
import Category from '../../components/findDuo/category';
import Contents from '../../components/findDuo/contents';
import CreateModal from '../../components/findDuo/createModal';
import { ContentsWrapper } from '../../styles/findDuo/contents';
import { FindDuoWrapper, MoreBtn } from '../../styles/findDuo/findDuo';
import {
  headData,
  filterParams,
  IHeadDataType,
} from '../../recoil/findDuoAtoms';
import { useApi } from '../../hooks/axiosHooks';

const limitNumber = 3 * 4;
function FindDuo() {
  const filterData = useRecoilValue(filterParams);
  const [head, setHead] = useRecoilState<IHeadDataType[]>(headData); // final data.
  const [load, setLoad] = useState(false);
  const [onoff, setOnoff] = useState(false);
  const [contentsNum, setContentsNum] = useState(limitNumber);
  useEffect(() => {
    // setLoad(true);
    // (async () => {
    //   const { status, data } = await useApi.get<HeadDataType>(
    //     'firstRenderAPI',
    //     {
    //       params: filterData,
    //     }
    //   );
    //   if (status === 200) {
    //     setHead(data);
    //     setLoad(false);
    //   }
    // })();
  }, [filterData, head]); // excute when first rendering, and filterData is changed by filter bar.
  return (
    <FindDuoWrapper>
      <Category setOnoff={setOnoff} onoff={onoff} />
      {onoff ? <CreateModal /> : null}
      <ContentsWrapper>
        {head?.slice(0, contentsNum).map(data => (
          <Contents data={data} load={load} key={data.id} />
        ))}
      </ContentsWrapper>
      <MoreBtn onClick={() => setContentsNum(prev => prev + limitNumber)}>
        <ExpandMoreIcon className="more" />
      </MoreBtn>
      {/* 이거 나중에 고쳐야함 */}
    </FindDuoWrapper>
  );
}
export default FindDuo;
