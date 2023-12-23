import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../../App.css";

import logo from "../../assets/image/logo.svg";
// import signin from "../assets/signin.svg";
import { Chip } from "@mui/material";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";

const drawerWidth = 240;
const navItems = ["Demo", "Pages", "Portfolio", "Blog", "Shop"];
const navLoginItems = ["Let's Talk"];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      className="drawer"
      sx={{ textAlign: "center", height: "100%" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100px"
          height="28px"
          viewBox="0 0 100 28"
          version="1.1"
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="header/1/light"
              transform="translate(-130.000000, -26.000000)"
              fillRule="nonzero"
            >
              <g id="Group" transform="translate(130.000000, 26.000000)">
                <path
                  d="M9.386,27.816 C14.136,27.816 18.392,25.118 18.582,20.406 C18.772,17.328 17.328,14.06 11.438,12.426 L8.208,11.476 C5.396,10.792 5.092,9.234 5.092,8.474 C5.092,6.612 6.84,5.396 9.006,5.396 C11.438,5.396 12.92,6.726 12.92,8.816 L17.784,8.816 C17.784,3.952 14.022,0.912 9.082,0.912 C4.256,0.912 0.266,3.99 0.266,8.588 C0.266,10.868 1.178,14.25 6.878,15.884 L10.108,16.72 C12.616,17.404 13.832,18.582 13.718,20.292 C13.604,22.078 12.008,23.446 9.386,23.446 C6.574,23.446 4.978,21.698 4.864,19.76 L0,19.76 C0,24.244 3.8,27.816 9.386,27.816 Z M30.742,27.74 C32.452,27.74 35.15,26.942 36.252,25.118 L36.252,27.398 L40.888,27.398 L40.888,9.652 L36.252,9.652 L36.252,11.856 C34.922,9.918 32.376,9.272 30.742,9.272 C26.068,9.272 21.698,12.844 21.698,18.506 C21.698,24.168 26.068,27.74 30.742,27.74 Z M31.388,23.294 C28.804,23.294 26.486,21.394 26.486,18.506 C26.486,15.618 28.804,13.718 31.388,13.718 C33.82,13.718 36.252,15.466 36.252,18.506 C36.252,21.546 33.934,23.294 31.388,23.294 Z M50.768,27.398 L50.768,0 L46.132,0 L46.132,27.398 L50.768,27.398 Z M63.954,27.74 C65.664,27.74 68.362,26.942 69.464,25.118 L69.464,27.398 L74.1,27.398 L74.1,9.652 L69.464,9.652 L69.464,11.856 C68.134,9.918 65.588,9.272 63.954,9.272 C59.28,9.272 54.91,12.844 54.91,18.506 C54.91,24.168 59.28,27.74 63.954,27.74 Z M64.6,23.294 C62.016,23.294 59.698,21.394 59.698,18.506 C59.698,15.618 62.016,13.718 64.6,13.718 C67.032,13.718 69.464,15.466 69.464,18.506 C69.464,21.546 67.146,23.294 64.6,23.294 Z"
                  id="Sala"
                />
                <g
                  id="arrow"
                  transform="translate(84.000000, 0.000000)"
                  fill="#0057FC"
                >
                  <polygon
                    id="Shape"
                    points="1.88140704 16 13.319933 4.56530476 13.319933 15.1051574 16 15.0569324 16 0 0.940703518 0 0.940703518 2.63362358 11.438526 2.68184863 0 14.1165439"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>{" "}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText className="link" primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <Button
              sx={{
                background: "blue",
                textTransform: "none",
                color: "#fff",
                fontWeight: 600,
                padding: ".5rem 2.5rem .5rem 2.5rem",
                fontSize: "1.1rem",
                fontFamily: "Poppins",
                letterSpacing: 2,
                "&:hover": {
                  background: "blue",
                },
              }}
            >
              Let's Talk
            </Button>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        position="static"
        component="nav"
        className="nav_bar"
        sx={{ padding: 2, backgroundColor: "#fff", boxShadow: "none" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div className="main_logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="100px"
              height="28px"
              viewBox="0 0 100 28"
              version="1.1"
            >
              <g
                id="Symbols"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="header/1/light"
                  transform="translate(-130.000000, -26.000000)"
                  fillRule="nonzero"
                >
                  <g id="Group" transform="translate(130.000000, 26.000000)">
                    <path
                      d="M9.386,27.816 C14.136,27.816 18.392,25.118 18.582,20.406 C18.772,17.328 17.328,14.06 11.438,12.426 L8.208,11.476 C5.396,10.792 5.092,9.234 5.092,8.474 C5.092,6.612 6.84,5.396 9.006,5.396 C11.438,5.396 12.92,6.726 12.92,8.816 L17.784,8.816 C17.784,3.952 14.022,0.912 9.082,0.912 C4.256,0.912 0.266,3.99 0.266,8.588 C0.266,10.868 1.178,14.25 6.878,15.884 L10.108,16.72 C12.616,17.404 13.832,18.582 13.718,20.292 C13.604,22.078 12.008,23.446 9.386,23.446 C6.574,23.446 4.978,21.698 4.864,19.76 L0,19.76 C0,24.244 3.8,27.816 9.386,27.816 Z M30.742,27.74 C32.452,27.74 35.15,26.942 36.252,25.118 L36.252,27.398 L40.888,27.398 L40.888,9.652 L36.252,9.652 L36.252,11.856 C34.922,9.918 32.376,9.272 30.742,9.272 C26.068,9.272 21.698,12.844 21.698,18.506 C21.698,24.168 26.068,27.74 30.742,27.74 Z M31.388,23.294 C28.804,23.294 26.486,21.394 26.486,18.506 C26.486,15.618 28.804,13.718 31.388,13.718 C33.82,13.718 36.252,15.466 36.252,18.506 C36.252,21.546 33.934,23.294 31.388,23.294 Z M50.768,27.398 L50.768,0 L46.132,0 L46.132,27.398 L50.768,27.398 Z M63.954,27.74 C65.664,27.74 68.362,26.942 69.464,25.118 L69.464,27.398 L74.1,27.398 L74.1,9.652 L69.464,9.652 L69.464,11.856 C68.134,9.918 65.588,9.272 63.954,9.272 C59.28,9.272 54.91,12.844 54.91,18.506 C54.91,24.168 59.28,27.74 63.954,27.74 Z M64.6,23.294 C62.016,23.294 59.698,21.394 59.698,18.506 C59.698,15.618 62.016,13.718 64.6,13.718 C67.032,13.718 69.464,15.466 69.464,18.506 C69.464,21.546 67.146,23.294 64.6,23.294 Z"
                      id="Sala"
                    />
                    <g
                      id="arrow"
                      transform="translate(84.000000, 0.000000)"
                      fill="#0057FC"
                    >
                      <polygon
                        id="Shape"
                        points="1.88140704 16 13.319933 4.56530476 13.319933 15.1051574 16 15.0569324 16 0 0.940703518 0 0.940703518 2.63362358 11.438526 2.68184863 0 14.1165439"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <IconButton
            // color="inherit"
            className="menu_icon"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              // mr: 2,
              display: { sm: "none" },
              // color: "#111",
              float: "right",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              background: "",
              width: "40%",
              justifyContent: "space-evenly",
            }}
          >
            {navItems.map((item) => (
              <Button
                className="nav_btn"
                key={item}
                sx={{
                  fontWeight: 600,
                  textTransform: "none",
                  fontFamily: "Poppins",
                  background: "",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              background: "",
              // width: "40%",
              justifyContent: "space-around",
            }}
          >
            <Button
              sx={{
                background: "blue",
                textTransform: "none",
                color: "#fff",
                fontWeight: 600,
                padding: ".5rem 2.5rem .5rem 2.5rem",
                fontSize: "1.1rem",
                fontFamily: "Poppins",
                letterSpacing: 2,
                "&:hover": {
                  background: "blue",
                },
              }}
            >
              Let's Talk
            </Button>

            {/* ))} */}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
