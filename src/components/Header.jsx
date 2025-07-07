import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Box,
  Container,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../assets/images/omLogo.jpg";
import Facebook from "../assets/images/animation/icons8-facebook.gif";
import Instagram from "../assets/images/animation/icons8-instagram.gif";
import Whatsapp from "../assets/images/animation/icons8-whatsapp.gif";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorElAbout, setAnchorElAbout] = useState(null);
  const [anchorElServices, setAnchorElServices] = useState(null);
  const [anchorElGallery, setAnchorElGallery] = useState(null);

  const handleMenuOpen = (event, menu) => {
    if (menu === "about") setAnchorElAbout(event.currentTarget);
    if (menu === "services") setAnchorElServices(event.currentTarget);
    if (menu === "gallery") setAnchorElGallery(event.currentTarget);
  };
  const logoStyle = {
    width: "200px",
    height: "150px", // Adjusted for better proportion, overriding h-8 (32px)
    objectFit: "cover",
    marginTop: "-100px",
    marginLeft: "-100px",
    backgroundSize: "cover",
    borderRadius: "8px", // Slight rounding for a modern look
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
    animation: "float 3s ease-in-out infinite", // Floating animation
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover transition
  };
  const [isHovered, setIsHovered] = React.useState(false);
  const hoverStyle = isHovered
    ? {
        transform: "scale(1.05)", // Slight zoom on hover
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)", // Enhanced shadow on hover
      }
    : {};
  const handleMenuClose = () => {
    setAnchorElAbout(null);
    setAnchorElServices(null);
    setAnchorElGallery(null);
  };

  const toggleDrawer = (open) => () => {
    setIsMenuOpen(open);
  };

  const menuItems = [
    { label: "Home", to: "/" },
    {
      label: "About",
      submenu: [
        { label: "About Us", to: "/aboutus" },
        { label: "Awards", to: "/awards" },
        { label: "Certificate", to: "/certificate" },
      ],
    },
    {
      label: "Services",
      submenu: [
        { label: "Love Problem Solution", to: "/love-problem-solution" },
        {
          label: "Marriage Problem Solution",
          to: "/marriage-problem-solution",
        },
        {
          label: "Love Marriage Problem Solution",
          to: "/love-marriage-problem-solution",
        },
        { label: "Family Problem Solution", to: "/family-problem-solution" },
        {
          label: "Husband Wife Dispute Solution",
          to: "/husband-wife-dispute-solution",
        },
        { label: "Horoscope Reading", to: "/horoscope-reading" },
      ],
    },
    {
      label: "Gallery",
      submenu: [
        { label: "Photo Gallery", to: "/photo-gallery" },
        { label: "Video Gallery", to: "/video-gallery" },
      ],
    },
    { label: "Inquiry", to: "/inquiry" },
    { label: "Contact Us", to: "/contactus" },
  ];

  const drawerList = (
    <List className="w-64 bg-gray-800 text-white">
      {menuItems.map((item, index) => (
        <div key={index}>
          {item.submenu ? (
            <>
              <ListItem
                button
                onClick={(e) => handleMenuOpen(e, item.label.toLowerCase())}
              >
                <ListItemText primary={item.label} />
              </ListItem>
              <Menu
                anchorEl={
                  item.label === "About"
                    ? anchorElAbout
                    : item.label === "Services"
                    ? anchorElServices
                    : anchorElGallery
                }
                open={Boolean(
                  item.label === "About"
                    ? anchorElAbout
                    : item.label === "Services"
                    ? anchorElServices
                    : anchorElGallery
                )}
                onClose={handleMenuClose}
                className="bg-white mt-2"
              >
                {item.submenu.map((subItem, subIndex) => (
                  <MenuItem
                    key={subIndex}
                    onClick={handleMenuClose}
                    component={Link}
                    to={subItem.to}
                  >
                    {subItem.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <ListItem
              button
              component={Link}
              to={item.to}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          )}
        </div>
      ))}
    </List>
  );

  return (
    <Box>
      {/* Top Bar */}
      <AppBar
        position="static"
        color="default"
        className="bg-orange-500 text-white shadow-md"
      >
        <Box sx={{ display: "table-cell", float: "right" }}>
          <Typography variant="body2" className="flex items-center">
            <PhoneIcon fontSize="small" className="text-white mr-1" />
            <a
              href="tel:+919510613656"
              className="text-white hover:text-yellow-200"
            >
              +91 94173 39708
            </a>
          </Typography>
          <Typography variant="body2">
            <a
              href="mailto:omastroserviceindia@gmail.com"
              className="text-white hover:text-yellow-200"
            >
              omastroserviceindia@gmail.com
            </a>
          </Typography>
          <IconButton
            id="facebook-icon"
            href="https://www.facebook.com/profile.php?id=100069020956273&mibextid=rS40aB7S9Ucbxw6v"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300"
          >
            <img
              src={Facebook} // assuming Facebook is imported .gif
              alt="Facebook icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/"
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
            href="https://api.whatsapp.com/send?phone=9417339708&text=I'd%20like%20to%20know%20more%20about%20your%20services.%20Please%20contact%20me"
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
        </Box>
        <Container maxWidth="xl">
          <Toolbar className="flex justify-between items-center py-2">
            <Box className="flex items-center space-x-2">
              <img
                src={logo}
                alt="OM Astro Solution"
                style={{
                  ...logoStyle,
                  ...hoverStyle,
                }}
                className="h-8" // h-8 (32px) will be overridden by height in style
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </Box>
            <Container sx={{ display: "ruby" }}>
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <>
                      <Button
                        onClick={(e) =>
                          handleMenuOpen(e, item.label.toLowerCase())
                        }
                        className="text-blue-700 hover:text-blue-900"
                      >
                        {item.label}
                      </Button>
                      <Menu
                        anchorEl={
                          item.label === "About"
                            ? anchorElAbout
                            : item.label === "Services"
                            ? anchorElServices
                            : anchorElGallery
                        }
                        open={Boolean(
                          item.label === "About"
                            ? anchorElAbout
                            : item.label === "Services"
                            ? anchorElServices
                            : anchorElGallery
                        )}
                        onClose={handleMenuClose}
                        className="bg-white mt-2"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <MenuItem
                            key={subIndex}
                            onClick={handleMenuClose}
                            component={Link}
                            to={subItem.to}
                            className="text-gray-800 hover:bg-gray-100"
                          >
                            {subItem.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <Button
                      component={Link}
                      to={item.to}
                      className="text-blue-700 hover:text-blue-900"
                    >
                      {item.label}
                    </Button>
                  )}
                </div>
              ))}
              <IconButton
                className="lg:hidden text-gray-800 ml-auto"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Container>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={isMenuOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </Box>
  );
};

export default Header;
