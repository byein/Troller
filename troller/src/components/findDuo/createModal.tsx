import { useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import TimerIcon from '@mui/icons-material/Timer';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import {
  ModalWrapper,
  Modal,
  Welcome,
  SelectBtn,
} from '../../styles/findDuo/createModal';
import { headData, IHeadDataType } from '../../recoil/findDuoAtoms';
import { useAccessApi } from '../../hooks/axiosHooks';
import positions from '../../api/findDuoPositionCategory';

interface ICreateModalProps {
  title: string;
  content: string;
  position: 'TOP' | 'MID' | 'BOTTOM' | 'JUNGLE' | 'UTILITY';
}

function WelcomeBox() {
  const welcome = `Register Your Post & Find Your Duo`;
  return (
    <Welcome>
      <h2>{welcome}</h2>
      <h2>{welcome}</h2>
    </Welcome>
  );
}

function CreateModal() {
  const setResponseData = useSetRecoilState(headData);
  const [mike, setMike] = useState(false);
  const [positionData, setPositionData] = useState('');
  const { register, handleSubmit } = useForm<ICreateModalProps>();
  const toggleMike = () => {
    setMike(prev => !prev);
  };
  const [isSelected, setIsSelected] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const selectPosition = (index: number) => {
    const newIsSelected = [...isSelected];
    for (let i = 0; i < newIsSelected.length; i += 1) {
      if (newIsSelected[i]) {
        newIsSelected[i] = false;
        setIsSelected(newIsSelected);
      }
    }
    newIsSelected[index] = true;
    setIsSelected(newIsSelected);
    setPositionData(positions[index].favorPositionDesc);
  };
  const onSubmit = handleSubmit(async (registery: ICreateModalProps) => {
    const request = {
      title: registery.title,
      content: registery.content,
      mike,
      positionData,
    };
    console.table(request);
    // const { status, data } = await useAccessApi.post<IHeadDataType[]>(
    //   'registerNewContentAPI',
    //   request
    // );
    // if (status === 200) {
    //   setResponseData(data);
    //   window.location.reload();
    // }
  });
  return (
    <ModalWrapper onSubmit={onSubmit}>
      <WelcomeBox />
      <Modal mike={mike}>
        <div className="header">
          <div className="positions">
            {positions.map((position, index) => {
              return (
                <SelectBtn
                  isSelected={isSelected[index]}
                  key={position.favorPositionDesc}
                  className="position"
                  type="button"
                  onClick={e => {
                    selectPosition(index);
                  }}
                >
                  <img
                    className="positionImg"
                    src={
                      isSelected[index] ? position.focused : position.disabled
                    }
                    alt="position"
                  />
                </SelectBtn>
              );
            })}
          </div>
          <div className="mike">
            <span className="title">{mike ? <MicIcon /> : <MicOffIcon />}</span>
            <div className="switch">
              <button className="toggle" type="button" onClick={toggleMike}>
                img
              </button>
            </div>
          </div>
          <button className="submit" type="submit">
            글 등록하기
          </button>
        </div>
        <div className="body">
          <input
            type="text"
            placeholder="Title: 1~15자"
            className="title"
            {...register('title', {
              required: true,
              minLength: 1,
              maxLength: 15,
            })}
          />
          <hr className="seperator" />
          <textarea
            placeholder="Content: 1~60자"
            className="content"
            {...register('content', {
              required: true,
              minLength: 1,
              maxLength: 60,
            })}
          />
        </div>
      </Modal>
    </ModalWrapper>
  );
}

export default CreateModal;