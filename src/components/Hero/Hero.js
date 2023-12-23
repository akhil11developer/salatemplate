import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import "../../App.css";
import Grid from "@mui/material/Grid";
import hero_img from "../../assets/image/hero.png";

const Hero = () => {
  return (
    <Grid container spacing={2}>
      <Grid className="hero_left" item xs={12} md={5}>
        <Box className="hero_left_chip" sx={{ color: "black" }}>
          STARTUP
        </Box>
        <Typography className="hero_left_title" variant="h2" component="h2">
          The <span className="circle"> template </span>your startup needed
        </Typography>
        <Typography sx={{ fontFamily: "Poppins" }}>
          Awesome product pages. Mobile friendly. Easy.{" "}
        </Typography>
        <Box sx={{ mt: 3, mb: 3 }}>
          <Button
            sx={{
              background: "blue",
              textTransform: "none",
              color: "#fff",
              fontWeight: 600,
              textAlign: "center",
              padding: ".5rem 2rem .5rem 2rem",
              fontFamily: "Poppins",
              "&:hover": {
                background: "blue",
              },
            }}
          >
            Let's Talk - Send a message
          </Button>
        </Box>
        <Typography variant="h5" className="hero_left_number link">
          Hotline. (84) 810-3402{" "}
        </Typography>
      </Grid>
      <Grid
        item
        xs={0}
        md={7}
        sx={{
          "@media screen and (max-width: 900px)": {
            display: "none",
          },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <img className="hero_img" src={hero_img} alt="heero" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
