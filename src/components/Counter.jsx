import React, { useState, useEffect, useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import img1 from "../assets/images/ser-icon1.png";
import img2 from "../assets/images/ser-icon2.png";
import img3 from "../assets/images/ser-icon3.png";
import img4 from "../assets/images/ser-icon4.png";
import img5 from "../assets/images/timer_bg.webp";

const CounterItem = ({ target, label, icon }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    if (isVisible) {
      const duration = 2000;
      const stepTime = 50;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }

    return () => observer.disconnect();
  }, [isVisible, target]);

  return (
    <Box ref={ref} className="flex flex-col items-center text-center">
      <Box
        component="img"
        src={icon}
        alt="counter"
        className="w-16 h-16 mb-2"
      />
      <Typography variant="h4" className="text-orange-500 font-bold">
        {count}
      </Typography>
      <Typography variant="body2" className="text-white">
        {label}
      </Typography>
    </Box>
  );
};

const Counter = () => {
  const counterData = [
    {
      target: 20,
      label: "Years of Experience",
      icon: img1,
    },
    {
      target: 75,
      label: "Type of Horoscope",
      icon: img2,
    },
    {
      target: 200,
      label: "Expert Team",
      icon: img3,
    },
    {
      target: 5000,
      label: "Satisfied Clients in Globally",
      icon: img4,
    },
  ];

  return (
    <Box
      className="bg-teal-900 text-white py-8"
      style={{
        backgroundImage: `url(${img5})`,
        backgroundSize: "cover",
        textAlign: "center",
      }}
    >
      <Box className="container mx-auto text-center">
        <Typography variant="h4" component="h1">
          Now {"  "}
          <span style={{ color: "#ff9800" }}>We Have</span>
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {counterData.map((item, index) => (
            <Grid item key={index}>
              <CounterItem
                target={item.target}
                label={item.label}
                icon={item.icon}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Counter;
