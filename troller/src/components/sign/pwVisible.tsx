import styled from '@emotion/styled';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { TRANSITION } from '../../styles/global/global';

const VisibleBtn = styled('button')<{ show: boolean }>`
  position: absolute;
  top: 46%;
  left: 90%;
  ${TRANSITION}
  color: ${props =>
    !props.show ? props.theme.txtColor.primary : props.theme.validation.error};
  background-color: rgba(0, 0, 0, 0);
  border: none;
`;
function Visibility({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (prev: boolean) => void;
}) {
  const onClick = () => {
    setShow(!show);
  };
  return (
    <VisibleBtn show={show} type="button" className="show" onClick={onClick}>
      {!show ? <VisibilityIcon /> : <VisibilityOffIcon />}
    </VisibleBtn>
  );
}
export default Visibility;
