import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ images, onImgClick }) {
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
