import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { IImage } from "../types";

interface IImageGalleryProps {
  images: IImage[];
  onImgClick: (img: IImage) => void;
}
const ImageGallery: React.FC<IImageGalleryProps> = ({ images, onImgClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard img={image} onClick={onImgClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
