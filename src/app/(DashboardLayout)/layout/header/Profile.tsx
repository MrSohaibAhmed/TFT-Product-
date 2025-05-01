import React, { useState } from "react";
import Link from "next/link";
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Icon } from "@iconify/react";

import { UserRound } from "lucide-react";
import { IconListCheck, IconMail, IconUser } from "@tabler/icons-react";

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <Box sx={{}}>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            color: "primary.main",
            cursor: "pointer",

          }),
        }}
        onClick={handleClick2}
      >
        {/* <Avatar
          src="/images/profile/user-1.jpg"
          alt="image"
          sx={{
            width: 35,
            height: 35,
          }}
        /> */}
        <Icon icon="mdi:account-circle" width="32" height="32" color="" />
        {/* <UserRound size={26} color="white" /> */}
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          // backgroundColor:"#0D113B",

          "& .MuiMenu-paper": {
            width: "200px",
            backgroundColor: "#0D113B",
            border: "1px solid white",
            color: "white",
          },
          // color:"#0D113B",
          //  backgroundColor:"#0D113B"
        }}
      >
        <MenuItem sx={{"&:hover": {
                backgroundColor: "#6C63FF",
                cursor: "pointer",
              }}}>
          <ListItemIcon
            sx={{
              color: "white",
              
            }}
          >
            <IconUser width={20} />
          </ListItemIcon>
          <ListItemText>My Profile</ListItemText>
        </MenuItem>
        <MenuItem sx={{"&:hover": {
                backgroundColor: "#6C63FF",
                cursor: "pointer",
              }}}>
          <ListItemIcon sx={{ color: "white" }}>
            <IconMail width={20} />
          </ListItemIcon>
          <ListItemText>My Account</ListItemText>
        </MenuItem>
        <MenuItem sx={{"&:hover": {
                backgroundColor: "#6C63FF",
                cursor: "pointer",
              }}}>
          <ListItemIcon sx={{ color: "white" }}>
            <IconListCheck width={20} />
          </ListItemIcon>
          <ListItemText>My Tasks</ListItemText>
        </MenuItem>
        <Box
          sx={{
            mt: 1,
            py: 1,
            px: 2,
          }}
        >
          <Button
            href="/authentication/login"
            // variant=""
            // color="primary"
            component={Link}
            fullWidth
            sx={{
            backgroundColor: "#6C63FF",
            color:"white"

            }}
          >
            Logout
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;