import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img1 from "../assets/images/1.1.png";
import img2 from "../assets/images/2.1.png";
import img3 from "../assets/images/3.1.png";
import img4 from "../assets/images/4.1.png";
import img5 from "../assets/images/5.1.png";
import img6 from "../assets/images/7.1.png";
import "../components/css/Home.css";
const Services = () => {
  const services = [
    {
      image: img1,
      title: "Love Problem Solution",
      description:
        "OM Astro Solution is your top love problem solution Astrologer, specializing in love marriages. Love is a precious gift but can come with challenges like communication issues and relationship troubles.",
      link: "/love-problem-solution",
    },
    {
      image: img2,
      title: "Marriage Problem Solution",
      description:
        "When navigating hurdles on the path to marriage, astrology offers solutions. Whether due to planetary changes or chart discrepancies, it can address pre- and post-marriage issues.",
      link: "/marriage-problem-solution",
    },
    {
      image: img3,
      title: "Love Marriage Problem Solution",
      description:
        "Increasingly, couples are turning to phone-based solutions for love marriage challenges. OM Astro Solution, India's leading astrologer with over a decade of experience, provides immediate answers.",
      link: "/love-marriage-problem-solution",
    },
    {
      image: img4,
      title: "Husband Wife Dispute Solution",
      description:
        "Marriage, a sacred bond, faces modern life's trials, testing resilience. When challenges strain relationships, individuals turn to astrologers like OM Astro Solution for guidance.",
      link: "/husband-wife-dispute-solution",
    },
    {
      image: img5,
      title: "Family Problem Solution",
      description:
        "At times, we encounter family conflicts that disrupt harmony and strain relationships among relatives. These issues can cause emotional turmoil as family matters deeply to us.",
      link: "/family-problem-solution",
    },
    {
      image: img6,
      title: "Get Your Love Back",
      description:
        "If you want to reunite with your loved one, it's possible. Begin by having an honest chat with your partner. Listen to their concerns and express your feelings as well.",
      link: "#",
    },
  ];

  return (
    <div style={{ padding: "70px 0 50px", backgroundColor: "#f9f9f9" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "bold",
          }}
          className="header-why"
          mb={5}
        >
          Our <span style={{ color: "#f28c38" }}>Services</span>
        </Typography>
        <Typography variant="body1">
          Connect with our team to get remedies for your love life. We have pool
          of expert and qualified astrologer
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {services.map((service, index) => (
          <Card key={index} style={{ width: "500px", textAlign: "center" }}>
            <CardMedia
              component="img"
              height="200"
              image={service.image}
              alt={service.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {service.description}
              </Typography>
              <Button
                variant="contained"
                color="warning"
                href={service.link}
                endIcon={<ArrowForwardIcon />}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
