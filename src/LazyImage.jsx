import React, { useState, useEffect, useRef } from 'react';
import './LazyImage.css';

function LazyImage({ src, alt }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="lazy-image-container" ref={ref}>
      {visible ? (
        <img src={src} alt={alt} className="lazy-image" />
      ) : (
        <p className="loading-text">Cargando imagen...</p>
      )}
    </div>
  );
}

export default LazyImage;
