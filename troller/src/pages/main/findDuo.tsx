import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { dummyRandomData } from '../../api/dummyData';
import Category from '../../components/findDuo/category';
import Contents from '../../components/findDuo/contents';
import CreateModal from '../../components/findDuo/createModal';
import { ContentsWrapper } from '../../styles/findDuo/contents';
import { FindDuoWrapper, MoreBtn } from '../../styles/findDuo/findDuo';

function FindDuo() {
  const limitNumber = 3 * 3;
  const [onoff, setOnoff] = useState(false);
  const [contentsNum, setContentsNum] = useState(limitNumber);
  return (
    <FindDuoWrapper>
      <Category setOnoff={setOnoff} onoff={onoff} />
      {onoff ? <CreateModal /> : null}
      <ContentsWrapper>
        {dummyRandomData.slice(0, contentsNum).map(data => (
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
