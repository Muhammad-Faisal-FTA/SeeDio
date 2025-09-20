// import React from 'react'
// import {Box, CardContent, CardMedia, Typography, } from "@mui/material";
// import { CheckCircle } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import { demoProfilePicture } from '../Utils/constants';

// const ChannelCard = ({channelDetail, marginTop })=>{
//   console.log("channelDetails = "+channelDetail);

//   return(

//   <Box 
//     sx={{
//       boxShadow: "none",
//       borderRadius: "1.3rem",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       width:{ md:'320px', xs: '356px'},
//       backgroundColor: "red",
//       height: "326px",
//       margin: "auto",
//       marginTop: marginTop
//     }}
//    >
//      <Link 
//         to={`/channel/${channelDetail?.id?.channelId}`}
//       >
//        <CardContent
//          sx={{
//            display: "flex",
//            flexDirection: "column",
//            justifyContent: "center",
//            textAlign: "center",
//            color: "#FFFf",
//            width:"220px"
//          }}
//        >
//          <CardMedia 
//            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
//            alt={channelDetail?.snippet?.title}
//            sx={{
//             borderRadius: "50%",
//             height: "14rem",
//             width: "14rem",
//             mb: '2px',
//             // ml: '',
//             border: "1px sollid #e3e3e3"
//            }}
//          />
//          <Typography variant='h6'>
//          {channelDetail?.snippet?.title}
//          <CheckCircle sx={{fontSize: 15, color: "blue" , ml: '0.35rem'}} />
//          </Typography>
//            {channelDetail?.statistics?.subscriberCount &&(
//             <Typography>
//               Subscribers : {"  "} 
//               {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} 
                
//             </Typography>
//            )}
//        </CardContent>
//      </Link>
//   </Box>
//   );
// }

// export default ChannelCard

import React from 'react';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../Utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <div
      className={`
        flex justify-center items-center 
        rounded-2xl shadow-none 
        w-[356px] md:w-[320px] 
        h-[326px] 
        bg-red-600 
        mx-auto
      `}
      style={{ marginTop }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`} className="w-full flex justify-center">
        <div className="flex flex-col justify-center text-center text-white w-[220px]">
          <img
            src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            className="rounded-full w-56 h-56 mx-auto mb-2 border border-gray-300 object-cover"
          />
          <h2 className="text-lg font-semibold flex justify-center items-center gap-1">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 15, color: 'blue' }} />
          </h2>
          {channelDetail?.statistics?.subscriberCount && (
            <p className="text-sm text-gray-200 mt-1">
              Subscribers:{" "}
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
