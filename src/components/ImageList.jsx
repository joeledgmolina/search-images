import './ImageList.css';
import React from 'react';
import ImageItem from './ImageItem';

const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageItem key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
