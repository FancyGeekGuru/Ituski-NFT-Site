import { useState, useRef, useEffect } from 'react';

import lazyimage_src from '../../assets/img/loading.gif';

const LazyImage = ({ src, alt, loaderIcon }) => {
  const loaderSrc = loaderIcon
      ? loaderIcon
      : "https://www.eliananunes.com/images/lazy_loader.gif",
    [imgSrc, setImgSrc] = useState(loaderSrc),
    imageRef = useRef(null),
    loader = new Image();

  useEffect(() => {
    //loader is used to run lazyLoad method on load (note: if we removed the loader functionality the lazyLoad function will be triggered only on scroll)
    loader.src = "https://www.eliananunes.com/images/lazy_loader.gif";   
    loader.addEventListener("load", checkImage);

    // add the lazyLoad method onscroll
    window.onscroll = window.addEventListener("scroll", lazyLoad);

    return () => {
      // remove the lazyLoad method
      window.removeEventListener("scroll", lazyLoad);
    };
  }, []);

  const checkImage = () => {
    if (loader.complete) {
      lazyLoad();
    }
  };

  const lazyLoad = () => {
    if (elementInViewPort()) {
      setImgSrc(src);
    }
  };

  const elementInViewPort = () => {
    // getBoundingClientRect => returns the size of the given element and the position of it in relation to the view port
    const clientRect = imageRef.current.getBoundingClientRect();

    return (
      clientRect.top >= 0 &&
      clientRect.left >= 0 &&
      clientRect.bottom - 100 <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      clientRect.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return <img ref={imageRef} src={imgSrc} alt={alt}  width={'100%'} />;
};



const LazyLoadingImage = ({src,alt}) => {
  return (
    <div className="container">
        <LazyImage
          alt={alt}
          src={src}
          loaderIcon={lazyimage_src}
        />
    </div>
  );
};

export default LazyLoadingImage;