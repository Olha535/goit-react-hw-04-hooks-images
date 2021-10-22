import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import fetchImages from '../../services/api-service';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import Modal from '../Modal';
import Spinner from '../Loader';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alt, setAlt] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    async function getFetchImages() {
      try {
        setLoading(true);
        const images = await fetchImages(searchQuery, page);
        if (!images.length) {
          toast.info('Check the correctness of the input', {
            theme: 'colored',
          });
        }
        setImages(prevImages => [...prevImages, ...images]);
      } catch (error) {
        toast.error(error.message, { theme: 'colored' });
      } finally {
        page > 1 &&
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });

        setLoading(false);
      }
    }
    getFetchImages();
  }, [page, searchQuery]);

  const handleFormSubmit = query => {
    if (searchQuery === query) {
      return;
    }
    resetState();
    setSearchQuery(query);
  };

  const loadMoBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = (largeImageUrl, tags) => {
    setShowModal(largeImageUrl);
    setAlt(tags);
  };

  const toggleModal = () => {
    setShowModal(null);
  };

  const resetState = () => {
    setSearchQuery('');
    setPage(1);
    setImages([]);
    setShowModal(null);
    setLoading(false);
    setAlt(null);
  };

  return (
    <>
      <div className="App">
        <Searchbar onSubmit={handleFormSubmit} />
        <Spinner />
        {images.length > 1 && (
          <ImageGallery images={images} onImageClick={handleImageClick} />
        )}

        {showModal && (
          <Modal showModal={showModal} tags={alt} onClose={toggleModal} />
        )}
        {images.length > 0 && <Button onClick={loadMoBtn} />}
        {loading && <Spinner />}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

App.propTypes = {
  searchQuery: PropTypes.string,
};
