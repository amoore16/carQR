import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

import BasicMenu from "../Menu/Menu";
import { ButtonTypeEnum } from "../Menu/MenuButton";

interface ButtonAppBarProps {
  match?: any;
}

export default function ButtonAppBar(props: ButtonAppBarProps) {
  const profileMenuItems = [
    { name: "Profile", to: "/Profile" },
    { name: "Your Car", to: '/Car' },
    { name: "Settings", to: "/Settings"},
    { name: "Logout", to: "/Logout"},
  ];

  const navigationMenuItems = [
    { name: "Home", to: "/"},
    { name: "Gallery", to: "/Gallery" },
    { name: "Meetups", to: "/Meetups" },
  ];

  const isLoggedIn: boolean = false;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <BasicMenu
            buttonType={ButtonTypeEnum.ICONBUTTON}
            menuItems={navigationMenuItems}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {isLoggedIn ? (
            <BasicMenu
              buttonType={ButtonTypeEnum.BUTTON}
              menuItems={profileMenuItems}
              title="MY ACCOUNT"
            />
          ) : (
            <Button color="inherit"><Link to="/login">LOGIN</Link></Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
