import css from "./LoadMoreBtn.module.css";
interface ILoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn = ({ onLoadMore }: ILoadMoreBtnProps) => {
  return (
    <button onClick={onLoadMore} className={css.moreBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
