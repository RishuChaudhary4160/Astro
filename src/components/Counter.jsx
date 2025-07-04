import React, { useState, useEffect, useRef } from "react";

const CounterItem = ({ target, label, icon }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef;

  useEffect(() => {
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="col-lg-3 col-md-3 col-sm-6 col-12">
      <div className="ast_counter">
        <span>
          <img src={icon} alt="counter" />
        </span>
        <h2 className="timer">{count}</h2>
        <h4>{label}</h4>
      </div>
    </div>
  );
};

const Counter = () => {
  const counterData = [
    { target: 20, label: "Years of Experience", icon: "/images/ser-icon1.png" },
    { target: 75, label: "Type of Horoscope", icon: "/images/ser-icon2.png" },
    { target: 200, label: "Expert Team", icon: "/images/ser-icon3.png" },
    {
      target: 5000,
      label: "Satisfied Clients in Globally",
      icon: "/images/ser-icon4.png",
    },
  ];

  return (
    <div className="ast_timer_wrapper ast_toppadder70 ast_bottompadder40">
      <div className="ast_img_overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1>
                now <span>we have</span>
              </h1>
            </div>
          </div>
          <div className="ast_counter_wrapper row">
            {/* {counterData.map((item, index) => (
              <CounterItem
                key={index}
                target={item.target}
                label={item.label}
                icon={item.icon}
              />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
