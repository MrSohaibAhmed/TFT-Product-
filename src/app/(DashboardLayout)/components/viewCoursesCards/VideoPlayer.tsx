"use client";
import { Box, IconButton } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useRef, useState } from "react";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        mx: "auto",
        mb: 6,
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Box
        component="video"
        ref={videoRef}
        controls
        sx={{
          width: "100%",
          objectFit: "cover",
          display: "block",
          borderRadius: 2,
          backgroundColor: "black",
        }}
      >
        <source src="/video/videoplayback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      {!isPlaying && (
        <IconButton
          onClick={handlePlay}
          aria-label="Play"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 1,
            borderRadius: "50%",
            boxShadow: 3,
            transition: "0.3s",
            "&:hover": {
              bgcolor: "#f0f0f0",
            },
          }}
        >
          <PlayCircleOutlineIcon sx={{ fontSize: 50, color: "gray" }} />
        </IconButton>
      )}
    </Box>
  );
};

export default VideoPlayer;
