import {
  IconButton,
  Box,
  AppBar,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  Toolbar,
  styled,
  Stack,
  Button,
  Badge,
} from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { DashboardContext } from "@/app/context/DashboardContext";

const Header = () => {
  const [_height, setHeight] = useState("0px");

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.background.paper,
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("lg")]: {
      minHeight: "70px",
    },
    zIndex: "unset",
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setHeight("0px");
      }
    };
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { isMobileSidebar, setIsMobileSidebar } = useContext(DashboardContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="menu"
        onClick={() => setIsMobileSidebar(!isMobileSidebar)}
        sx={{
          display: {
            lg: "none",
            xs: "inline",
          },
        }}
      ></IconButton>
    </>
  );
};

export default Header;
