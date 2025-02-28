// src/components/Slideshow.js
'use client';

import { useState, useEffect } from 'react';

const Slideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/images/slide1.jpg', // Replace with your image paths in public directory
    '/images/slide2.jpg',
    '/images/slide3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [images.length]);

  return (
    <div className="relative h-96 overflow-hidden">
      <img
        src={images[currentImage]}
        alt={`Slide ${currentImage + 1}`}
        className="absolute w-full h-full object-cover transition-opacity duration-500"
        style={{ opacity: 1 }} // Use inline style to force opacity
      />
    </div>
  );
};

export default Slideshow;