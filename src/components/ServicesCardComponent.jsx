import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import num0 from "../assets/images/8.1.png";
import num1 from "../assets/images/9.1.png";
import num2 from "../assets/images/10.1.png";
import num3 from "../assets/images/11.1.png";
import num4 from "../assets/images/12.1.png";
import num5 from "../assets/images/13.1.png";
import loveMarriage from '../assets/images/ghibli/loveMarriage.jpeg';
import Marriage from '../assets/images/ghibli/Marriage.jpeg';
import Marital_Issues from '../assets/images/ghibli/Marital_Issues.png';
import Delay_In_Marriage from '../assets/images/ghibli/Delay_In_Marriage.png';
import divorce from '../assets/images/ghibli/divorce.jpg'

const services = [
  {
    title: "World Famous Astrologer",
    description:
      "Looking for guidance in your life? Consult a World Famous Astrologer for expert advice. These astrologers are renowned worldwide for their accurate predictions and insights. Get answers to your questions about love, career, and more today.",
    image: num0,
    whatsappLink: "https://api.whatsapp.com/send?phone=919510613656&text=I",
  },
  {
    title: "Love Marriage Specialist",
    description:
      'Are you looking for a "Love Marriage Specialist"? You\'re in the right place! A love marriage specialist is someone who helps couples facing challenges in their love marriage. They offer advice and solutions to make your love marriage successful.',
    image: loveMarriage,
  },
  {
    title: "Intercast Love Marriage",
    description:
      "Intercast Love Marriage is when people from different castes choose love over social norms. It's a journey filled with emotions and trials. This article will provide insights into the world of Intercast Love Marriage and how to make it work.",
    image: Marriage,
    whatsappLink: "https://api.whatsapp.com/send?phone=919510613656&text=I",
  },
  {
    title: "Marital Issues And Solutions",
    description:
      "Marital issues can be tough, but there are simple solutions. Communication is key. Make time to talk and listen to each other. Be open about your feelings and concerns. Remember, it's okay to ask for help from a trusted friend or counselor.",
    image: Marital_Issues,
    whatsappLink: "https://api.whatsapp.com/send?phone=919510613656&text=I",
  },
  {
    title: "Delay In Marriage",
    description:
      "A delayed marriage isn't unusual. There are myriad reasons, like career focus, self-improvement, or waiting for the right match. It's your individual journey. This article simplifies why marriages may take time, providing comfort and a roadmap to a more enriching union.",
    image: Delay_In_Marriage,
    whatsappLink: "https://api.whatsapp.com/send?phone=919510613656&text=I",
  },
  {
    title: "Divorce Problem Solution",
    description:
      "Dealing with divorce problems can be hard, but there are ways to resolve them. Talk openly with your partner and consider marriage counseling. Sometimes, simple changes in communication can make a big difference. If the situation doesn't improve, consult a divorce attorney for guidance.",
    image: divorce,
    whatsappLink: "https://api.whatsapp.com/send?phone=919510613656&text=I",
  },
];

const ServicesCardComponent = () => {
  return (
    <div style={{ padding: "70px 0 50px", backgroundColor: "#f9f9f9" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Typography variant="h4" component="h1">
          What <span style={{ color: "#ff9800" }}>we Offer</span>
        </Typography>
        <Typography variant="body1">
          Explore our range of services to get rid of your problem. Get in Touch
          with best and renowned Astrologer in India.
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
            
            <img src={service.image}
            style={{
              height:'24rem',
              width:'100%'
            }}
             />
            <CardContent>
              <Typography variant="h6" component="div">
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={service.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<WhatsAppIcon />}
                style={{ backgroundColor: "#25D366", color: "#fff" }}
              >
                Whatsapp Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesCardComponent;
