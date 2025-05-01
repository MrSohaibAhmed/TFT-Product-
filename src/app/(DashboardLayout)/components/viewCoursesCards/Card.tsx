import React from 'react'
import { Box, Typography } from "@mui/material";

interface Props {
  title: string,
  contentHeading?: string,
  content?: string
}
function Card(props: Props) {
  return (
    <Box sx={{ height: "200px", width: "23.9%", border: "solid 1px white", backgroundColor: "#0D113B", borderRadius: "15px", padding: "25px" }}>
      <Typography sx={{ color: "white", fontWeight: "bold" }}>
        {props.title}
      </Typography>
      <Typography sx={{ marginTop: "40px", color: "#BA25EE", fontWeight: "bold", fontSize: "15px" }}>
        {props.contentHeading}
      </Typography>
      <Typography sx={{ color: "white" }}>
        {props.content}
      </Typography>
    </Box>
  )
}

export default Card
