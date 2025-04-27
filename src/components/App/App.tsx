import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./App.module.css";
import getPictures from "../fetch";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBox from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { IImage } from "../types";

function App() {
  const [pictures, setPictures] = useState<IImage[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState<IImage | null>(null);

  const searchHandler = async (newSearchTerm: string) => {
    try {
      setPictures([]);
      setSearchTerm(newSearchTerm);
      setPage(1);
      setTotalPages(1);
      setError(false);
      setLoading(true);

      const { results, total_pages } = await getPictures(newSearchTerm);
      setPictures(results);
      setTotalPages(total_pages);
      if (total_pages === 0) {
        toast(
          "Sorry, nothing has been found.\n Please, try to rephrase your request.",
          {
            duration: 4000,
            position: "top-right",
            icon: "⚠️",
          }
        );
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const loadMoreHandler = async () => {
    const nextPage = page + 1;
    if (nextPage > totalPages) return;
    try {
      setPage(nextPage);
      setLoading(true);
      const { results } = await getPictures(searchTerm, nextPage);
      setPictures((prev) => [...prev, ...results]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onImgClickHandler = (image: IImage): void => {
    if (!selectedImage) {
      setSelectedImage(image);
    }
  };

  const closeModalHandler = (): void => setSelectedImage(null);

  useEffect(() => {
    if (pictures.length > 0) {
      window.scrollBy({
        top: window.innerHeight / 2,
        behavior: "smooth",
      });
    }
  }, [pictures]);
  return (
    <>
      <SearchBox className={css.searchBox} onSearch={searchHandler} />
      {error && <ErrorMessage msg="Something went wrong. Try again!" />}
      {pictures.length > 0 && (
        <ImageGallery images={pictures} onImgClick={onImgClickHandler} />
      )}
      {loading && <Loader loading={loading} />}
      {pictures.length > 0 && page < totalPages && (
        <LoadMoreBtn onLoadMore={loadMoreHandler} />
      )}

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeModalHandler}
          imageSrc={selectedImage}
        />
      )}
      <Toaster />
    </>
  );
}

export default App;
