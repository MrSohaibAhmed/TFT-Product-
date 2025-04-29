"use client";
import { Box, Typography, List, ListItem, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Side = () => {
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
      <Typography variant="subtitle1" fontWeight="bold" >
        Course Topics
      </Typography>
      <Button
        fullWidth
        variant="contained"
        sx={{
          borderRadius: "7px",

          bgcolor: "#BA25EE",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textTransform: "none",
          fontWeight: "500",
          padding: "7px 30px",
          fontSize: "16px",
        }}
      >
        Week 1
        <AddIcon sx={{ fontSize: 20 }} />
      </Button>
      <Box
        sx={{
          border: "1px solid white",
          borderRadius: "10px",
          p: 2,
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
          Course Topics
        </Typography>
        <List dense>
          {[
            "1 Introduction to Programming",
            "2 Variables and Data Types",
            "3 Operators and Expressions",
            "4 Conditional Statements",
            "5 Loops",
            "6 Functions",
            "7 Lists and Arrays",
          ].map((topic) => (
            <ListItem key={topic} sx={{ pb: 1, pl: 0, pr: 0 }}>
              <Typography variant="body2">{topic}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box mt={0} display="flex" flexDirection="column" gap={2}>
        {/* Week 2 Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            borderRadius: "7px",

            bgcolor: "#BA25EE",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textTransform: "none",
            fontWeight: "500",
            padding: "7px 30px",
            fontSize: "16px",
          }}
        >
          Week 2
          <AddIcon sx={{ fontSize: 20 }} />
        </Button>

        {/* Week 3 Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            borderRadius: "7px",
            bgcolor: "#BA25EE",
            display: "flex",
            padding: "7px 30px",
            justifyContent: "space-between",
            alignItems: "center",
            textTransform: "none",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          Week 3
          <AddIcon sx={{ fontSize: 20 }} />
        </Button>
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
        >
          Week 4
          <AddIcon sx={{ fontSize: 20 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default Side;
