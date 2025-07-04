import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import ZodiacSigns from "../components/ZodiacSigns";
import Services from "../components/Services";
import Counter from "../components/Counter";
import Awards from "../components/Awards";
import Testimonials from "../components/Testimonials";
import Header from "./Header";
import Footer from "./Footer";
import img1 from "../assets/images/welcome.gif";
import img2 from "../assets/images/welcome2.png";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon4.png";
import ServicesCardComponent from "./ServicesCardComponent";
import WelcomeAstro from "./WelcomeAstro";

const Home = () => {
  useEffect(() => {
    document.title = "OM Astro Solution";
  }, []);

  return (
    <div>
      <Header />
      <Carousel />

      {/* Welcome Section */}
      {/* <div className="ast_about_wrapper ast_toppadder70 ast_bottompadder70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ast_heading">
                <h1>
                  Welcome to <span>OM Astro Solutions</span>
                </h1>
                <p>
                  Unlocking the Mysteries of the Cosmos with OM Astro Solutions
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="ast_about_info_img">
                <img src={img1} className="img-thumbnail" alt="About" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="ast_about_info">
                <p>
                  <b>OM Astro Solution a top astrologer in India</b>, with over
                  a decade of experience. He specializes in Vedic astrology and
                  offers solutions for things like love problem solution, love
                  marriage problem, marriage problem solution, husband wife
                  dispute, family problem solution, horoscopes reading and
                  helping with everyday life problems.
                </p>
                <p>
                  OM Astro Solution is dedicated to giving you genuine and
                  highly accurate astrology services. People from all over the
                  world trust his services because they are dependable and in
                  line with their beliefs. Many individuals travel from faraway
                  places, including different cities, states, and even
                  countries, to seek his guidance.
                </p>
                <p>
                  If you want to ensure a bright future for yourself, reach out
                  to the renowned astrologer OM Astro Solution today.
                </p>
                <p>
                  <b>Connect with the Best Astrologer in India:</b>
                </p>
                <p>
                  When you require assistance in decoding planetary positions
                  and seeking solutions for your life's challenges, don't
                  hesitate to reach out to OM Astro Solution. Our experienced
                  astrologers in India are committed to providing you with
                  reliable and insightful astrological guidance.
                </p>
                <a href="/about" className="ast_btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <WelcomeAstro />

      {/* Why Choose Us Section */}
      <div className="ast_whywe_wrapper ast_toppadder70 ast_bottompadder70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ast_heading">
                <h1>
                  why <span>choose us</span>
                </h1>
              </div>
            </div>
            <div className="ast_whywe_info row">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="ast_whywe_info_box">
                  <span>
                    <img src={icon1} alt="" />
                  </span>
                  <div className="ast_whywe_info_box_info">
                    <p>90+ Expert Astrologers</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="ast_whywe_info_box">
                  <span>
                    <img src={icon2} alt="" />
                  </span>
                  <div className="ast_whywe_info_box_info">
                    <p>24x7, 365 Days Availability</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="ast_whywe_info_box">
                  <span>
                    <img src={icon3} alt="" />
                  </span>
                  <div className="ast_whywe_info_box_info">
                    <p>Accurate Remedial Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Services />
      <Awards />
      <ZodiacSigns />
      <Counter />
      <ServicesCardComponent />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
