import { GuideBox } from '../../styles/multiSearch/main';

import stepOne from '../../static/img/multiSearch/step1.png';

function Guide() {
  return (
    <GuideBox>
      <div className="imgBox">
        <div className="img">
          <img src={stepOne} alt="guide" />
        </div>
        <div className="desc" />
      </div>
      <div className="imgBox">
        <div className="img">
          <img src={stepOne} alt="guide" />
        </div>
        <div className="desc" />
      </div>
      <div className="imgBox">
        <div className="img">
          <img src={stepOne} alt="guide" />
        </div>
        <div className="desc" />
      </div>
    </GuideBox>
  );
}
export default Guide;
