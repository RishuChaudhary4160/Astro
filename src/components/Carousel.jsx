import React, { useState, useEffect } from "react";
import img1 from "../assets/images/banner4.jpg";
import img2 from "../assets/images/banner5.jpg";
import img3 from "../assets/images/banner6.jpg";
import img4 from "../assets/images/banner1.jpg";
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === currentSlide ? "active" : ""}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentSlide ? "active" : ""
              }`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} className="d-block" style={{ width: "450px" }} />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        onClick={prevSlide}
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={nextSlide}
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carousel;
