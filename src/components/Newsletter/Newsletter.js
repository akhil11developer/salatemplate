import {
  Box,
  Button,
  Container,
  Typography,
  InputAdornment,
} from "@mui/material";
import React from "react";
import "../../App.css";
import Grid from "@mui/material/Grid";
import newsletter_img from "../../assets/image/newsletter.svg";
import wave from "../../assets/image/wave.png";
import CheckIcon from "@mui/icons-material/Check";
import { inputLabelClasses } from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

const Newsletter = () => {
  return (
    <Box
      sx={{
        background: "blue",
        pt: 2,
        borderRadius: 3,
        // "@media screen and (max-width: 900px)": {
        //   pb: 2,
        //   pr: 2,
        // },
      }}
    >
      <Grid container spacing={2}>
        <Grid className="news_left" item xs={12} md={6}>
          <Typography className="news_left_title">
            Subscribe to <span className="border">Newsletter</span>
          </Typography>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "18px" }}>
            Uncover, analyze, track, and report on SEO data.
          </Typography>
          <TextField
            margin="normal"
            required={true}
            type="email"
            // value={inputValues.email}
            name="email"
            // onChange={handleChange}
            // onInput={(e)=>setEmail(e.target.value)}
            placeholder="Your email address"
            id="email"
            // label="Email address"
            // value={setEmail}
            // onChange={handleEmail}
            autoComplete="chrome-off"
            // inputRef={valueRef}
            // autoFocus
            inputProps={{
              autoComplete: "off",
              style: {
                color: "#111",
                fontFamily: "Poppins",
                zIndex: 5,
              },
            }}
            InputProps={{
              autoComplete: "off",

              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    sx={{
                      background: "#111",
                      zIndex: 9,
                      textTransform: "none",
                      color: "#fff",
                      fontWeight: 600,
                      textAlign: "center",
                      padding: ".5rem 2rem .5rem 2rem",
                      fontFamily: "Poppins",
                      "&:hover": {
                        background: "#111",
                      },
                    }}
                  >
                    Subscribe
                  </Button>
                </InputAdornment>
              ),
            }}
            sx={{
              width: 500,
              "@media screen and (max-width: 600px)": {
                width: "auto",
              },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  backgroundColor: "#fff",
                },
              },
            }}
          />

          <Box sx={{ display: { sm: "flex" }, gap: 2 }}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CheckIcon />
              No credit card required
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CheckIcon />
              Cancel anytime
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={0}
          md={6}
          sx={{
            "@media screen and (max-width: 900px)": {
              display: "none",
            },
          }}
        >
          <Box sx={{ textAlign: "end" }}>
            <img className="newsletter_img" src={newsletter_img} alt="heero" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Newsletter;
