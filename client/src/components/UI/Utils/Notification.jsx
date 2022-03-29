import { IconButton, Badge } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

const Notification = () => {
  return (
    <IconButton sx={{ color: "white" }}>
      <Badge badgeContent={4} color="info">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

export default Notification;
