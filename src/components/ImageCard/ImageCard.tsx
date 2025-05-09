import css from "./ImageCard.module.css";
import { IImage } from "../types";

interface IImageCardProps {
  img: IImage;
  onClick: (img: IImage) => void;
}

const ImageCard: React.FC<IImageCardProps> = ({ img, onClick }) => {
  return (
    <div className={css.imageContainer}>
      <img
        className={css.cardImg}
        src={img.urls.small}
        alt={img.alt_description ?? "Image"}
        onClick={() => onClick(img)}
      />
    </div>
  );
};

export default ImageCard;
