"use client";

import {
  Box,
  Stack,
  Typography,
  Avatar,
  Chip,
  Card,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const CurrentCourseCard = () => {
  const progress = 82;

  const pieData = [
    { id: 0, value: progress, color: "#7C3AED" },       // Progress part
    { id: 1, value: 100 - progress, color: "#e2e8f0" }, // Remaining part
  ];

  return (
    <Card
      sx={{
        width: 360,
        height: 300,
        backgroundColor: "#0d113b",
        borderRadius: 1,
        px: 3,
        py: 2.5,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        border:"solid 1px white"
      }}
    >
      <Stack
        spacing={2}
        sx={{ flexGrow: 1, height: "100%", justifyContent: "space-between" }}
      >
        {/* Top Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" color="white">
            Current Courses
          </Typography>
          <Chip
            label="Enrolled last month"
            size="small"
            sx={{
              background: "#6C63FF",
              color: "#fff",
              fontSize: "12px",
              borderRadius: "6px",
              fontWeight: 500,
            }}
          />
        </Stack>

        {/* Course Info */}
        <Box>
          <Typography variant="h5" fontWeight={700} color="#A78BFA">
            Programming Basics
          </Typography>
          <Typography variant="body2" color="#CBD5E1">
            HTML, CSS, JS
          </Typography>
        </Box>

        {/* Bottom: Mentor and Chart */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack
  spacing={0.5}
  sx={{ position: "relative", top: 20 }} // move down by 8px
>
  <Typography variant="h4" color="#A78BFA">
    Mentor
  </Typography>
  <Stack direction="row" alignItems="center" spacing={1}>
    <Avatar
      src="/avatar.jpg"
      alt="Dr Nabeel Sabir"
      sx={{ width: 32, height: 32 }}
    />
    <Typography variant="subtitle2">Dr Nabeel Sabir</Typography>
  </Stack>
</Stack>


          {/* Larger Pie Chart */}
          <Box sx={{ position: "relative", width: 160, height: 180, mt: -6 }}>
            <PieChart
              series={[
                {
                  data: pieData,
                  innerRadius: 64,
                  outerRadius: 80,
                  paddingAngle: 0,
                  cornerRadius: 0,
                  startAngle: -90,
                  endAngle: 270,
                },
              ]}
              width={160}
              height={180}
              slotProps={{
                pieArc: {
                  style: {
                    stroke: "none",
                  },
                },
              }}
            />
            {/* Centered Label */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#6C63FF", fontSize: "24px" }}
              >
                {progress}%
              </Typography>
              <Typography variant="caption" sx={{ color: "#CBD5E1" }}>
                In Progress
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
};

export default CurrentCourseCard;