"use client";
import { Box, Button, Typography } from "@mui/material";

const Transcript = () => {
  return (
    <Box sx={{ mb: 6 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h6">
          Transcipt: Introduction to Programming
        </Typography>
        <Button variant="contained" sx={{ color: "white", bgcolor: "#6C63FF", borderRadius: "6px", padding: "5px 30px" }}>
          Transcript
        </Button>
      </Box>
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold">
          Welcome & Introduction
        </Typography>
        <Typography variant="body2" mt={1}>
          Hi, and welcome to Programming Fundamentals! I'm super excited to take you on this journey...
        </Typography>
      </Box>

      <Box>
        <Typography variant="subtitle1" fontWeight="bold">
          What is Programming?
        </Typography>
        <Typography variant="body2" mt={1}>
          Programming is giving instructions to a computer to perform tasks. These instructions are written in code...
        </Typography>
      </Box>
    </Box>
  );
};
export default Transcript;

