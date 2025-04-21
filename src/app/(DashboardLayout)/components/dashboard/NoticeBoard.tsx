import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Paper
} from '@mui/material';
import {
  Warning as WarningIcon
} from '@mui/icons-material';

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
        borderRadius: 2,
        backgroundColor: '#0d113b',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', color: 'white' }}
        >
          Notice Board
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 'bold',
            backgroundColor: '#6C63FF',
            px: 2,
            py: 0.4,
            borderRadius: 1,
            color: 'white',
          }}
        >
          Today
        </Typography>
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
