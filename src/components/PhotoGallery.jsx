import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { Card, CardMedia, Typography, IconButton, Box } from '@mui/material';
import { ImageNotSupported, Close, ChevronLeft, ChevronRight } from '@mui/icons-material';
import img1 from '../assets/images/banner4.jpeg';
import img2 from '../assets/images/banner5.png';
import img3 from '../assets/images/banner6.jpeg';
import img4 from '../assets/images/banner1.jpeg';
import img5 from '../assets/images/banner7.jpeg';
import img6 from '../assets/images/banner8.jpeg';

const PhotoGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [imageError, setImageError] = useState({});

  useEffect(() => {
    document.title = 'Photo Gallery | OM Astro Solution';
  }, []);

  const photos = [
    { src: img1, alt: 'Gallery 1', caption: 'Explore the cosmos' },
    { src: img2, alt: 'Gallery 2', caption: 'Stellar beauty' },
    { src: img3, alt: 'Gallery 3', caption: 'Mystic horizons' },
    { src: img4, alt: 'Gallery 4', caption: 'Celestial wonders' },
    { src: img5, alt: 'Gallery 5', caption: 'Galactic dreams' },
    { src: img6, alt: 'Gallery 6', caption: 'Infinite skies' },
  ];

  useEffect(() => {
    photos.forEach((photo, index) => {
      console.log(`Image ${index + 1} path:`, photo.src);
    });
  }, []);

  const openLightbox = (index) => {
    console.log('Opening lightbox for image index:', index, 'src:', photos[index].src);
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    console.log('Closing lightbox');
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedImageIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const handleImageError = (index) => {
    console.error(`Failed to load image at index ${index}: ${photos[index].src}`);
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Breadcrumb title="Photo Gallery" />

      {/* Gallery Section */}
      <div className="py-16 md:py-24" style={{ marginBottom: "10px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-16 animate-slide-in"
          >
            Our Photo Gallery
          </Typography>

          {photos.length === 0 ? (
            <Box
              className="flex flex-col items-center justify-center h-96 bg-white rounded-xl shadow-lg animate-slide-in"
            >
              <ImageNotSupported className="text-gray-400 !text-8xl mb-4" />
              <Typography variant="h6" className="text-gray-600">
                No photos available right now
              </Typography>
            </Box>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {photos.map((photo, index) => (
                <Card
                  key={index}
                  className="relative rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 animate-slide-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardMedia
                    component="img"
                    image={imageError[index] ? 'https://via.placeholder.com/600x500?text=Image+Not+Found' : photo.src}
                    alt={photo.alt}
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                    onClick={() => openLightbox(index)}
                    onError={() => handleImageError(index)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
                    <Typography className="text-white text-xl font-semibold p-4 animate-slide-up">
                      {/* {photo.caption} */}
                    </Typography>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-lg flex items-center justify-center z-50 animate-zoom-in"
          onClick={closeLightbox}
        >
          <Box
            className="relative max-w-[90vw] w-full mx-4 md:mx-8 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <CardMedia
              component="img"
              image={
                imageError[selectedImageIndex]
                  ? 'https://via.placeholder.com/1200x800?text=Image+Not+Found'
                  : photos[selectedImageIndex]?.src
              }
              alt={photos[selectedImageIndex]?.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onError={() => handleImageError(selectedImageIndex)}
            />
            <Typography
              className="text-white text-center mt-4 text-xl font-medium animate-slide-up"
            >
              {photos[selectedImageIndex]?.caption}
            </Typography>
            <IconButton
              className="absolute top-4 right-4 bg-white/80 text-black rounded-full hover:bg-white transition-all duration-300"
              onClick={closeLightbox}
            >
              <Close />
            </IconButton>
            <IconButton
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 text-black rounded-full hover:bg-white transition-all duration-300"
              onClick={goToPrevious}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 text-black rounded-full hover:bg-white transition-all duration-300"
              onClick={goToNext}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </div>
      )}

      {/* Custom Animation Styles */}
      <style>
        {`
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes zoomIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleUp {
            from { transform: scale(0.7); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-slide-in {
            animation: slideIn 0.8s ease-out forwards;
          }
          .animate-slide-up {
            animation: slideUp 0.5s ease-out forwards;
          }
          .animate-zoom-in {
            animation: zoomIn 0.5s ease-out forwards;
          }
          .animate-scale-up {
            animation: scaleUp 0.6s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default PhotoGallery;