import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { IImage } from "../types";

interface IImageGalleryProps {
  images: IImage[];
  onImgClick: (img: IImage) => void;
}

function ImageGallery({ images, onImgClick }: IImageGalleryProps) {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard img={image} onClick={onImgClick} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
