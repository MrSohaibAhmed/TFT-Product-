import React from 'react'
import { Box,Typography } from "@mui/material";

interface Props{
title:string,
contentHeading?:string,
content?:string
}
function Card(props:Props) {
  return (
    <Box sx={{height:"200px",width:"275px",border:"solid 1px black", backgroundColor:"#0D113B", borderRadius:"15px",padding:"25px"}}>
        <Typography sx={{color:"white", fontWeight:"bold"}}>
            {props.title}
        </Typography>
        <Typography sx={{marginTop:"40px",color:"#BA25EE",fontWeight:"bold", fontSize:"20px"}}>
{props.contentHeading}
        </Typography>
        <Typography sx={{color:"white"}}>
            {props.content}
        </Typography>
      </Box>
  )
}

export default Card
