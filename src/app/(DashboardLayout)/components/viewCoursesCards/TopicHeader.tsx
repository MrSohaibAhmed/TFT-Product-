"use client";
import { Box, Typography, Link } from "@mui/material";

const TopicHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 4,
      }}
    >
      <Typography variant="h6">
        Topic 1 / Introduction: Programming Fundamentals
      </Typography>
      <Link>
        Next Topic
      </Link>
    </Box>
  );
};

export default TopicHeader;
