import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className={css.moreBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
