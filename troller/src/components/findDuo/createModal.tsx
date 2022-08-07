import { ModalWrapper, Modal, Welcome } from '../../styles/findDuo/createModal';

function CreateModal() {
  return (
    <ModalWrapper>
      <Welcome>
        <span className="welcome">
          글을 등록하고 자신과 맞는 유저를 찾아보세요!
        </span>
      </Welcome>
      <Modal />
    </ModalWrapper>
  );
}

export default CreateModal;
