import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import img1 from "../assets/images/welcome2.png";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
const About = () => {
  useEffect(() => {
    document.title = "About Us | OM Astro Solution";
  }, []);

  return (
    <div>
      <Breadcrumb title="About Us" />

      <div className="ast_about_wrapper ast_toppadder70 ast_bottompadder70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ast_heading">
                <h2 style={{ textAlign: "center" }}>
                  <Typography variant="h4" component="h1">
                    About{" "}
                    <span style={{ color: "#ff9800" }}>OM Astro Solutions</span>
                  </Typography>
                </h2>
                <p style={{ textAlign: "center" }}>
                  Unlocking the Mysteries of the Cosmos with OM Astro Solutions
                </p>
              </div>
            </div>
            {/* <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="ast_about_info_img">
                <img src={img1} className="img-thumbnail" alt="About" />
              </div>
            </div> */}
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
                      Get Solution For: <br />- Love Dispute <br />- One Side
                      Love <br />- Lost Love Back <br />- Love Marriage
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
                        Call Now <br /> +91 95106 13566
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
                  <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                    <div className="ast_about_info">
                      <h3>
                        <Typography variant="h5" component="h1">
                          <span style={{ color: "#ff9800" }}>
                            OM Astro Solution: Your Premier Destination for
                            Expert Vedic Astrology in India
                          </span>
                        </Typography>
                      </h3>
                      <p>
                        Are you in search of profound astrological insights and
                        guidance to navigate life's challenges? Look no further
                        than OM Astro Solution, your trusted partner in Vedic
                        astrology based in India. Our mission is to provide you
                        with top-notch astrological solutions and help you find
                        answers to your deepest questions.
                      </p>
                      <Typography variant="h5" component="h1">
                        <span style={{ color: "#ff9800" }}>
                          Discover the World of Vedic Astrology:
                        </span>
                      </Typography>
                      <p>
                        We pride ourselves as pioneers in the field of Vedic
                        astrology, with a rich heritage of wisdom and knowledge.
                        Vedic astrology, also known as Jyotish Shastra, is a
                        time-tested and ancient system that delves into the
                        cosmic influences on your life. Our dedicated team of
                        astrologers is well-versed in the art of Vedic astrology
                        and can offer you invaluable insights into your life's
                        journey.
                      </p>
                      <Typography variant="h5" component="h1">
                        <span style={{ color: "#ff9800" }}>
                          Access Astrological Solutions Worldwide:
                        </span>
                      </Typography>
                      <p>
                        No matter where you are in the world, you can benefit
                        from our expertise. We are honored to be recognized as
                        one of the world's top astrology services, and our
                        astrologers are available to serve you regardless of
                        your location. With Om Astro Service, distance is no
                        barrier to receiving the best astrological guidance.
                      </p>
                    </div>
                  </div>
                </Box>
              </Grid>
            </Grid>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ast_about_info pt-5">
                <Typography variant="h5" component="h1">
                  <span style={{ color: "#ff9800" }}>
                    Comprehensive Astrological Services at Your Fingertips:
                  </span>
                </Typography>
                <p>
                  At OM Astro Solution, we understand that every individual is
                  unique. That's why we offer a wide range of services tailored
                  to your specific needs. Our team of top astrologers is skilled
                  in deciphering the intricate details of your birth chart,
                  including your zodiac sign, moon sign, and the positions of
                  planets and modalities. With this information, we can provide
                  you with personalized guidance and expert advice to address
                  various aspects of your life.
                </p>
                <Typography variant="h5" component="h1">
                  <span style={{ color: "#ff9800" }}>
                    Harness the Power of Planetary Transitions:
                  </span>
                </Typography>
                <p>
                  One of the key benefits of consulting with OM Astro Solution
                  is gaining insight into the influence of planetary transitions
                  on your life. Our expert astrologers will help you understand
                  how planetary movements impact your experiences. Whether it's
                  navigating challenging times during planetary retrogrades or
                  capitalizing on favourable celestial alignments, our guidance
                  will empower you to make informed decisions and lead a more
                  harmonious life.
                </p>
                <Typography variant="h5" component="h1">
                  <span style={{ color: "#ff9800" }}>
                    A Solution for Every Concern:
                  </span>
                </Typography>
                <p>
                  No matter the nature of your concerns, our team of expert
                  Vedic astrologers is here to assist you. Our comprehensive
                  services cover a wide spectrum of life's challenges,
                  including:
                </p>
                <ul>
                  <li>Numerology</li>
                  <li>Face-Reading</li>
                  <li>Kundali-Milan (Matchmaking)</li>
                  <li>Family Astrology</li>
                  <li>Health Astrology</li>
                  <li>Education & Career Astrology</li>
                  <li>Job & Business Astrology</li>
                  <li>Finance & Investment Astrology</li>
                  <li>Marriage Astrology</li>
                  <li>Legal Dispute Astrology</li>
                  <li>Relationship Astrology</li>
                </ul>
                <p>
                  Count on us for dependable and effective astrology solutions
                  that cater to the specific issues you're facing in your life.
                </p>
                <Typography variant="h5" component="h1">
                  <span style={{ color: "#ff9800" }}>
                    Connect with the Best Astrologer in India:
                  </span>
                </Typography>
                <p>
                  When you require assistance in decoding planetary positions
                  and seeking solutions for your life's challenges, don't
                  hesitate to reach out to OM Astro Solution. Our experienced
                  astrologers in India are committed to providing you with
                  reliable and insightful astrological guidance.
                </p>
                <p>
                  Take the first step toward a more fulfilling life by
                  contacting the best astrologer in India today. Whether you're
                  seeking answers about your personal relationships, career
                  prospects, financial decisions, or any other aspect of your
                  life, our dedicated team is here to guide you towards a
                  brighter future. Embrace the wisdom of Vedic astrology and
                  unlock the secrets to a more balanced and harmonious life with
                  OM Astro Solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
