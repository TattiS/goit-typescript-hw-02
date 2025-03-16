import css from "./ImageCard.module.css";

function ImageCard({ img, onClick }) {
  return (
    <div className={css.imageContainer}>
      <img
        className={css.cardImg}
        src={img.urls.small}
        alt={img.alt_description}
        onClick={() => onClick(img)}
      />
    </div>
  );
}

export default ImageCard;
