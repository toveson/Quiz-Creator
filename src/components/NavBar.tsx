import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, IconButton, Stack, Tab, Tabs } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface navBarProps {
  currentPage: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
}

export const NavBar: React.FC<navBarProps> = (props) => {
  const { currentPage, setCurrentPage } = props;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const buttons = [
    { label: "Login", icon: <LoginIcon /> },
    { label: "Home", icon: <HomeIcon /> },
  ];

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setCurrentPage(newValue);
    navigate(newValue.toLowerCase());
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleTabClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack
        style={{
          justifyContent: "center",
          marginLeft: "1rem",
        }}
      >
        {currentPage === "Home" && <HomeIcon fontSize="large" />}
        {currentPage === "Login" && <LoginIcon fontSize="large" />}
      </Stack>
      <Stack direction="row" justifyContent="flex-end">
        <IconButton
          onClick={toggleDrawer}
          sx={{ display: { xs: "block", sm: "none", md: "none", lg: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Tabs
          onChange={handleChange}
          value={currentPage}
          sx={{
            display: {
              xs: "none",
              sm: "block",
              md: "block",
              lg: "block",
            },
          }}
        >
          {buttons.map((button) => (
            <Tab label={button.label} value={button.label} key={button.label} />
          ))}
        </Tabs>

        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
          <Tabs
            onChange={handleChange}
            value={currentPage}
            orientation="vertical"
          >
            {buttons.map((button) => (
              <Tab
                label={button.label}
                value={button.label}
                key={button.label}
                icon={button.icon}
                onClick={handleTabClick}
              />
            ))}
          </Tabs>
        </Drawer>
      </Stack>
    </Stack>
  );
};
