import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import "../../App.css";
import Grid from "@mui/material/Grid";
import women_img from "../../assets/image/women.png";

const Story = () => {
  return (
    <Container>
    <Grid container spacing={2}>
      <Grid className="story_left" item xs={12} md={7}>
        <Typography
          sx={{ fontFamily: "Poppins", fontWeight: 700, letterSpacing: 2 }}
        >
          COMPANY’S VISION
        </Typography>
        <Typography className="story_left_title">
          The story behind how our company was founded{" "}
        </Typography>
        <Typography className="story_left_desc">
          Lorem ipsum dolor sit amet consectetur adipiscing elit eque ipsum odio
          justo amet urna auctor. At congue vulputate augue praesent mauris eu
          posuere pretium tellus. Viverra volutpat a est quis egestas id risus
          cursus venenatis.
        </Typography>
        <Box sx={{ mt: 3, mb: 3 }}>
          <Button
          className="story_btn"
            variant="outlined"
            sx={{
              //   background: "blue",
              border: "1px solid black",
              textTransform: "none",
              color: "#111",
              fontWeight: 600,
              textAlign: "center",
              padding: ".5rem 2rem .5rem 2rem",
              fontFamily: "Poppins",
              "&:hover": {
                background: "#111",
                color: "#fff",
              },
            }}
          >
            Read more story
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={0}
        md={5}
        sx={{
          "@media screen and (max-width: 900px)": {
            display: "none",
          },
        }}
      >
        <Box sx={{ textAlign: "end" }}>
          <img className="story_img" src={women_img} alt="heero" />
        </Box>
      </Grid>
    </Grid>
    </Container>
  );
};

export default Story;
