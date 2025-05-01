"use client";
import { Box, Button } from "@mui/material";
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
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        {/* <Button
          onClick={() => setShowTranscript((prev) => !prev)}
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            borderRadius: "6px",
            padding: "5px 20px",
          }}
        >
          {showTranscript ? "Hide Transcript" : "Show Transcript"}
        </Button> */}
      </Box>

       <Transcript  />
      <VideoPlayer />
    </Box>
  );
};

export default MainContent;
