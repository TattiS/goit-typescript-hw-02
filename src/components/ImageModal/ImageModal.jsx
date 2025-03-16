import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      {imageSrc && (
        <div className={css.content}>
          <img
            src={imageSrc.urls.regular}
            alt={imageSrc.alt_description}
            className={css.image}
            onClick={(event) => event.stopPropagation()}
          />
          <div className={css.modalTxtContainer}>
            <p>Author: {imageSrc.user?.name || "Anonymous"}</p>
            <p>Likes: {imageSrc.likes || 0}</p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
