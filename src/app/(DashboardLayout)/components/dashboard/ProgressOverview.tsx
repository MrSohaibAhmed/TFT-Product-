import React from "react";
import { Box, Stack, Typography, Chip, useTheme, Card } from "@mui/material";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ProgressOveriew = () => {
  const theme = useTheme();

  const optionscolumnchart: any = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      sparkline: { enabled: true },
      background: "#0d113b", // set chart background
    },
    colors: ["#7C3AED"],
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["", "", "", "", "", "", ""],
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#ffffff", // y-axis text color
        },
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      theme: "dark",
    },
    legend: {
      labels: {
        colors: "#ffffff", // legend text color
      },
    },
  };

  const seriescolumnchart: any = [
    {
      name: "Performance",
      data: [2, 5, 5, 4, 5, 6, 6],
    },
  ];

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
      <Stack
        spacing={2}
        sx={{ flexGrow: 1, height: "100%", justifyContent: "space-between" }}
      >
        {/* Header */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" color="white">
            Progress Overview
          </Typography>
          <Chip
            label="Last week"
            size="small"
            sx={{
              background: "#6C63FF",
              color: "#fff",
              fontSize: "12px",
              borderRadius: "6px",
              fontWeight: 500,
              height: "24px",
            }}
          />
        </Stack>

        {/* Percentage */}
        <Box>
          <Typography variant="h4" fontWeight={700} color="#8B5CF6">
            89%
          </Typography>
          <Typography variant="body2" color="#CBD5E1">
            Overall Performance
          </Typography>
        </Box>

        {/* Chart */}
        <Box sx={{ flexGrow: 1 }}>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="bar"
            height="100%"
          />
        </Box>
      </Stack>
    </Card>
  );
};

export default ProgressOveriew;
