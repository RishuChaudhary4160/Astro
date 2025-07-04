import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      image: "/images/1.1.png",
      title: "Love Problem Solution",
      description:
        "Our Astro Service is your top love problem solution Astrologer, specializing in love marriages. Love is a precious gift but can come with challenges like communication issues and relationship troubles.",
      link: "/love-problem-solution",
    },
    {
      image: "/images/2.1.png",
      title: "Marriage Problem Solution",
      description:
        "When navigating hurdles on the path to marriage, astrology offers solutions. Whether due to planetary changes or chart discrepancies, it can address pre- and post-marriage issues.",
      link: "/marriage-problem-solution",
    },
    {
      image: "/images/3.1.png",
      title: "Love Marriage Problem Solution",
      description:
        "Increasingly, couples are turning to phone-based solutions for love marriage challenges. Our Astro Service, India's leading astrologer with over a decade of experience, provides immediate answers.",
      link: "/love-marriage-problem-solution",
    },
    {
      image: "/images/4.1.png",
      title: "Husband Wife Dispute Solution",
      description:
        "Marriage, a sacred bond, faces modern life's trials, testing resilience. When challenges strain relationships, individuals turn to astrologers like Our Astro Service for guidance.",
      link: "/husband-wife-dispute-solution",
    },
    {
      image: "/images/5.1.png",
      title: "Family Problem Solution",
      description:
        "At times, we encounter family conflicts that disrupt harmony and strain relationships among relatives. These issues can cause emotional turmoil as family matters deeply to us.",
      link: "/family-problem-solution",
    },
    {
      image: "/images/7.1.png",
      title: "Get Your Love Back",
      description:
        "If you want to reunite with your loved one, it's possible. Begin by having an honest chat with your partner. Listen to their concerns and express your feelings as well.",
      link: "#",
    },
  ];

  return (
    <div className="ast_service_wrapper ast_toppadder70 ast_bottompadder50">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1>
                our <span>services</span>
              </h1>
              <p>
                Connect with our team to get remedies for your love life. We
                have pool of expert and qualified astrologer
              </p>
            </div>
          </div>
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_service_box">
                <img src={service.image} alt={service.title} />
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <div className="clearfix"></div>
                <Link to={service.link} className="ast_btn">
                  Read More <i className="fa fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
