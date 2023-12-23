import { Box, Container } from "@mui/material";
import "./App.css";
import DarkMode from "./components/DarkMode/DarkMode";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/Navbar";
import Feature from "./components/Feature/Feature";
import Divider from "@mui/material/Divider";
import Special from "./components/Special/Special";
import Story from "./components/Story/Story";
import Inshight from "./components/Insight/Inshight";
import Newsletter from "./components/Newsletter/Newsletter";
import Services from "./components/Services/Services";
import Blog from "./components/Blog/Blog";
import Grow from "./components/Grow/Grow";
import Footer from "./components/Footer/Footer";
import BottomFooter from "./components/Footer/BottomFooter";

function App() {
  return (
    <div>
      <DarkMode />
      <NavBar />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <Container
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            rowGap: 18,
            "@media screen and (max-width: 768px)": {
              rowGap: 8,
              mt: 4,
            },
          }}
        >
          <Hero />
          <Feature />
          <Special />
        </Container>
        <Box sx={{ background: "#FFDD0F" }}>
          <Story />
        </Box>

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 18,
            "@media screen and (max-width: 768px)": {
              rowGap: 8,
            },
          }}
        >
          <Inshight />
          <Newsletter />
          <Services />
          <Blog />
        </Container>
        <Box className="grow_box">
          <Grow />
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",gap:8,pb:6,
        "@media screen and (max-width: 525px)": {
          gap:4,
          pb:4
        }}}>
        <Footer />
        <Divider />
        <BottomFooter/>
        </Box>
      </Box>
    </div>
  );
}

export default App;
