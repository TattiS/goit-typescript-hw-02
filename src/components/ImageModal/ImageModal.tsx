import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { IImage } from "../types";

Modal.setAppElement("#root");
type IImageSrc = {
  urls: Pick<IImage["urls"], "regular">;
  alt_description?: IImage["alt_description"];
  user?: Pick<NonNullable<IImage["user"]>, "name">;
  likes?: IImage["likes"];
};

interface IImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: IImageSrc;
}

const ImageModal: React.FC<IImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.content}>
        <img
          src={imageSrc.urls.regular}
          alt={imageSrc.alt_description ?? "Image"}
          className={css.image}
          onClick={(event) => event.stopPropagation()}
        />
        <div className={css.modalTxtContainer}>
          <p>Author: {imageSrc.user?.name || "Anonymous"}</p>
          <p>Likes: {imageSrc.likes || 0}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
