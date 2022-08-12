import { useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import TimerIcon from '@mui/icons-material/Timer';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { ModalWrapper, Modal, Welcome } from '../../styles/findDuo/createModal';
import { headData, IHeadDataType } from '../../recoil/findDuoAtoms';
import { useAccessApi } from '../../hooks/axiosHooks';

interface ICreateModalProps {
  title: string;
  content: string;
  validTime: number;
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
  const { register, handleSubmit } = useForm<ICreateModalProps>();
  const toggleMike = () => {
    setMike(prev => !prev);
  };
  const onSubmit = handleSubmit(async (registery: ICreateModalProps) => {
    const validTime = registery.validTime * 60;
    const request = {
      title: registery.title,
      content: registery.content,
      validTime,
      mike,
    };
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
          <div className="validTime">
            <span className="title">
              <TimerIcon />
            </span>
            <input
              type="number"
              min={3}
              max={15}
              className="time"
              {...register('validTime', { required: true, min: 5, max: 15 })}
            />
            <span> 분</span>
          </div>
          <div className="mike">
            <span className="title">{mike ? <MicIcon /> : <MicOffIcon />}</span>
            <div className="switch">
              <button className="toggle" type="button" onClick={toggleMike}>
                {/**/}
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
