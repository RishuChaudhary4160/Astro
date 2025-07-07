import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import ZodiacSigns from "../components/ZodiacSigns";
import Services from "../components/Services";
import Counter from "../components/Counter";
import Awards from "../components/Awards";
import Testimonials from "../components/Testimonials";
import Header from "./Header";
import Footer from "./Footer";
import ServicesCardComponent from "./ServicesCardComponent";
import WelcomeAstro from "./WelcomeAstro";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import employee from "../assets/images/animation/success.mp4";
import team_building from "../assets/images/animation/team-building.mp4";
import time24 from "../assets/images/animation/24-hours.mp4";
import "../components/css/Home.css";

const Home = () => {
  useEffect(() => {
    document.title = "OM Astro Solution";
  }, []);

  return (
    <div>
      <Header />
      <Carousel />

      <WelcomeAstro />
      <Grid mt={2} mb={3} p={2} sx={{ backgroundColor: "#ededed" }}>
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "bold",
          }}
          className="header-why"
          mb={5}
        >
          why <span style={{ color: "#f28c38" }}>choose us</span>
        </Typography>
        <Grid mb={5} sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Grid mb={5} sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Grid
              sx={{
                display: "flex",
                // backgroundColor: "#f5f5f5",
                borderRadius: "20px",
                padding: "10px",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  width: "7rem",
                  height: "7rem",

                  backgroundColor: "#f28c38",
                }}
              >
                <video
                  src={employee}
                  autoPlay
                  muted
                  loop
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Avatar>
              <Grid
                sx={{
                  alignContent: "center",
                  backgroundColor: "#fff",
                  height: "4rem",
                  width: "15rem",
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                ml={-2}
              >
                <Typography
                  ml={3}
                  sx={{
                    alignContent: "center",
                    color: "#1a1a1a", // Dark text color from the image
                    fontSize: "16px", // Adjusted font size
                  }}
                >
                  90+ Expert Astrologers
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid mb={5} sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Grid
              sx={{
                display: "flex",
                // backgroundColor: "#f5f5f5",
                borderRadius: "20px",
                padding: "10px",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  width: "7rem",
                  height: "7rem",

                  backgroundColor: "#f28c38",
                }}
              >
                <video
                  src={time24}
                  autoPlay
                  muted
                  loop
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Avatar>
              <Grid
                sx={{
                  alignContent: "center",
                  backgroundColor: "#fff",
                  height: "4rem",
                  width: "16rem",
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                ml={-2}
              >
                <Typography
                  ml={3}
                  sx={{
                    alignContent: "center",
                    color: "#1a1a1a", // Dark text color from the image
                    fontSize: "16px", // Adjusted font size
                  }}
                >
                  24x7, 365 Days Availability
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid mb={5} sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Grid
              sx={{
                display: "flex",
                // backgroundColor: "#f5f5f5",
                borderRadius: "20px",
                padding: "10px",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  width: "7rem",
                  height: "7rem",

                  backgroundColor: "#f28c38",
                }}
              >
                <video
                  src={team_building}
                  autoPlay
                  muted
                  loop
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Avatar>
              <Grid
                sx={{
                  alignContent: "center",
                  backgroundColor: "#fff",
                  height: "4rem",
                  width: "17rem",
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                ml={-2}
              >
                <Typography
                  ml={3}
                  sx={{
                    alignContent: "center",
                    color: "#1a1a1a", // Dark text color from the image
                    fontSize: "16px", // Adjusted font size
                  }}
                >
                  Accurate Remedial Solutions
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Services />
      {/* <Awards /> */}
      <ZodiacSigns />
      <Counter />
      <ServicesCardComponent />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
