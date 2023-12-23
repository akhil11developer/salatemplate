import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
const Feature = () => {
  return (
    <div>
    <Box sx={{padding:0, display: { md: "flex" }, gap: 1,justifyContent:"start",alignItems:"start" }}>
      <Card
      className="feature_card" 
        sx={{
          width: { md: 500 },
          display: "flex",
          // background:"red",
          boxShadow: "none",
          "@media screen and (max-width: 900px)": {
            flexDirection:"column",
            textAlign: "center",
            alignItems: "center",
          },
        }}
      >
        <CardContent>
          <Box
            sx={{
              width: 55,
              height: 55,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              background: "blue",
            }}
          >
            <ShieldOutlinedIcon fontSize="large" sx={{ color: "#fff" }} />
          </Box>

        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap:1,
          }}
        >
          <Typography
            sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "1.3rem" }}
          >
            24/7 Support
          </Typography>

          <Typography className="card_desc">
            Nunc molestie tellus sapien, quis laoreet orci
          </Typography>
        </CardContent>
      </Card>

      <Card
      className="feature_card" 
      
        sx={{
          width: { md: 500 },
          display: "flex",
          boxShadow: "none",
          "@media screen and (max-width: 900px)": {
            flexDirection:"column",
            textAlign: "center",
            alignItems: "center",
          },
        }}
      >
        <CardContent>
          <Box
            sx={{
              width: 55,
              height: 55,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              background: "#FFDD0F",
            }}
          >
            <ExtensionOutlinedIcon fontSize="large" sx={{ color: "#fff" }} />
          </Box>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap:1,

          }}
        >
          <Typography
            sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "1.3rem" }}
          >
            Take Ownership{" "}
          </Typography>
          <Typography  className="card_desc">
            Nunc molestie tellus sapien, quis laoreet orci
          </Typography>
        </CardContent>
      </Card>

      <Card
      className="feature_card" 

         sx={{
          width: { md: 500 },
          display: "flex",
          boxShadow: "none",
          "@media screen and (max-width: 900px)": {
            flexDirection:"column",
            textAlign: "center",
            alignItems: "center",
          },
        }}
      >
        <CardContent>
          <Box
            sx={{
              width: 55,
              height: 55,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              background: "red",
            }}
          >
            <BeachAccessOutlinedIcon fontSize="large" sx={{ color: "#fff" }} />
          </Box>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap:1,

          }}
        >
          <Typography
            sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "1.3rem" }}
          >
            Team Work
          </Typography>
          <Typography  className="card_desc">
            Nunc molestie tellus sapien, quis laoreet orci
          </Typography>
        </CardContent>
      </Card>
     
    </Box>
    <Divider variant="middle" />
    </div>
  );
};

export default Feature;
