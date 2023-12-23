import { Box, Typography } from "@mui/material";
import React from "react";
import service1 from "../../assets/image/service1.svg";
import service2 from "../../assets/image/service2.svg";
import service3 from "../../assets/image/service3.svg";
import service4 from "../../assets/image/service4.svg";
import service5 from "../../assets/image/service5.svg";
import service6 from "../../assets/image/service6.svg";
import "../../App.css";
import Grid from "@mui/material/Grid";

const data = [
  {
    id: 1,
    name: "Qualitative Research",
    desc: "It is a long established fact that a reader will be distracted",
    img: service1,
  },
  {
    id: 2,
    name: "Social Marketing",
    desc: "It is a long established fact that a reader will be distracted",
    img: service2,
  },
  {
    id: 3,
    name: "Graphic Design",
    desc: "It is a long established fact that a reader will be distracted",
    img: service3,
  },
  {
    id: 4,
    name: "Development",
    desc: "It is a long established fact that a reader will be distracted",
    img: service4,
  },
  {
    id: 5,
    name: "Reportyng & Analysis",
    desc: "It is a long established fact that a reader will be distracted",
    img: service5,
  },
  {
    id: 6,
    name: "People Science",
    desc: "It is a long established fact that a reader will be distracted",
    img: service6,
  },
];

const Services = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
      <Box>
        <Typography
          sx={{
            color: "blue",
            fontFamily: "Poppins",
            fontWeight: 600,
            letterSpacing: 2,
          }}
        >
          SERVICES
        </Typography>
        <Typography className="service_title" sx={{}}>
          Built for all company sizes
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ mt: 10, justifyContent: "center" }}>
        {data.map((item, key) => (
          <Grid item md={6}>
            <Box
            className="service_card"
              sx={{
                display: "flex",
                textAlign: "start",
                columnGap: 5,
                alignItems: "center",
                border: "1px solid #EEEEEE",
                width: "fit-content",
                padding: 3,

                // "&:hover": {
                //   boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  
                // },
                "@media screen and (max-width: 525px)": {
                  flexDirection: "column",
                  columnGap: 0,
                  rowGap: 3,
                  textAlign: "center",
                },
              }}
            >
              <Box>
                <img className="service_img" src={item.img} alt="service" />
              </Box>
              <Box>
                <Typography className="service_name" sx={{}}>
                  {item.name}
                </Typography>
                <Typography className="service_desc" sx={{}}>
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
