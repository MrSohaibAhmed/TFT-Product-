import {
  AppBar,
  Toolbar,
  styled,
  Stack,
  InputBase,
  IconButton,
  Typography,
} from "@mui/material";

import {
  PanelLeft,
  Star,
  History,
  Bell,
  Search,
  UserRound,
} from "lucide-react";
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

  return (
    <AppBarStyled position="sticky">
      <ToolbarStyled>
        <Stack direction="row" spacing={10} alignItems="center">
          <img
            src="\images\logos\TFTLogo.png"
            alt="TFT-Logo"
            style={{ height: "35px", width: "auto" }}
          />
          <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: 3 }}>
            <IconButton color="inherit">
              <PanelLeft size={26} />
            </IconButton>
            <IconButton color="inherit">
              <Star size={26} />
            </IconButton>
            <Typography
              variant="body2"
              sx={{ color: "#cbd5e1", fontSize: "15px", cursor: "pointer" }}
            >
              Dashboard
            </Typography>
            <Typography variant="body2" sx={{ color: "#cbd5e1" }}>
              /
            </Typography>
            <PurpleLink sx={{ fontSize: "15px" }}>Student Portal</PurpleLink>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
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
          {/* <UserRound size={26} /> */}
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Topbar;
