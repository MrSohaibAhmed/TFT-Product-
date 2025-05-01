import React from 'react'
import Card from './Card'
import { Box, Typography } from "@mui/material";
import Sidebar from '../../layout/sidebar/Sidebar';
import Side from './Sidebar';
import TopicHeader from './TopicHeader';
import Transcript from './Transcript';
import VideoPlayer from './VideoPlayer';
import MainContent from './MainContent';

function CardsComponent() {
  return (
    <>
    <Box sx={{display:"flex",flexWrap:"wrap", gap:"15px", height: "100%"}}>
      <Card title="Lessons" contentHeading="Programming Basics" content='HTML,CSS,JS'/>
      <Card title="Quizzes"/>
      <Card title="Assignments"/>
      <Card title="Discussions"/>
    </Box>
    <Box sx={{marginTop:"20px"}}>
      <Typography sx={{ fontSize:"30px", fontWeight:"bold", color:"#BA25EE"}}>Programming Basics</Typography>
      <Box sx={{display:"flex", gap:"15px", height: "100%" , marginTop:"20px"}}>
      <Side />
      <MainContent />
   </Box>
   </Box>
    </>
  )
}

export default CardsComponent
