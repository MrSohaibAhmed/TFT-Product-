"use client";
import { Box, Typography, List, ListItem, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const Side = () => {
  const [activeWeek, setActiveWeek] = useState<number | null>(1);

  const weeks = [
    {
      week: 1,
      topics: [
        "1 Introduction to Programming",
        "2 Variables and Data Types",
        "3 Operators and Expressions",
        "4 Conditional Statements",
        "5 Loops",
        "6 Functions",
        "7 Lists and Arrays",
      ],
    },
    { week: 2, topics: ["Recursion", "Objects", "DOM Manipulation"] },
    { week: 3, topics: ["APIs", "JSON", "Fetch"] },
    { week: 4, topics: ["React Basics", "Hooks", "Component Lifecycle"] },
  ];

  return (
    <Box
      sx={{
        width: { xs: "32%", md: "35%", lg: "24.5%" },

        border: "1px solid white",
        borderRadius: "15px",
        bgcolor: "#0D113B",
        color: "white",
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold">
        Course Topics
      </Typography>

      {weeks.map(({ week, topics }) => (
        <Box key={week}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              borderRadius: "7px",
              padding: "7px 30px",
              bgcolor: "#BA25EE",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textTransform: "none",
              fontWeight: "500",
              fontSize: "16px",
            }}
            onClick={() => setActiveWeek(week === activeWeek ? null : week)}
          >
            Week {week}
            <AddIcon />
          </Button>
          {activeWeek === week && (
            <Box
              sx={{
                border: "1px solid white",
                borderRadius: "10px",
                p: 2,
                mt: 1,
              }}
            >
              <List dense>
                {topics.map((topic) => (
                  <ListItem key={topic} sx={{ pl: 0 }}>
                    <Typography variant="body2">{topic}</Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};
export default Side;
