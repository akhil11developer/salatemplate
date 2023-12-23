import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import "../../App.css";
import Grid from "@mui/material/Grid";
import women_img from "../../assets/image/footer.jpeg";

const Grow = () => {
  return (
    <Container className="grow_left">
      <Typography
        sx={{
          color: "#fff",
          fontSize: 16,
          fontWeight: 600,
          fontFamily: "Poppins",
          letterSpacing:2,
          

        }}
      >
        WORK WITH US
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          fontSize: 32,
          fontWeight: 600,
          fontFamily: "Poppins",
          letterSpacing:1.5,
        }}
      >
        Now let's grow yours!
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          fontSize: 18,
          width:"40%",
          "@media screen and (max-width: 900px)": {
            width:"auto",

            },
          // background:"red",
          // fontWeight: 600,
          // letterSpacing:1,

          fontFamily: "Poppins",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Typography>
      <Button
        className="story_btn"
        variant="outlined"
        sx={{
          //   background: "blue",
          border: "1px solid #fff ",
          width:"fit-content",
          textTransform: "none",
          color: "#fff",
          fontWeight: 600,
          textAlign: "center",
          padding: ".5rem 2rem .5rem 2rem",
          fontFamily: "Poppins",
          "&:hover": {
            background: "#fff",
            color: "#111",
          },
        }}
      >
        Contact Us{" "}
      </Button>
    </Container>
  );
};

export default Grow;
