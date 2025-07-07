import React, { useState, useRef } from "react";
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
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { styled } from "@mui/material/styles";
import logo from "../assets/images/omLogo.jpg";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  borderBottom: "none",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2, 0),
}));

const BrandTypography = styled(Typography)(({ theme }) => ({
  color: "#111827",
  fontWeight: "bold",
  fontSize: "1.25rem",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: "#374151",
  fontWeight: 500,
  fontSize: "0.875rem",
  textTransform: "none",
  padding: "8px 16px",
  minWidth: "auto",
  "&:hover": {
    color: "#111827",
    backgroundColor: "transparent",
  },
}));

const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  color: "#374151",
  padding: theme.spacing(1),
  "&:hover": {
    color: "#111827",
    backgroundColor: "#f3f4f6",
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 320,
    backgroundColor: "#ffffff",
  },
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  borderBottom: "1px solid #e5e7eb",
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "#f3f4f6",
  },
  borderRadius: theme.spacing(1),
  margin: theme.spacing(0.5, 1),
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: "0.875rem",
  "&:hover": {
    backgroundColor: "#f3f4f6",
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: theme.spacing(1),
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e5e7eb",
    borderRadius: theme.spacing(1),
  },
}));

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorElAbout, setAnchorElAbout] = useState(null);
  const [anchorElServices, setAnchorElServices] = useState(null);
  const [anchorElGallery, setAnchorElGallery] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const closeTimeoutRef = useRef(null);

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

  const handleMenuOpen = (event, menu) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    if (menu === "about") setAnchorElAbout(event.currentTarget);
    if (menu === "services") setAnchorElServices(event.currentTarget);
    if (menu === "gallery") setAnchorElGallery(event.currentTarget);
  };

  const handleMenuClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setAnchorElAbout(null);
      setAnchorElServices(null);
      setAnchorElGallery(null);
    }, 100);
  };

  const toggleDrawer = (open) => () => {
    setIsMenuOpen(open);
  };

  const toggleSubmenu = (label) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const getAnchorEl = (label) => {
    switch (label) {
      case "About":
        return anchorElAbout;
      case "Services":
        return anchorElServices;
      case "Gallery":
        return anchorElGallery;
      default:
        return null;
    }
  };

  const logoStyle = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    backgroundSize: "cover",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    animation: "float 3s ease-in-out infinite",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const [isHovered, setIsHovered] = React.useState(false);
  const hoverStyle = isHovered
    ? {
        transform: "scale(1.05)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
      }
    : {};

  const drawerList = (
    <Box>
      <DrawerHeader>
        <Box className="flex items-center space-x-2">
          <img
            src={logo}
            alt="OM Astro Solution"
            style={{
              ...logoStyle,
              ...hoverStyle,
            }}
            className="h-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </Box>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <Box sx={{ padding: 2 }}>
        <List>
          {menuItems.map((item, index) => (
            <Box key={index}>
              {item.submenu ? (
                <>
                  <StyledListItem
                    button
                    onClick={() => toggleSubmenu(item.label)}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: 500,
                        fontSize: "0.875rem",
                      }}
                    />
                    {openSubmenu === item.label ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </StyledListItem>
                  {openSubmenu === item.label && (
                    <Box sx={{ paddingLeft: 2 }}>
                      {item.submenu.map((subItem, subIndex) => (
                        <StyledListItem
                          key={subIndex}
                          button
                          component="a"
                          href={subItem.to}
                          onClick={toggleDrawer(false)}
                        >
                          <ListItemText
                            primary={subItem.label}
                            primaryTypographyProps={{
                              fontSize: "0.8125rem",
                              color: "#6b7280",
                            }}
                          />
                        </StyledListItem>
                      ))}
                    </Box>
                  )}
                </>
              ) : (
                <StyledListItem
                  button
                  component="a"
                  href={item.to}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      fontSize: "0.875rem",
                    }}
                  />
                </StyledListItem>
              )}
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <StyledToolbar>
          {/* Logo/Brand */}
          <Box className="flex items-center space-x-2">
            <img
              src={logo}
              alt="OM Astro Solution"
              style={{
                ...logoStyle,
                ...hoverStyle,
              }}
              className="h-8"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 4,
            }}
          >
            {menuItems.map((item, index) => (
              <Box key={index}>
                {item.submenu ? (
                  <>
                    <NavButton
                      onClick={(e) =>
                        handleMenuOpen(e, item.label.toLowerCase())
                      }
                      onMouseEnter={(e) =>
                        handleMenuOpen(e, item.label.toLowerCase())
                      }
                      onMouseLeave={handleMenuClose}
                      endIcon={<ExpandMoreIcon fontSize="small" />}
                    >
                      {item.label}
                    </NavButton>
                    <StyledMenu
                      anchorEl={getAnchorEl(item.label)}
                      open={Boolean(getAnchorEl(item.label))}
                      onClose={handleMenuClose}
                      onMouseEnter={() => {
                        if (closeTimeoutRef.current) {
                          clearTimeout(closeTimeoutRef.current);
                        }
                      }}
                      onMouseLeave={handleMenuClose}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <StyledMenuItem
                          key={subIndex}
                          onClick={handleMenuClose}
                          component="a"
                          href={subItem.to}
                        >
                          {subItem.label}
                        </StyledMenuItem>
                      ))}
                    </StyledMenu>
                  </>
                ) : (
                  <NavButton component="a" href={item.to}>
                    {item.label}
                  </NavButton>
                )}
              </Box>
            ))}
          </Box>

          {/* Right Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Search Icon */}
            <IconButtonStyled aria-label="search">
              <SearchIcon fontSize="small" />
            </IconButtonStyled>

            {/* User Icon */}
            <IconButtonStyled aria-label="account">
              <PersonIcon fontSize="small" />
            </IconButtonStyled>

            {/* Mobile Menu Button */}
            <IconButtonStyled
              sx={{ display: { lg: "none" }, marginLeft: 1 }}
              onClick={toggleDrawer(true)}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButtonStyled>
          </Box>
        </StyledToolbar>
      </Container>

      {/* Mobile Drawer */}
      <StyledDrawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerList}
      </StyledDrawer>
    </StyledAppBar>
  );
};

export default Header;
