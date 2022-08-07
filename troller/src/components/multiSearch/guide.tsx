import { GuideBox } from '../../styles/multiSearch/main';
import guideSet from '../../api/multiSearchGuideSet';

function Guide() {
  return (
    <GuideBox>
      {guideSet.map(data => (
        <div className="imgBox" key={data.id}>
          <div className="img">
            <img src={data.step2} alt="guide" />
          </div>
          <div className="desc">{data.description}</div>
        </div>
      ))}
    </GuideBox>
  );
}
export default Guide;
