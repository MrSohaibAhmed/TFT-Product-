"use client";
import { Grid2 as Grid, Box, Paper } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
// components
import ProfitExpenses from "@/app/(DashboardLayout)/components/dashboard/ProgressOverview";
import TrafficDistribution from "@/app/(DashboardLayout)/components/dashboard/CurrentCourses";
// import UpcomingSchedules from '@/app/(DashboardLayout)/components/dashboard/UpcomingSchedules';
import TopPayingClients from "@/app/(DashboardLayout)/components/dashboard/TopPayingClients";
import Blog from "@/app/(DashboardLayout)/components/dashboard/Blog";
import NoticeBoard from "./components/dashboard/NoticeBoard";
import CurrentCourseCard from "@/app/(DashboardLayout)/components/dashboard/CurrentCourses";
import ProgressOveriew from "@/app/(DashboardLayout)/components/dashboard/ProgressOverview";

const cardStyle = {
  height: "100%",
  minHeight: "300px", // Set your desired height
  display: "flex",
  flexDirection: "column",
};
const darkCardStyle = {
  height: "100%",
  minHeight: "300px",
  display: "flex",
  border: 0.7,
  borderColor: "white",
  flexDirection: "column",
  borderRadius: 2,
  backgroundColor: "#0d113b",
  boxShadow: "none",
  p: 0,
};

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={4.12}>
              <Grid item xs={12} md={4}>
                <Paper>
                  <Paper sx={darkCardStyle}>
                    <CurrentCourseCard />
                  </Paper>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={darkCardStyle}>
                  <ProgressOveriew />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={darkCardStyle}>
                  <NoticeBoard />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            size={{
              xs: 12,
              lg: 4,
            }}
          >
            {/* <UpcomingSchedules /> */}
          </Grid>
          {/* <Grid
            size={{
              xs: 12,
              lg: 8,
            }}>
            <TopPayingClients />
          </Grid>
           */}
          <Grid
            size={{
              xs: 12,
              lg: 16,
            }}
          >
            <TopPayingClients />
          </Grid>
          {/* <Grid size={12}>
            <Blog />
          </Grid> */}
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
