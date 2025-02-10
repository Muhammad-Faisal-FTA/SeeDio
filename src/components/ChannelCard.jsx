import React from 'react'
import {Box, CardContent, CardMedia, Typography, } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../Utils/constants';

const ChannelCard = ({channelDetail, marginTop })=>{
  console.log("channelDetails = "+channelDetail);

  return(

  <Box 
    sx={{
      boxShadow: "none",
      borderRadius: "1.3rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width:{ md:'320px', xs: '356px'},
      backgroundColor: "red",
      height: "326px",
      margin: "auto",
      marginTop: marginTop
    }}
   >
     <Link 
        to={`/channel/${channelDetail?.id?.channelId}`}
      >
       <CardContent
         sx={{
           display: "flex",
           flexDirection: "column",
           justifyContent: "center",
           textAlign: "center",
           color: "#FFFf",
           width:"220px"
         }}
       >
         <CardMedia 
           image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
           alt={channelDetail?.snippet?.title}
           sx={{
            borderRadius: "50%",
            height: "14rem",
            width: "14rem",
            mb: '2px',
            // ml: '',
            border: "1px sollid #e3e3e3"
           }}
         />
         <Typography variant='h6'>
         {channelDetail?.snippet?.title}
         <CheckCircle sx={{fontSize: 15, color: "blue" , ml: '0.35rem'}} />
         </Typography>
           {channelDetail?.statistics?.subscriberCount &&(
            <Typography>
              Subscribers : {"  "} 
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} 
                
            </Typography>
           )}
       </CardContent>
     </Link>
  </Box>
  );
}

export default ChannelCard
