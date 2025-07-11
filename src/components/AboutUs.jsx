import React, { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Button,
  Fade,
  Grow,
} from "@mui/material";
import Breadcrumb from "../components/Breadcrumb";
import img1 from "../assets/images/welcome2.png";

const About = () => {
  useEffect(() => {
    document.title = "About Us | OM Astro Solution";
  }, []);

  return (
    <Box sx={{ bgcolor: "grey.100", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <Box sx={{ bgcolor: "white", py: 2, boxShadow: 1 }}>
        <Breadcrumb title="About Us" />
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: "linear-gradient(135deg, #fff8e1 0%, #fef3ec 100%)",
          borderBottom: "1px solid",
          borderColor: "grey.200",
        }}
      >
        <Container maxWidth="xxl">
          <Fade in timeout={1200}>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  color: "#ff9800",
                  fontWeight: "bold",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  mb: 2,
                }}
              >
                About OM Astro Solutions
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.8, fontSize: { xs: "1rem", md: "1.1rem" } }}
              >
                Unlocking the Mysteries of the Cosmos with OM Astro Solutions
              </Typography>
            </Box>
          </Fade>
          {/* <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={5}>
              <Grow in timeout={1000}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="400"
                    image={img1}
                    alt="About"
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent
                    sx={{
                      bgcolor: "linear-gradient(to bottom, #26a69a 0%, #ffca28 100%)",
                      color: "#fff",
                      textAlign: "center",
                      p: 3,
                      borderRadius: "0 0 10px 10px",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", color: "#ffca28", mb: 2 }}
                    >
                      LOVE PROBLEM Solution
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
                      Get Solution For: <br />- Love Dispute <br />- One Side
                      Love <br />- Lost Love Back <br />- Love Marriage
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2, fontStyle: "italic" }}>
                      Consult Om Astro Service
                    </Typography>
                    <Box
                      sx={{
                        bgcolor: "#ffca28",
                        color: "#26a69a",
                        p: 1.5,
                        borderRadius: 2,
                        display: "inline-block",
                      }}
                    >
                      <Typography variant="h6">
                        Call Now <br /> +91 9417339708
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
            <Grid item xs={12} md={7}>
              <Grow in timeout={1100}>
                <Box sx={{ pl: { md: 3 }, textAlign: "left" }}>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 2 }}
                  >
                    OM Astro Solution: Your Premier Destination for Expert Vedic
                    Astrology in India
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8, mb: 3 }}
                  >
                    Are you in search of profound astrological insights and
                    guidance to navigate life's challenges? Look no further
                    than OM Astro Solution, your trusted partner in Vedic
                    astrology based in India. Our mission is to provide you
                    with top-notch astrological solutions and help you find
                    answers to your deepest questions.
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 2 }}
                  >
                    Discover the World of Vedic Astrology:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8, mb: 3 }}
                  >
                    We pride ourselves as pioneers in the field of Vedic
                    astrology, with a rich heritage of wisdom and knowledge.
                    Vedic astrology, also known as Jyotish Shastra, is a
                    time-tested and ancient system that delves into the
                    cosmic influences on your life. Our dedicated team of
                    astrologers is well-versed in the art of Vedic astrology
                    and can offer you invaluable insights into your life's
                    journey.
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 2 }}
                  >
                    Access Astrological Solutions Worldwide:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                  >
                    No matter where you are in the world, you can benefit
                    from our expertise. We are honored to be recognized as
                    one of the world's top astrology services, and our
                    astrologers are available to serve you regardless of
                    your location. With Om Astro Service, distance is no
                    barrier to receiving the best astrological guidance.
                  </Typography>
                </Box>
              </Grow>
            </Grid>
          </Grid> */}
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "nowrap",
            }}
          >
            <Grid item sx={{ width: "40rem" }}>
              <Grow in timeout={1000}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                    },
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
                        Call Now <br /> +91 9417339708
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grow>
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
                          OM Astro Solution: Your Premier Destination for Expert
                          Vedic Astrology in India
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
                      time-tested and ancient system that delves into the cosmic
                      influences on your life. Our dedicated team of astrologers
                      is well-versed in the art of Vedic astrology and can offer
                      you invaluable insights into your life's journey.
                    </p>
                    <Typography variant="h5" component="h1">
                      <span style={{ color: "#ff9800" }}>
                        Access Astrological Solutions Worldwide:
                      </span>
                    </Typography>
                    <p>
                      No matter where you are in the world, you can benefit from
                      our expertise. We are honored to be recognized as one of
                      the world's top astrology services, and our astrologers
                      are available to serve you regardless of your location.
                      With Om Astro Service, distance is no barrier to receiving
                      the best astrological guidance.
                    </p>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xxl" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grow in timeout={900}>
              <Card
                sx={{
                  borderRadius: 3,
                  bgcolor: "white",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 3 }}
                    gutterBottom
                  >
                    Comprehensive Astrological Services at Your Fingertips:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    At OM Astro Solution, we understand that every individual is
                    unique. That's why we offer a wide range of services
                    tailored to your specific needs. Our team of top astrologers
                    is skilled in deciphering the intricate details of your
                    birth chart, including your zodiac sign, moon sign, and the
                    positions of planets and modalities. With this information,
                    we can provide you with personalized guidance and expert
                    advice to address various aspects of your life.
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 3 }}
                    gutterBottom
                  >
                    Harness the Power of Planetary Transitions:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    One of the key benefits of consulting with OM Astro Solution
                    is gaining insight into the influence of planetary
                    transitions on your life. Our expert astrologers will help
                    you understand how planetary movements impact your
                    experiences. Whether it's navigating challenging times
                    during planetary retrogrades or capitalizing on favourable
                    celestial alignments, our guidance will empower you to make
                    informed decisions and lead a more harmonious life.
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 3 }}
                    gutterBottom
                  >
                    A Solution for Every Concern:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    No matter the nature of your concerns, our team of expert
                    Vedic astrologers is here to assist you. Our comprehensive
                    services cover a wide spectrum of life's challenges,
                    including:
                  </Typography>
                  <List sx={{ mb: 3 }}>
                    <ListItem>
                      <ListItemText
                        primary="Numerology"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Face-Reading"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Kundali-Milan (Matchmaking)"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Family Astrology"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Health Astrology"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Education & Career Astrology"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Job & Business Astrology"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Finance & Investment Astrology"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Marriage Astrology"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Legal Dispute Astrology"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Relationship Astrology"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                  </List>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Count on us for dependable and effective astrology solutions
                    that cater to the specific issues you're facing in your
                    life.
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 3 }}
                    gutterBottom
                  >
                    Connect with the Best Astrologer in India:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    When you require assistance in decoding planetary positions
                    and seeking solutions for your life's challenges, don't
                    hesitate to reach out to OM Astro Solution. Our experienced
                    astrologers in India are committed to providing you with
                    reliable and insightful astrological guidance.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Take the first step toward a more fulfilling life by
                    contacting the best astrologer in India today. Whether
                    you're seeking answers about your personal relationships,
                    career prospects, financial decisions, or any other aspect
                    of your life, our dedicated team is here to guide you
                    towards a brighter future. Embrace the wisdom of Vedic
                    astrology and unlock the secrets to a more balanced and
                    harmonious life with OM Astro Solution.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      mt: 3,
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: "medium",
                      bgcolor: "#ff9800",
                      "&:hover": {
                        bgcolor: "#e68900",
                        transform: "scale(1.05)",
                        transition: "all 0.3s ease-in-out",
                      },
                    }}
                    href="/contactus"
                  >
                    Contact Us Now
                  </Button>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
