import React, {useRef, useEffect, useState} from 'react';

const ImageItem = (props) => {

    const { description, urls } = props.image;

    const imageRef = useRef();

    const[span, setSpan] = useState(0);

    useEffect(() =>{
        imageRef.current.addEventListener('load', setSpans);
    }, [] );

    const setSpans = () => {
        const height = imageRef.current.clientHeight;
    
        const spans = Math.ceil(height / 10);
    
        setSpan(spans);
      };

    return (
      <div style={{ gridRowEnd: `span ${span}` }}>
        <img ref={imageRef} alt={description} src={urls.regular} />
      </div>
    );
};

export default ImageItem;