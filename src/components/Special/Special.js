import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import "../../App.css";
import Grid from "@mui/material/Grid";
import special_img from "../../assets/image/megacreator.png";
import CheckIcon from "@mui/icons-material/Check";

const Special = () => {
  return (
    <Grid container spacing={2}>
      <Grid className="special_left" item xs={12} md={6}>
        <Typography sx={{color:"blue",fontFamily: "Poppins",fontWeight:700,letterSpacing:2}}>WHO WE ARE</Typography>
        <Typography className="special_left_title">
          We specialize in UI/UX, web development, digital marketing.
        </Typography>
        <Typography sx={{ fontFamily: "Poppins" }}>
          It is a long established fact that a reader will be distracted by the
          readable content{" "}
        </Typography>
        <Box sx={{ display: "flex",gap:2 }}>
          <CheckIcon
            sx={{
              background: "blue",
              padding: 0.4,
              borderRadius: "50%",
              color: "#fff",
            }}
          />
          <Typography sx={{ fontFamily: "Poppins",fontWeight:600 }}>
            Vivamus ac elementum urna.{" "}
          </Typography>
        </Box>
        <Box sx={{ display: "flex",gap:2 }}>
          <CheckIcon
            sx={{
              background: "blue",
              padding: 0.4,
              borderRadius: "50%",
              color: "#fff",
            }}
          />
          <Typography sx={{ fontFamily: "Poppins",fontWeight:600 }}>
          Feugiat metus suscipiti.
          </Typography>
        </Box>
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
            Get in touch
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={
          {
            // "@media screen and (max-width: 900px)": {
            //   display: "none",
            // },
          }
        }
      >
        <Box sx={{ textAlign: "end"}}>
          <img className="special_img" src={special_img} alt="heero" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Special;
