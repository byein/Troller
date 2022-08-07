import { useState } from 'react';
import { dummyRandomData } from '../../api/dummyData';
import Category from '../../components/findDuo/category';
import Contents from '../../components/findDuo/contents';
import CreateModal from '../../components/findDuo/createModal';
import { ContentsWrapper } from '../../styles/findDuo/contents';
import FindDuoWrapper from '../../styles/findDuo/findDuo';

function FindDuo() {
  const [onoff, setOnoff] = useState(false);
  return (
    <FindDuoWrapper>
      <Category setOnoff={setOnoff} onoff={onoff} />
      {onoff ? <CreateModal /> : null}
      <ContentsWrapper>
        {dummyRandomData.map(data => (
          <Contents userData={data} key={data.lolName} />
        ))}
      </ContentsWrapper>
    </FindDuoWrapper>
  );
}
export default FindDuo;
