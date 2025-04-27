import css from "./LoadMoreBtn.module.css";
interface ILoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<ILoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className={css.moreBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
