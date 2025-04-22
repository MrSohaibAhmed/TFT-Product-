import React from 'react'
import Card from './Card'
import { Box } from "@mui/material";

function CardsComponent() {
  return (
    <Box sx={{display:"flex",flexWrap:"wrap", gap:"15px", height: "100%"}}>
      <Card title="Lessons" contentHeading="Programming Basics" content='HTML,CSS,JS'/>
      <Card title="Quizzes"/>
      <Card title="Assignments"/>
      <Card title="Discussions"/>

    </Box>
  )
}

export default CardsComponent
