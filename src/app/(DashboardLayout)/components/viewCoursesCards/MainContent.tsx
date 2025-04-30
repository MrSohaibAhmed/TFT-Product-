"use client";
import { Box } from "@mui/material";
import TopicHeader from "./TopicHeader";
import Transcript from "./Transcript";
import VideoPlayer from "./VideoPlayer";

const MainContent = () => {
  return (
    <Box
      component="main"
      sx={{

        border: "1px solid white",
        width: { xs: "90%", md: "100%", lg: "74%" },
        p: 5,
        bgcolor: "#0D113B",
        borderRadius: "15px",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <TopicHeader />
      <Transcript />
      <VideoPlayer />
    </Box>
  );
};

export default MainContent;
