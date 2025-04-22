import {
  AppBar,
  Toolbar,
  styled,
  Stack,
  InputBase,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { DashboardContext } from "@/app/context/DashboardContext";
import { PanelLeft, Star, History, Bell, Search } from "lucide-react";
import Profile from "./Profile";

const Topbar = () => {
  const AppBarStyled = styled(AppBar)(() => ({
    boxShadow: "none",
    background: "#0D113B",
    justifyContent: "center",
    backdropFilter: "blur(6px)",
    padding: "0 10px",
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.common.white,
    justifyContent: "space-between",
    minHeight: "65px",
  }));

  const SearchBox = styled("div")(() => ({
    position: "relative",
    borderRadius: "10px",
    border: "1px solid white",
    backgroundColor: "#1e293b",
    marginLeft: 0,
    width: "200px",
    display: "flex",
    alignItems: "center",
    padding: "2px 12px",
    color: "#fff",
  }));

  const PurpleLink = styled("span")(() => ({
    color: "#BA25EE",
    cursor: "pointer",
    fontWeight: 500,
  }));

  const [_height, setHeight] = useState("0px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setHeight("0px");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { isMobileSidebar, setIsMobileSidebar } = useContext(DashboardContext);

  return (
    <AppBarStyled position="sticky">
      <ToolbarStyled>
        <Stack direction="row" spacing={10} alignItems="center">
          <img
            src="/images/logos/TFTLogo.png"
            alt="TFT-Logo"
            style={{ height: "35px", width: "auto" }}
          />
          <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: 3 }}>
            <IconButton
              color="inherit"
              onClick={() => setIsMobileSidebar(!isMobileSidebar)}
              sx={{
                display: {
                  xl: "none",
                  lg: "none",
                },
                cursor: "pointer",
              }}
            >
              <Box sx={{ mt: "6px" }}>
                <PanelLeft size={26} />
              </Box>
            </IconButton>
            <IconButton color="inherit">
              <Star size={26} />
            </IconButton>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ flexWrap: "nowrap" }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  fontSize: "15px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Dashboard
              </Typography>
              <Typography variant="body2" sx={{ color: "#cbd5e1" }}>
                /
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "15px",
                  mr: 3,
                  color: "#BA25EE",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                Student Portal
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: 3 }}>
          <SearchBox>
            <Search size={24} style={{ marginRight: 8 }} />
            <InputBase
              placeholder="Search"
              sx={{ color: "#fff", fontSize: "14px", width: "100%" }}
            />
          </SearchBox>
          <IconButton color="inherit">
            <History size={26} />
          </IconButton>
          <IconButton color="inherit">
            <Bell size={26} />
          </IconButton>
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Topbar;
