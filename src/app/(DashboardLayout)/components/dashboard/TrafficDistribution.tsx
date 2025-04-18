import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import {
  Box,
  Stack,
  Typography,
  Avatar,
  Chip,
  useTheme,
  Card,
} from "@mui/material";

const CurrentCourseCard = () => {
  const theme = useTheme();

  const options = {
    chart: {
      type: "donut",
    },
    colors: ["#6366F1", "#4F46E5"],
    plotOptions: {
      pie: {
        donut: {
          size: "80%",
          labels: {
            show: true,
            name: { show: false },
            value: { show: false },
            total: {
              show: true,
              label: "82%",
              fontSize: "20px",
              fontWeight: 700,
              color: "#fff",
              formatter: () => "In Progress",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    legend: {
      show: false,
    },
  };

  const series = [82, 18];

  return (
<Card
  sx={{
    width: 360,
    height: 300,
    backgroundColor: "#0d113b",
    borderRadius: 2,
    px: 3,
    py: 2.5,
    color: "#fff",
    display: "flex",
    flexDirection: "column",
  }}
>
  <Stack spacing={2} sx={{ flexGrow: 1, height: "100%", justifyContent: "space-between" }}>
    {/* Top Header */}
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="subtitle2" color="#A0AEC0">
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
      <Typography variant="h6" fontWeight={700} color="#A78BFA">
        Programming Basics
      </Typography>
      <Typography variant="body2" color="#CBD5E1">
        HTML, CSS, JS
      </Typography>
    </Box>

    {/* Bottom: Mentor and Chart */}
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack spacing={0.5}>
        <Typography variant="h4"  color="#A78BFA">
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

      <Box width="90px">
        <Chart options={options} series={series} type="donut" height="90" />
      </Box>
    </Stack>
  </Stack>
</Card>

  );
};

export default CurrentCourseCard;
