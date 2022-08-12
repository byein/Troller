import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Category from '../../components/findDuo/category';
import Contents from '../../components/findDuo/contents';
import CreateModal from '../../components/findDuo/createModal';
import { ContentsWrapper } from '../../styles/findDuo/contents';
import FindDuoWrapper from '../../styles/findDuo/findDuo';
import {
  headData,
  filterParams,
  IHeadDataType,
} from '../../recoil/findDuoAtoms';
import { useApi } from '../../hooks/axiosHooks';

function FindDuo() {
  const filterData = useRecoilValue(filterParams);
  const [head, setHead] = useRecoilState<IHeadDataType[]>(headData); // final data.
  const [load, setLoad] = useState(false);
  const [onoff, setOnoff] = useState(false);
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
        {head?.map(data => (
          <Contents data={data} load={load} key={data.id} />
        ))}
      </ContentsWrapper>
    </FindDuoWrapper>
  );
}
export default FindDuo;
