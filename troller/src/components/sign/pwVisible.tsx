import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { pwVisibleAtom } from '../../recoil/sign/atom';
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
function Visibility() {
	const [show, setShow] = useRecoilState(pwVisibleAtom);
	return (
		<VisibleBtn
			show={show}
			type="button"
			className="show"
			onClick={() => {
				setShow(prev => !prev);
			}}
		>
			{!show ? <VisibilityIcon /> : <VisibilityOffIcon />}
		</VisibleBtn>
	);
}
export default Visibility;
