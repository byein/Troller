import randomDataProducer from '../../api/dummyData';
import Category from '../../components/findDuo/category';
import Contents from '../../components/findDuo/contents';
import { ContentsWrapper } from '../../styles/findDuo/contents';
import FindDuoWrapper from '../../styles/findDuo/findDuo';

function FindDuo() {
  const { dummyRandomData } = randomDataProducer();
  return (
    <FindDuoWrapper>
      <Category />
      <ContentsWrapper>
        {dummyRandomData.map(data => (
          <Contents userData={data} key={data.lolName} />
        ))}
      </ContentsWrapper>
    </FindDuoWrapper>
  );
}
export default FindDuo;
