import React from 'react';
import {
  Box,
  Typography,
  Card,
  Chip,
  CardContent,
  Paper
} from '@mui/material';
import {
  Warning as WarningIcon
} from '@mui/icons-material';
// import Chip from '@mui/material';
const NoticeBoard = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 360,
        height: 300,
        margin: 'auto',
        px: 3,
        py: 2,
        borderRadius: 1,
        backgroundColor: '#0d113b',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border:"solid 1px white"

      }}
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{pt:0.1}}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', color: 'white' }}
        >
          Notice Board
        </Typography>
        <Chip
            label="Today"
            size="small"
            sx={{
              background: "#6C63FF",
              color: "#fff",
              fontSize: "12px",
              borderRadius: "6px",
              fontWeight: 500,
              paddingY:"15px",
              paddingX:"10px"
            }}
          />
      </Box>

      {/* First Notice */}
      <Card sx={{ backgroundColor: '#0d113b', border: 0.7, borderColor: 'white' }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1}>
            <WarningIcon sx={{ color: '#6C63FF' }} /> {/* Set the color to match the text */}
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#6C63FF' }}>
              Heads up!
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ fontStyle: 'italic', pl: 4, color: 'white' }}>
            "Quiz Due Tomorrow!"
          </Typography>
        </CardContent>
      </Card>

      {/* Second Notice */}
      <Card sx={{ backgroundColor: '#0d113b', border: 0.7, borderColor: 'white' }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1}>
            <WarningIcon sx={{ color: '#6C63FF' }} /> {/* Set the color to match the text */}
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#6C63FF' }}>
              Heads up!
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ pl: 4, color: 'white' }}>
            New courses for the upcoming semester have been updated.
          </Typography>
        </CardContent>
      </Card>

    </Paper>
  );
};

export default NoticeBoard;
