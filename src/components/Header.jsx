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
    { label: "Contact Us", to: "/contact" },
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
        <Container maxWidth="xl">
          <Toolbar className="flex justify-between items-center py-2">
            <Box className="flex items-center space-x-2">
              <img
                src="/images/logo.png"
                alt="Our Astro Service"
                className="h-8"
              />
              <Typography variant="h6" className="text-white">
                Our Astro Service
              </Typography>
            </Box>
            <Box className="flex items-center space-x-4">
              <Typography variant="body2" className="flex items-center">
                <PhoneIcon fontSize="small" className="text-white mr-1" />
                <a
                  href="tel:+919510613656"
                  className="text-white hover:text-yellow-200"
                >
                  +91 95106 13656
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
                href="https://www.facebook.com/omastroservice/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-200"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/omastroservice/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-200"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://api.whatsapp.com/send?phone=919510613656&text=I'd like to know more about your astrology services. Please contact me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-200"
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Navigation Bar */}
      <AppBar position="static" color="default" className="bg-white shadow-md">
        <Container maxWidth="xl">
          <Toolbar className="flex justify-center space-x-6 py-2">
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
