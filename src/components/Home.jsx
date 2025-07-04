import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import ZodiacSigns from "../components/ZodiacSigns";
import Services from "../components/Services";
import Counter from "../components/Counter";
import Awards from "../components/Awards";
import Testimonials from "../components/Testimonials";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Our Astro Service";
  }, []);

  return (
    <div>
      <Header />
      <Carousel />

      {/* Welcome Section */}
      <div className="ast_about_wrapper ast_toppadder70 ast_bottompadder70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ast_heading">
                <h1>
                  Welcome to <span>Our Astro Services</span>
                </h1>
                <p>
                  Unlocking the Mysteries of the Cosmos with Our Astro Services
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="ast_about_info_img">
                <img
                  src="/images/welcome.gif"
                  className="img-thumbnail"
                  alt="About"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="ast_about_info">
                <p>
                  <b>Our Astro Service a top astrologer in India</b>, with over
                  a decade of experience. He specializes in Vedic astrology and
                  offers solutions for things like love problem solution, love
                  marriage problem, marriage problem solution, husband wife
                  dispute, family problem solution, horoscopes reading and
                  helping with everyday life problems.
                </p>
                <p>
                  Our Astro Service is dedicated to giving you genuine and
                  highly accurate astrology services. People from all over the
                  world trust his services because they are dependable and in
                  line with their beliefs. Many individuals travel from faraway
                  places, including different cities, states, and even
                  countries, to seek his guidance.
                </p>
                <p>
                  If you want to ensure a bright future for yourself, reach out
                  to the renowned astrologer Our Astro Service today.
                </p>
                <p>
                  <b>Connect with the Best Astrologer in India:</b>
                </p>
                <p>
                  When you require assistance in decoding planetary positions
                  and seeking solutions for your life's challenges, don't
                  hesitate to reach out to Our Astro Service. Our experienced
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
      </div>

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
                    <img src="/images/icon1.png" alt="" />
                  </span>
                  <div className="ast_whywe_info_box_info">
                    <p>90+ Expert Astrologers</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="ast_whywe_info_box">
                  <span>
                    <img src="/images/icon2.png" alt="" />
                  </span>
                  <div className="ast_whywe_info_box_info">
                    <p>24x7, 365 Days Availability</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="ast_whywe_info_box">
                  <span>
                    <img src="/images/icon4.png" alt="" />
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
      <div className="ast_service_wrapper ast_toppadder70 ast_bottompadder50">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ast_heading">
                <h1>
                  What <span>we Offer</span>
                </h1>
                <p>
                  Explore our range of services to get rid of your problem. Get
                  in Touch with best and renowned Astrologer in India.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_service_box">
                <img src="/images/8.1.png" alt="" />
                <h4>World Famous Astrologer</h4>
                <p>
                  Looking for guidance in your life? Consult a World Famous
                  Astrologer for expert advice. These astrologers are renowned
                  worldwide for their accurate predictions and insights. Get
                  answers to your questions about love, career, and more today.
                </p>
                <div className="clearfix"></div>
                <a
                  href="https://api.whatsapp.com/send?phone=919510613656&text=I'd like to know more about your astrology services. Please contact me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ast_btn"
                >
                  <i className="fa fa-whatsapp"></i> Whatsapp Now
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_service_box">
                <img src="/images/9.1.png" alt="" />
                <h4>Love Marriage Specialist</h4>
                <p>
                  Are you looking for a "Love Marriage Specialist"? You're in
                  the right place! A love marriage specialist is someone who
                  helps couples facing challenges in their love marriage. They
                  offer advice and solutions to make your love marriage
                  successful.
                </p>
                <div className="clearfix"></div>
                <a
                  href="https://api.whatsapp.com/send?phone=919510613656&text=I'd like to know more about your astrology services. Please contact me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ast_btn"
                >
                  <i className="fa fa-whatsapp"></i> Whatsapp Now
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_service_box">
                <img src="/images/10.1.png" alt="" />
                <h4>Intercast Love Marriage</h4>
                <p>
                  Intercast Love Marriage is when people from different castes
                  choose love over social norms. It's a journey filled with
                  emotions and trials. This article will provide insights into
                  the world of Intercast Love Marriage and how to make it work.
                </p>
                <div className="clearfix"></div>
                <a
                  href="https://api.whatsapp.com/send?phone=919510613656&text=I'd like to know more about your astrology services. Please contact me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ast_btn"
                >
                  <i className="fa fa-whatsapp"></i> Whatsapp Now
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_service_box">
                <img src="/images/11.1.png" alt="" />
                <h4>Marital Issues And Solutions</h4>
                <p>
                  Marital issues can be tough, but there are simple solutions.
                  Communication is key. Make time to talk and listen to each
                  other. Be open about your feelings and concerns. Remember,
                  it's okay to ask for help from a trusted friend or counselor.
                </p>
                <div className="clearfix"></div>
                <a
                  href="https://api.whatsapp.com/send?phone=919510613656&text=I'd like to know more about your astrology services. Please contact me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ast_btn"
                >
                  <i className="fa fa-whatsapp"></i> Whatsapp Now
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_service_box">
                <img src="/images/12.1.png" alt="" />
                <h4>Delay In Marriage</h4>
                <p>
                  A delayed marriage isn't unusual. There are myriad reasons,
                  like career focus, self-improvement, or waiting for the right
                  match. It's your individual journey. This article simplifies
                  why marriages may take time, providing comfort and a roadmap
                  to a more enriching union.
                </p>
                <div className="clearfix"></div>
                <a
                  href="https://api.whatsapp.com/send?phone=919510613656&text=I'd like to know more about your astrology services. Please contact me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ast_btn"
                >
                  <i className="fa fa-whatsapp"></i> Whatsapp Now
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_service_box">
                <img src="/images/13.1.png" alt="" />
                <h4>Divorce Problem Solution</h4>
                <p>
                  Dealing with divorce problems can be hard, but there are ways
                  to resolve them. Talk openly with your partner and consider
                  marriage counseling. Sometimes, simple changes in
                  communication can make a big difference. If the situation
                  doesn't improve, consult a divorce attorney for guidance.
                </p>
                <div className="clearfix"></div>
                <a
                  href="https://api.whatsapp.com/send?phone=919510613656&text=I'd like to know more about your astrology services. Please contact me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ast_btn"
                >
                  <i className="fa fa-whatsapp"></i> Whatsapp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
