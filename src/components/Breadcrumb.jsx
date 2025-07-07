import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Breadcrumbs as MuiBreadcrumbs,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
const CustomBreadcrumbs = styled(MuiBreadcrumbs)(({ theme }) => ({
  "& .MuiBreadcrumbs-ol": {
    background: "linear-gradient(to right,)",
    padding: "10px 20px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "url('../src/assets/images/timer_bg.webp') no-repeat center",
      opacity: 0.3,
      zIndex: 0,
    },
  },
  "& .MuiBreadcrumbs-li": {
    display: "inline-flex",
    alignItems: "center",
    color: "#ff9800",
    "& a": {
      color: "#fff",
      textDecoration: "none",
      "&:hover": {
        color: "#ff9800",
        textDecoration: "underline",
      },
    },
    "&:not(:last-child)::after": {
      content: '" - "',
      margin: "0 8px",
      color: "#ff9800",
    },
  },
  "& .MuiBreadcrumbs-li:last-child": {
    color: "#ff9800",
    fontWeight: 500,
  },
}));

const Breadcrumb = ({ title, parentLink, parentTitle }) => {
  return (
    <Box
      sx={{
        position: "relative",
        background: "#1a262e",
        padding: "20px 0",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "url('../src/assets/images/timer_bg.webp') no-repeat center",
          opacity: 0.3,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: "#ff9800", textAlign: "center", mb: 2 }}
        >
          {title}
        </Typography>
        <CustomBreadcrumbs aria-label="breadcrumb">
          <Button style={{ color: "#ff9800" }}>
            <Link to="/" style={{ color: "#ff9800", textDecoration: "none" }}>
              Home
            </Link>
          </Button>
          {parentLink && parentTitle && (
            <Link
              to={parentLink}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {parentTitle}
            </Link>
          )}
          <Typography color="text.primary" sx={{ color: "#FFFF" }}>
            {title}
          </Typography>
        </CustomBreadcrumbs>
      </Box>
    </Box>
  );
};

export default Breadcrumb;
