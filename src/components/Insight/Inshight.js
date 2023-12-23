import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import "../../App.css";
import Grid from "@mui/material/Grid";
import insight_img from "../../assets/image/insight.png";
import PercentIcon from "@mui/icons-material/Percent";
import AddIcon from "@mui/icons-material/Add";
const Inshight = () => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        md={7}
        sx={
          {
            // "@media screen and (max-width: 900px)": {
            //   display: "none",
            // },
          }
        }
      >
        <Box sx={{ textAlign: "start" }}>
          <img className="insight_img" src={insight_img} alt="heero" />
        </Box>
      </Grid>

      <Grid className="insight_left" item xs={12} md={5}>
        <Typography
          sx={{
            color: "blue",
            fontFamily: "Poppins",
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          INSIGHT
        </Typography>
        <Typography className="insight_left_title">
          Insight that drives change{" "}
        </Typography>
        <Typography className="insight_left_desc">
          It is a long established fact that a reader will be distracted by the
          readable content
        </Typography>
        <Box
          sx={{
            display: "flex",
            background: "",
            width: "90%",
            justifyContent: "space-between",
            "@media screen and (max-width: 500px)": {
                width: "auto",
                },
          }}
        >
          <Box sx={{ display: "block" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                display: "flex",
                "@media screen and (max-width: 768px)": {
                  fontSize: "42px",
                },
                alignItems: "center",
              }}
            >
              98
              <PercentIcon
                fontSize="56px"
                sx={{
                  color: "blue",
                  "@media screen and (max-width: 768px)": {
                    fontSize: "42px",
                  },
                }}
              />
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "19px",
                color: "#565656",
                "@media screen and (max-width: 768px)": {
                  fontSize: "1rem",
                },
              }}
            >
              Private Office{" "}
            </Typography>
          </Box>
          <Box sx={{ display: "block" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                display: "flex",
                "@media screen and (max-width: 768px)": {
                  fontSize: "42px",
                },

                alignItems: "center",
              }}
            >
              20M
              <AddIcon
                fontSize="56px"
                sx={{
                  color: "blue",
                  stroke: "blue",
                  strokeWidth: 1,
                  "@media screen and (max-width: 768px)": {
                    fontSize: "42px",
                  },
                }}
              />
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "19px",
                color: "#565656",
                "@media screen and (max-width: 768px)": {
                  fontSize: "1rem",
                },
              }}
            >
              Coworking Desks{" "}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            background: "",
            width: "90%",
            justifyContent: "space-between",
            "@media screen and (max-width: 500px)": {
                width: "auto",
                },
          }}
        >
          <Box sx={{ display: "block" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                "@media screen and (max-width: 768px)": {
                  fontSize: "42px",
                },
              }}
            >
              100K
              <AddIcon
                fontSize="56px"
                sx={{
                  color: "blue",
                  stroke: "blue",
                  strokeWidth: 1,
                  "@media screen and (max-width: 768px)": {
                    fontSize: "42px",
                  },
                }}
              />
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "19px",
                color: "#565656",
                "@media screen and (max-width: 768px)": {
                  fontSize: "1rem",
                },
              }}
            >
              Meeting Rooms
            </Typography>
          </Box>
          <Box sx={{ display: "block" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                "@media screen and (max-width: 768px)": {
                  fontSize: "42px",
                },
              }}
            >
              55
              <PercentIcon
                fontSize="56px"
                sx={{
                  color: "blue",
                  "@media screen and (max-width: 768px)": {
                    fontSize: "42px",
                  },
                }}
              />
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "19px",
                color: "#565656",
                "@media screen and (max-width: 768px)": {
                  fontSize: "1rem",
                },
              }}
            >
              Meeting Rooms
            </Typography>
          </Box>
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
            See our services{" "}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Inshight;
