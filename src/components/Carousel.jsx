import React, { useState, useEffect } from "react";
import img1 from "../assets/images/banner4.jpeg";
import img2 from "../assets/images/banner5.png";
import img3 from "../assets/images/banner6.jpeg";
import img4 from "../assets/images/banner1.jpeg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const slides = [img1, img2, img3, img4];
  const slideInterval = 2000; // 3 seconds for faster sliding

  // Automatic sliding and progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0); // Reset progress bar
    }, slideInterval);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 100 / (slideInterval / 16), 100));
    }, 16); // Update progress every ~16ms for smooth animation

    // Cleanup intervals on unmount
    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0); // Reset progress bar on manual navigation
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "800px", // Adjustable container width
        margin: "0 auto",
        overflow: "hidden",
        borderRadius: "12px", // Rounded corners for modern look
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow
        backgroundColor: "#f5f5f5", // Light background
      }}
    >
      {/* Carousel Images */}
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              transform:
                index === currentSlide
                  ? "translateX(0)"
                  : index > currentSlide
                    ? "translateX(100%)"
                    : "translateX(-100%)",
              transition: "transform 0.5s ease-in-out", // Slide animation
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 1 : 0,
            }}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              style={{
                width: "80%", // Uniform width for all images
                maxHeight: "100%", // Fit within container height
                height: "auto",
                objectFit: "contain", // Preserve aspect ratio
                margin: "0 auto", // Center images
                display: "block",
                borderRadius: "8px", // Rounded image corners
              }}
            />
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "4px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#007bff", // Blue progress bar
            transition: "width 0.016s linear", // Smooth progress
          }}
        ></div>
      </div>

      {/* Carousel Indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "2px solid #fff",
              backgroundColor:
                index === currentSlide ? "#007bff" : "transparent",
              margin: "0 6px",
              cursor: "pointer",
              transition: "background-color 0.3s, transform 0.3s",
              transform: index === currentSlide ? "scale(1.2)" : "scale(1)",
            }}
            onMouseOver={(e) =>
            (e.currentTarget.style.transform =
              index === currentSlide ? "scale(1.2)" : "scale(1.1)")
            }
            onMouseOut={(e) =>
            (e.currentTarget.style.transform =
              index === currentSlide ? "scale(1.2)" : "scale(1)")
            }
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        type="button"
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.5)",
          border: "none",
          color: "#fff",
          fontSize: "24px",
          padding: "12px 16px",
          cursor: "pointer",
          borderRadius: "50%",
          transition: "background-color 0.3s, transform 0.3s",
          zIndex: 10,
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = "rgba(0, 0, 0, 0.7)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)";
          e.currentTarget.style.transform = "translateY(-50%)";
        }}
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        type="button"
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.5)",
          border: "none",
          color: "#fff",
          fontSize: "24px",
          padding: "12px 16px",
          cursor: "pointer",
          borderRadius: "50%",
          transition: "background-color 0.3s, transform 0.3s",
          zIndex: 10,
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = "rgba(0, 0, 0, 0.7)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)";
          e.currentTarget.style.transform = "translateY(-50%)";
        }}
        aria-label="Next Slide"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;