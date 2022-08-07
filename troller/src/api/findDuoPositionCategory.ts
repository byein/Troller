import top_disabled from '../static/img/common/positions/top_disabled.png';
import mid_disabled from '../static/img/common/positions/mid_disabled.png';
import bottom_disabled from '../static/img/common/positions/bottom_disabled.png';
import jungle_disabled from '../static/img/common/positions/jungle_disabled.png';
import utility_disabled from '../static/img/common/positions/utility_disabled.png';
import top_focused from '../static/img/common/positions/top_focused.png';
import mid_focused from '../static/img/common/positions/mid_focused.png';
import bottom_focused from '../static/img/common/positions/bottom_focused.png';
import jungle_focused from '../static/img/common/positions/jungle_focused.png';
import utility_focused from '../static/img/common/positions/utility_focused.png';

const positions = [
  {
    disabled: top_disabled,
    focused: top_focused,
    favorPositionDesc: 'TOP',
  },
  {
    disabled: jungle_disabled,
    focused: jungle_focused,
    favorPositionDesc: 'JUNGLE',
  },
  {
    disabled: mid_disabled,
    focused: mid_focused,
    favorPositionDesc: 'MID',
  },
  {
    disabled: bottom_disabled,
    focused: bottom_focused,
    favorPositionDesc: 'BOTTOM',
  },
  {
    disabled: utility_disabled,
    focused: utility_focused,
    favorPositionDesc: 'UTILITY',
  },
];

export default positions;
