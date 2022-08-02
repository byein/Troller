import { isTemplateExpression } from 'typescript';
import temporalData from '../../api/dummyData';
import Category from '../../components/findDuo/category';
import Contents from '../../components/findDuo/contents';
import { ContentsWrapper } from '../../styles/findDuo/contents';
import FindDuoWrapper from '../../styles/findDuo/findDuo';

function FindDuo() {
  return (
    <FindDuoWrapper>
      <Category />
      <ContentsWrapper>
        {temporalData.map(data => (
          <Contents userData={data} key={data.lolName} />
        ))}
      </ContentsWrapper>
    </FindDuoWrapper>
  );
}
export default FindDuo;
