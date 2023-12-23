import { Box, Container, Typography } from "@mui/material";
import React from "react";

const BottomFooter = () => {
  return (
    <Container
      className="copyright"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        "@media screen and (max-width: 525px)": {
          flexDirection: "column",
          gap: 2,
        },
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: ".9rem",
          }}
        >
          © 2021 Uxper. All rights reserved
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 4 }}>
        <Typography
          className="link"
          sx={{
            fontFamily: "Poppins",
            fontSize: ".9rem",
          }}
        >
          Terms
        </Typography>
        <Typography
          className="link"
          sx={{
            fontFamily: "Poppins",
            fontSize: ".9rem",
          }}
        >
          Privacy Policy
        </Typography>
      </Box>
    </Container>
  );
};

export default BottomFooter;
