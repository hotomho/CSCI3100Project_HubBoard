// navigation bar module
import React, {useEffect, useState} from "react";
import {Link as RouterLink} from "react-router-dom";
import {AppBar, Toolbar, Box, Typography, IconButton} from "@mui/material";
import {AddBoxRounded} from "@mui/icons-material";
import axios from "axios";
import {io} from "socket.io-client";
import SearchBar from "./SearchBar";
import Notification from "./Notification";
import {DropDownMenu} from "../";
import classes from "../../../styles/global.module.css";
import HuboardIcon from "../../../image/HubBoard.svg";
import menuIcon from "../../../image/ic_menu_en.svg";

// INFO: actual page need to set navigation
const pages = ["Profile"];

const Navbar = (props) => {
  let tbar = {display: 'initial', color: "white"};
  if (props.ToolbarButton === false) {
    tbar = {display: 'none'};
  }

  const [profilePhoto, setProfilePhoto] = useState();
  const [socket, setSocket] = useState(null);
  // INFO: get user profile photo on component mount
  useEffect(() => {
    const getUserProfilePic = async () => {
      try {
        const res = await axios.get("/api/user/profilePhoto", {
          responseType: "blob",
        });
        setProfilePhoto(URL.createObjectURL(res.data));
      } catch (err) {
        console.log(err.response);
      }
    };
    getUserProfilePic();
  }, []);

  useEffect(() => {
    setSocket(io("http://localhost:3001", {transports: ["websocket"]}));
  }, []);

// When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    socket && (
      <AppBar
        position="sticky"
        color="hOrange"
        sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}
      >
        <Toolbar sx={{px: ["0.7%", "0.7%"]}}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              minWidth="230px"
            >
              <IconButton
                color="inherit"
                onClick={props.handleDrawerToggle}
                sx={{display: "block"}}
              >
                <img
                  src={menuIcon}
                  className={classes.w3_svg_white}
                  height="45vw"
                  alt="Menu"
                  title="Menu"
                />
              </IconButton>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                minWidth="165px"
                component={RouterLink}
                to="/hubboard"
                sx={{textDecoration: "none"}}
              >
                <img
                  src={HuboardIcon}
                  height="50px"
                  alt="HubBoard"
                  title="HubBoard"
                />
                <Typography variant="h5" sx={{color: "white"}}>
                  HubBoard
                </Typography>
              </Box>
            </Box>
            <Box>
              <SearchBar/>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
              minWidth="150px"
            >
              <Notification socket={socket}/>

              <IconButton onClick={topFunction} sx={tbar}>
                <AddBoxRounded/>
              </IconButton>
              <DropDownMenu profilePhoto={profilePhoto} pages={pages}/>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    )
  );
};

export default Navbar;
