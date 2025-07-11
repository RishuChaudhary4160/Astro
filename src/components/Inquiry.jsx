import React, { useEffect, useState } from "react";
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
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import Breadcrumb from "../components/Breadcrumb";
import img1 from "../assets/images/inquiry.jpg";

const Inquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Inquiry | OM Astro Solution";
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.xyz.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      const result = await response.json();
      console.log("Success:", result);
      alert("Thank you for your inquiry! We will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(err.message);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Breadcrumb title="Inquiry" />
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: "linear-gradient(135deg, #fff8e1 0%, #fef3ec 100%)",
          borderBottom: "1px solid",
          borderColor: "grey.200",
        }}
      >
        <Container maxWidth="xxl">
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
                    image={img1}
                    alt="About"
                    sx={{ borderRadius: "10px 10px 0 0" }}
                  />
                </Card>
              </Grow>
            </Grid>
            <Grid item sx={{ width: "80rem", marginTop: "4rem" }}>
              <Box
                className="ast_about_info"
                sx={{
                  paddingLeft: { md: "20px" },
                  textAlign: "left",
                  boxShadow: 2,
                  ml: 3,
                }}
              >
                <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                  <div className="ast_about_info">
                    <h3>
                      <Typography
                        variant="h5"
                        component="h1"
                        style={{ paddingTop: "18px" }}
                      >
                        <span style={{ color: "#ff9800", paddingTop: "18px" }}>
                          Send us your Inquiry
                        </span>
                      </Typography>
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        {/* Pair 1: Name and Email */}
                        <Grid item xs={12} sm={4}>
                          <TextField
                            fullWidth
                            label="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            variant="outlined"
                            InputProps={{ sx: { borderRadius: 1 } }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <TextField
                            fullWidth
                            label="Your Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            variant="outlined"
                            InputProps={{ sx: { borderRadius: 1 } }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={4} />

                        {/* Pair 2: Phone and Subject */}
                        <Grid item xs={12} sm={4}>
                          <TextField
                            fullWidth
                            label="Your Phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            variant="outlined"
                            InputProps={{ sx: { borderRadius: 1 } }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Select
                            fullWidth
                            label="Select Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            variant="outlined"
                            displayEmpty
                            sx={{ borderRadius: 1 }}
                          >
                            <MenuItem value="" disabled>
                              Select Subject *
                            </MenuItem>
                            <MenuItem value="Love Problem Solution">
                              Love Problem Solution
                            </MenuItem>
                            <MenuItem value="Marriage Problem Solution">
                              Marriage Problem Solution
                            </MenuItem>
                            <MenuItem value="Family Problem Solution">
                              Family Problem Solution
                            </MenuItem>
                            <MenuItem value="Horoscope Reading">
                              Horoscope Reading
                            </MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                          </Select>
                        </Grid>
                        <Grid item xs={12} sm={4} />
                        <Grid item xs={12} sm={8}>
                          <TextField
                            fullWidth
                            label="Your Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            variant="outlined"
                            multiline
                            rows={4}
                            InputProps={{ sx: { borderRadius: 1 } }}
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        sx={{ textAlign: "center", mt: { xs: 3, sm: 0 } }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          disabled={loading}
                          sx={{
                            mb: 4,
                            px: 4,
                            py: 1.5,
                            borderRadius: 1,
                            textTransform: "none",
                            fontWeight: "medium",
                            bgcolor: "#ff9800",
                            "&:hover": { bgcolor: "#e68900" },
                          }}
                        >
                          {loading ? "Sending..." : "Send Inquiry"}
                        </Button>
                        {error && (
                          <Typography
                            color="error"
                            sx={{ mt: 2, textAlign: "center" }}
                          >
                            {error}
                          </Typography>
                        )}
                      </Grid>
                    </form>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Inquiry;
