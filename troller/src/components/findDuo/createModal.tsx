import { useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import TimerIcon from '@mui/icons-material/Timer';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { ModalWrapper, Modal, Welcome } from '../../styles/findDuo/createModal';
import { useAccessApi } from '../../hooks/axiosHooks';
import contentData from '../../recoil/findDuoAtoms';

interface ICreateModalProps {
  title: string;
  content: string;
  validTime: number;
}
type IResponseDataType = {
  id: number;
  lolName: string;
  favorChampions: string[];
  favorPosition: string;
  tier: string;
  win: number;
  lose: number;
  kill: number;
  death: number;
  assist: number;
  validTime: number;
  mike: boolean;
  title: string;
  content: string;
}[];

function WelcomeBox() {
  const welcome = `Register Your Post & Find Your Duo`;
  return (
    <Welcome>
      <h2>{welcome}</h2>
      <h2>{welcome}</h2>
    </Welcome>
  );
}

function CreateModal({ setOnoff }: { setOnoff: (arg: boolean) => void }) {
  const setResData = useSetRecoilState(contentData);
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
    console.table(request);
    // const { status, data } = await useAccessApi.post<IResponseDataType>(
    //   'exampleAPI',
    //   request
    // );
    // if (status === 200) {
    //   setResData(data);
    //   setOnoff(false);
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
