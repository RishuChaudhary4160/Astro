import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import aries from "../assets/images/animation/Aries.mp4";
import Taurus from "../assets/images/animation/Taurus.mp4";
import Gemini from "../assets/images/animation/Gemini.mp4";
import Cancer from "../assets/images/animation/Cancer.mp4";
import Leo from "../assets/images/animation/Leo.mp4";
import Virgo from "../assets/images/animation/Virgo.mp4";
import Libra from "../assets/images/animation/Libra.mp4";
import { Pages } from "@mui/icons-material";

const ZodiacSigns = () => {
  const zodiacSigns = [
    {
      name: "Aries",
      hindi: "मेष",
      animation: aries,
    },
    {
      name: "Taurus",
      hindi: "वृषभ",
      animation: Taurus,
    },
    {
      name: "Gemini",
      hindi: "मिथुन",
      animation: Gemini,
    },
    {
      name: "Cancer",
      hindi: "कर्क",
      animation: Cancer,
    },
    {
      name: "Leo",
      hindi: "सिंह",
      animation: Leo,
    },
    {
      name: "Virgo",
      hindi: "कन्या",
      animation: Virgo,
    },
    { name: "Libra", hindi: "तुला", animation: Libra },
    {
      name: "Scorpio",
      hindi: "वृश्चिक",
      animation: aries,
    },
    {
      name: "Sagittarius",
      hindi: "धनु",
      animation: Cancer,
    },
    {
      name: "Capricorn",
      hindi: "मकर",
      animation: Gemini,
    },
    {
      name: "Aquarius",
      hindi: "कुम्भ",
      animation: Leo,
    },
    {
      name: "Pisces",
      hindi: "मीन",
      animation: Libra,
    },
  ];

  return (
    <>
      <Grid>
        <Grid sx={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',}} mt={5} mb={5} ml={1}>
          {zodiacSigns.map((item, index) => (
            <Grid item xs={6} key={index} sx={{width:'18rem',height:'17rem'}}>
              <Card sx={{width:'15rem',height:'14rem',alignItems:"center"}}>
                <CardMedia
                  component="video"
                  src={item.animation}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%",height:'60%' }}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {item.hindi}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default ZodiacSigns;
