'use client'
import { Grid2 as Grid, Box, Paper } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import ProfitExpenses from '@/app/(DashboardLayout)/components/dashboard/ProfitExpenses';
import TrafficDistribution from '@/app/(DashboardLayout)/components/dashboard/TrafficDistribution';
import UpcomingSchedules from '@/app/(DashboardLayout)/components/dashboard/UpcomingSchedules';
import TopPayingClients from '@/app/(DashboardLayout)/components/dashboard/TopPayingClients';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import NoticeBoard from './components/dashboard/NoticeBoard';

const cardStyle = {
  height: '100%',
  minHeight: '300px', // Set your desired height
  display: 'flex',
  flexDirection: 'column',
};
const darkCardStyle = {
  height: '100%',
  minHeight: '300px',
  display: 'flex',
  border: 0.7, borderColor: 'white',
  flexDirection: 'column',
  borderRadius: 2,
  backgroundColor: '#0d113b',
  boxShadow: 'none',
  p: 0, // removes default padding
};


const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box >
        <Grid container spacing={3}>
          {/* Row with 3 equal components */}
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Paper >
                <Paper sx={darkCardStyle}>
  <TrafficDistribution />
</Paper>

                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={darkCardStyle}>
                  <ProfitExpenses />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={darkCardStyle}>
                  <NoticeBoard />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          {/* Other rows */}
          <Grid item xs={12} md={4}>
            <UpcomingSchedules />
          </Grid>
          <Grid item xs={12} md={8}>
            <TopPayingClients />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
