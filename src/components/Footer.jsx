import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../assets/images/logo.png";
import Facebook from "../assets/images/animation/icons8-facebook.gif";
import Instagram from "../assets/images/animation/icons8-instagram.gif";
import Whatsapp from '../assets/images/animation/icons8-whatsapp.gif';
import Contact from '../assets/images/animation/icons8-contact-us.gif'

const Footer = () => {
  return (
    <Box className="bg-teal-900 text-white py-8" sx={{backgroundColor:'#536e81'}}>
      <Grid mt={5}>
      {/* <Container maxWidth="lg"> */}
      <Box mt={3} >
        <Box mt={5} >
          <img
            src={logo}
            alt="OM Astro Solution"
            className="h-12 mx-auto md:mx-0 mb-2"
          />
          <Box >
            <IconButton
            id="facebook-icon"
              href="https://www.facebook.com/omastroservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300"
            >
              <img
                src={Facebook} // assuming Facebook is imported .gif
                alt="Facebook icon"
                style={{ width: "100%", height: "100%", objectFit: "cover",background:'none' }}
              />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/omastroservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300"
            >
                <img
                src={Instagram} // assuming Facebook is imported .gif
                alt="Facebook icon"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </IconButton>
            <IconButton
              href="https://api.whatsapp.com/send?phone=919510613656&text=I'd%20like%20to%20know%20more%20about%20your%20services.%20Please%20contact%20me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300"
            >
        <img
                src={Whatsapp} // assuming Facebook is imported .gif
                alt="Facebook icon"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </IconButton>
            <IconButton
              href="tel:+919510613656"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300"
            >
            <img
                src={Contact} // assuming Facebook is imported .gif
                alt="Facebook icon"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Grid sx={{ display: "flex", justifyContent:'space-evenly' }}>
        <Grid sx={{ display: "flex", justifyContent: "center" }}>
          <Grid sx={{ width: "45rem" }} mt={4}>
            <Grid mt={2}>
            <Typography variant="h6" className="text-orange-500 mb-2">
              About OM Astro Solution
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              OM Astro Solution a top astrologer in India, with over a decade of
              experience. He specializes in Vedic astrology and offers solutions
              for things like love problem solution, love marriage problem,
              marriage problem solution, husband wife dispute, family problem
              solution, horoscopes reading and helping with everyday life
              problems.
            </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "space-between",width:'60rem' }} mt={5}>
          <Box id="Quick_Links">
            <Typography variant="h6" className="text-orange-500 mb-2">
              Quick Links
            </Typography>
            <List>
              <ListItem>
                <Link to="/" className="text-white hover:text-yellow-300">
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/aboutus"
                  className="text-white hover:text-yellow-300"
                >
                  About Us
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/photo-gallery"
                  className="text-white hover:text-yellow-300"
                >
                  Photo Gallery
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/video-gallery"
                  className="text-white hover:text-yellow-300"
                >
                  Video Gallery
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/inquiry"
                  className="text-white hover:text-yellow-300"
                >
                  Inquiry
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/contact"
                  className="text-white hover:text-yellow-300"
                >
                  Contact Us
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box id="Our_Services">
            <Typography variant="h6" className="text-orange-500">
              Our Services
            </Typography>
            <List sx={{}}>
              <ListItem>
                <Link
                  to="/love-problem-solution"
                  className="text-white hover:text-yellow-300"
                >
                  Love Problem Solution
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/marriage-problem-solution"
                  className="text-white hover:text-yellow-300"
                >
                  Marriage Problem Solution
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/love-marriage-problem-solution"
                  className="text-white hover:text-yellow-300"
                >
                  Love Marriage Problem Solution
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/family-problem-solution"
                  className="text-white hover:text-yellow-300"
                >
                  Family Problem Solution
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/husband-wife-dispute-solution"
                  className="text-white hover:text-yellow-300"
                >
                  Husband Wife Dispute Solution
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/horoscope-reading"
                  className="text-white hover:text-yellow-300"
                >
                  Horoscope Reading
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box id="Get_In_Touch">
            <Typography variant="h6" className="text-orange-500 mb-2">
              Get In Touch
            </Typography>
            <List>
              <ListItem>
                <Typography variant="body2">
                  <span className="mr-2">🏠</span>Ahmedabad, Gujarat, India
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">
                  <span className="mr-2">📧</span>
                  <a
                    href="mailto:ourastroserviceindia@gmail.com"
                    className="text-white hover:text-yellow-300"
                  >
                    ourastroserviceindia@gmail.com
                  </a>
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">
                  <span className="mr-2">📞</span>
                  <a
                    href="tel:+9999999999999"
                    className="text-white hover:text-yellow-300"
                  >
                    +91 0000000 999999
                  </a>
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">
                  <span className="mr-2">🌐</span>
                  <Link to="/" className="text-white hover:text-yellow-300">
                    www.ourastroservice.com
                  </Link>
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
      <Divider className="my-6 bg-gray-600" />
      <Typography variant="body2" className="text-center mb-2">
        <b>Disclaimer :</b> There are no guarantees that every individual using
        this assist will with getting their optimal results doubtlessly
        Astrological results to depend upon a huge load of factors and the
        results may change starting with one individual then onto the next.
      </Typography>
      <Typography variant="body2" className="text-center">
        Copyright © 2025 <b>OM Astro Solution</b>. All Rights Reserved. |
        Powered By:{" "}
        <a
          href="https://www.techspinsolutions.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-300"
        >
          Techspin Solutions
        </a>
      </Typography>
      {/* </Container> */}

      {/* Fixed Call & WhatsApp Buttons */}
      <Box className="fixed bottom-4 left-4 flex space-x-2 z-50">
        <IconButton
          href="tel:+919510613656"
          className="bg-red-500 text-white hover:bg-red-600"
        >
          <PhoneIcon />
        </IconButton>
        <IconButton
          href="https://api.whatsapp.com/send?phone=919510613656&text=I'd like to know more about your astrology services. Please contact me"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white hover:bg-green-600"
        >
          <WhatsAppIcon />
        </IconButton>
      </Box>
    </Grid>
    </Box>
    
  );
};

export default Footer;
