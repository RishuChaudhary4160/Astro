import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import img1 from "../assets/images/welcome.gif";
import { WidthFull } from "@mui/icons-material";

const WelcomeAstro = () => {
  return (
    <Box
      className="ast_about_wrapper"
      sx={{ padding: "70px 0", backgroundColor: "#fff" }}
    >
      <Box className="container-fluid">
        <Box>
          <Box
            className="ast_heading"
            sx={{ textAlign: "center", marginBottom: "40px" }}
          >
            <Typography variant="h4" component="h1">
              Welcome to{" "}
              <span style={{ color: "#ff9800" }}>Om Astro Solution</span>
            </Typography>
            <Typography variant="body1">
              Unlocking the Mysteries of the Cosmos with Om Astro Solution
            </Typography>
          </Box>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "nowrap",
            }}
          >
            <Grid item sx={{ width: "40rem" }}>
              <Card
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "none",
                  width: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  height="400"
                  image={img1}
                  alt="About"
                  sx={{ borderRadius: "10px 10px 0 0" }}
                />
                <CardContent
                  sx={{
                    background:
                      "linear-gradient(to bottom, #26a69a 0%, #ffca28 100%)",
                    color: "#fff",
                    textAlign: "center",
                    padding: "20px",
                    borderRadius: "0 0 10px 10px",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      color: "#ffca28",
                      marginBottom: "10px",
                    }}
                  >
                    LOVE PROBLEM Solution
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Get Solution For: <br />- Love Dispute <br />- One Side Love{" "}
                    <br />- Lost Love Back <br />- Love Marriage
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#fff", marginBottom: "10px" }}
                  >
                    Consult{" "}
                    <span style={{ fontStyle: "italic" }}>
                      Om Astro Service
                    </span>
                  </Typography>
                  <Box
                    sx={{
                      background: "#ffca28",
                      color: "#26a69a",
                      padding: "10px",
                      borderRadius: "5px",
                      display: "inline-block",
                    }}
                  >
                    <Typography variant="h6" component="div">
                      Call Now <br /> +91 9417339708
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sx={{ width: "80rem", marginTop: "10rem" }}>
              <Box
                className="ast_about_info"
                sx={{ paddingLeft: { md: "20px" }, textAlign: "left" }}
              >
                <Typography variant="body1" paragraph>
                  <b>Om Astro Solution a top astrologer in India</b>, with over
                  a decade of experience. He specializes in Vedic astrology and
                  offers solutions for things like love problem solution, love
                  marriage problem, marriage problem solution, husband wife
                  dispute, family problem solution, horoscopes reading and
                  helping with everyday life problems.
                </Typography>
                <Typography variant="body1" paragraph>
                  Om Astro Solution is dedicated to giving you genuine and
                  highly accurate astrology services. People from all over the
                  world trust his services because they are dependable and in
                  line with their beliefs. Many individuals travel from faraway
                  places, including different cities, states, and even
                  countries, to seek his guidance.
                </Typography>
                <Typography variant="body1" paragraph>
                  If you want to ensure a bright future for yourself, reach out
                  to the renowned astrologer Om Astro Solution today.
                </Typography>
                <Typography variant="body1" paragraph>
                  <b>Connect with the Best Astrologer in India:</b>
                </Typography>
                <Typography variant="body1" paragraph>
                  When you require assistance in decoding planetary positions
                  and seeking solutions for your life's challenges, don't
                  hesitate to reach out to Om Astro Solution. Our experienced
                  astrologers in India are committed to providing you with
                  reliable and insightful astrological guidance.
                </Typography>
                <Button variant="contained" color="warning" href="/about">
                  Read More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeAstro;
