"use client";
import { Box } from "@mui/material";
import TopicHeader from "./TopicHeader";
import VideoPlayer from "./VideoPlayer";
import Transcript from "./Transcript";
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
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}></Box>

      <Transcript />
      <VideoPlayer />
    </Box>
  );
};

export default MainContent;
