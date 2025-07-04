import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";

const HoroscopeReading = () => {
  useEffect(() => {
    document.title = "Horoscope Reading | Our Astro Service";
  }, []);

  return (
    <div>
      <Breadcrumb title="Horoscope Reading" />
      <div className="ast_about_wrapper ast_toppadder70 ast_bottompadder70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ast_heading">
                <h2>
                  Horoscope <span>Reading</span>
                </h2>
                <p>Detailed astrological chart analysis and predictions</p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ast_about_info">
                <p>
                  Get comprehensive horoscope readings from our expert
                  astrologers. We provide detailed analysis of your birth chart,
                  planetary positions, and their influence on various aspects of
                  your life including career, relationships, health, and
                  finances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoroscopeReading;
