import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import aries from "../assets/images/animation/Aries.mp4";
import Taurus from "../assets/images/animation/Taurus.mp4";
import Gemini from "../assets/images/animation/Gemini.mp4";
import Cancer from "../assets/images/animation/Cancer.mp4";
import Leo from "../assets/images/animation/Leo.mp4";
import Virgo from "../assets/images/animation/Virgo.mp4";
import Libra from "../assets/images/animation/Libra.mp4";
import Aquarius from "../assets/images/animation/Aquarius.mp4";
import Capricorn from "../assets/images/animation/Capricorn.mp4";
import Pisces from "../assets/images/animation/Pisces.mp4";
import Scorpio from "../assets/images/animation/Scorpio.mp4";
import Sagittarius from "../assets/images/animation/Sagittarius.mp4";

const ZodiacSigns = () => {
  const zodiacSigns = [
    {
      name: "Aries",
      hindi: "मेष",
      animation: aries,
      prediction:
        "Today is a great day for new beginnings, Aries. Your energy is high, so seize opportunities in your career or personal projects.",
    },
    {
      name: "Taurus",
      hindi: "वृषभ",
      animation: Taurus,
      prediction:
        "Stability is your strength today, Taurus. Focus on financial planning and nurturing close relationships.",
    },
    {
      name: "Gemini",
      hindi: "मिथुन",
      animation: Gemini,
      prediction:
        "Your curiosity drives you today, Gemini. Engage in meaningful conversations and explore new ideas.",
    },
    {
      name: "Cancer",
      hindi: "कर्क",
      animation: Cancer,
      prediction:
        "Emotions run deep today, Cancer. Take time for self-care and connect with loved ones.",
    },
    {
      name: "Leo",
      hindi: "सिंह",
      animation: Leo,
      prediction:
        "Shine bright, Leo! Your confidence will attract positive attention in social or professional settings.",
    },
    {
      name: "Virgo",
      hindi: "कन्या",
      animation: Virgo,
      prediction:
        "Attention to detail pays off today, Virgo. Tackle tasks with precision and avoid overthinking.",
    },
    {
      name: "Libra",
      hindi: "तुला",
      animation: Libra,
      prediction:
        "Balance is key today, Libra. Seek harmony in relationships and make time for creative pursuits.",
    },
    {
      name: "Scorpio",
      hindi: "वृश्चिक",
      animation: Scorpio,
      prediction:
        "Your intuition is sharp today, Scorpio. Trust your instincts in decision-making.",
    },
    {
      name: "Sagittarius",
      hindi: "धनु",
      animation: Sagittarius,
      prediction:
        "Adventure calls you, Sagittarius. Embrace new experiences and broaden your horizons.",
    },
    {
      name: "Capricorn",
      hindi: "मकर",
      animation: Capricorn,
      prediction:
        "Hard work pays off today, Capricorn. Stay disciplined and focus on your long-term goals.",
    },
    {
      name: "Aquarius",
      hindi: "कुम्भ",
      animation: Aquarius,
      prediction:
        "Innovation is your strength today, Aquarius. Collaborate and share your unique ideas.",
    },
    {
      name: "Pisces",
      hindi: "मीन",
      animation: Pisces,
      prediction:
        "Your creativity flows today, Pisces. Dive into artistic projects or spiritual reflection.",
    },
  ];

  return (
    <Grid container spacing={2} sx={{ mt: 5, mb: 5, ml: 1 }}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {zodiacSigns.map((item, index) => (
          <Grid
            item
            // xs={12}
            // sm={6}
            // md={4}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {" "}
            <Button
              component={Link}
              to={`/zodiac/${item.name.toLowerCase()}`}
              state={{ zodiac: item }}
              size="small"
              sx={{ width: "18rem" }}
            >
              <Card
                sx={{ width: "15rem", height: "16rem", textAlign: "center" }}
              >
                <CardMedia
                  component="video"
                  src={item.animation}
                  autoPlay
                  loop
                  muted
                  playsInline
                  sx={{ width: "100%", height: "60%", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#ff9800" }}>
                    {item.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "#ff9800" }}>
                    {item.hindi}
                  </Typography>
                </CardContent>
              </Card>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ZodiacSigns;
