import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ image, tags, onImageClick }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={image}
        alt={tags}
        onClick={onImageClick}
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  tags: PropTypes.string,
  image: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
