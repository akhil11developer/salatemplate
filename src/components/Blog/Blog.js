import { Box, Typography } from "@mui/material";
import React from "react";
import blog1 from "../../assets/image/blog1.jpg";
import blog2 from "../../assets/image/blog2.jpeg";
import blog3 from "../../assets/image/blog3.jpeg";

const data = [
  {
    id: 1,
    name: "Resources, Tutorials",
    desc: "How much does it cost to start and run a website?",
    img: blog1,
  },
  {
    id: 2,
    name: "Tutorials, Ui/Ux Design",
    desc: "How to become a web designer in 2021",
    img: blog2,
  },
  {
    id: 3,
    name: "Graphic Design",
    desc: "20 best affiliate programs for online creators in 2021",
    img: blog3,
  },
];
const Blog = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: 8,
      }}
    >
      <Typography className="service_title" sx={{}}>
        From our blog
      </Typography>
      <Box
        sx={{
          display: "flex",
          textAlign: "start",
          justifyContent: "center",
          gap: 5,
          flexWrap: "wrap",
        }}
      >
        {data.map((item, key) => (
          <Box
            sx={{
              width: 340,
              cursor:"pointer",
              "@media screen and (max-width: 1200px)": {
                width: 280,
              },
            }}
          >
            <Box sx={{ width:340,height:270,overflow:"hidden", "@media screen and (max-width: 1200px)": {
                width: 280,
                height:240
              }, }}>
              <img className="blog_img" src={item.img} alt="blog" />
            </Box>
            <Box sx={{ width: "fit-content" }}>
              <Typography className="blog_tag" sx={{}}>
                {item.name}
              </Typography>
              <Typography className="blog_title" sx={{}}>
                {item.desc}{" "}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Blog;
