import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { preProcessFile } from 'typescript';
import { ModalWrapper, Modal, Welcome } from '../../styles/findDuo/createModal';

interface ICreateModalProps {
  title: string;
  content: string;
  validTime: number;
}

function CreateModal() {
  const [mike, setMike] = useState(true);
  const { register, handleSubmit } = useForm<ICreateModalProps>();
  const toggleMike = () => {
    setMike(prev => !prev);
  };
  return (
    <ModalWrapper>
      <Welcome>
        <span className="welcome">
          글을 등록하고 자신과 맞는 유저를 찾아보세요!
        </span>
      </Welcome>
      <Modal mike={mike}>
        <div className="header">
          <div className="validTime">
            <span className="title">유효시간:</span>
            <input type="number" className="time" />
            <span>분</span>
          </div>
          <div className="mike">
            <span className="title">마이크</span>
            <button type="button" className="switch" onClick={toggleMike}>
              <div className="toggle" />
            </button>
          </div>
          <button className="submit" type="submit">
            글 등록하기
          </button>
        </div>
        <div className="body">
          <input type="text" placeholder="Title" className="title" />
          <hr className="seperator" />
          <textarea placeholder="Content" className="content" />
        </div>
      </Modal>
    </ModalWrapper>
  );
}

export default CreateModal;
