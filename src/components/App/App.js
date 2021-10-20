import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import fetchImages from '../../services/api-service';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import Modal from '../Modal';
import Spinner from '../Loader';

export default class App extends Component {
  static propTypes = {
    searchQuery: PropTypes.string,
  };

  state = {
    searchQuery: '',
    page: 1,
    images: [],
    showModal: null,
    loading: false,
    alt: null,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.searchQuery;
    const nextSearch = this.state.searchQuery;

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevSearch !== nextSearch || prevPage !== nextPage) {
      try {
        this.setState({ loading: true });
        const images = await fetchImages(nextSearch, nextPage);

        if (!images.length) {
          toast.info('Check the correctness of the input', {
            theme: 'colored',
          });
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
        }));
      } catch (error) {
        this.setState({ error });
        toast.error(this.state.error.message, { theme: 'colored' });
      } finally {
        if (prevState.images.length > 11) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
        this.setState({ loading: false });
      }
    }
  }

  handleFormSubmit = searchQuery => {
    if (this.state.searchQuery === searchQuery) {
      return;
    }
    this.resetState();
    this.setState({ searchQuery });
  };

  loadMoBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleImageClick = (largeImageUrl, tags) => {
    this.setState({
      showModal: largeImageUrl,
      alt: tags,
    });
  };

  toggleModal = () => {
    this.setState({
      showModal: null,
    });
  };

  resetState = () => {
    this.setState({
      searchQuery: '',
      page: 1,
      images: [],
      showModal: null,
      loading: false,
      alt: null,
      error: null,
    });
  };

  render() {
    const { images, alt, showModal, loading } = this.state;
    const { handleFormSubmit, handleImageClick, toggleModal, loadMoBtn } = this;

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
}
