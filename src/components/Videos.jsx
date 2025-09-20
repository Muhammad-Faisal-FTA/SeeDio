// import React, { useState } from 'react'
// import {Stack, Box} from '@mui/material'; 
// import {VideoCard, ChannelCard} from './';                    

// const Videos = ({videos, direction}) => {
//    console.log(videos)
//     if(!videos?.length) return("Sorry, your Search not found!");
//   return (
//     <Stack
//          display='flex' 
//          direction = {direction || 'row' }
//          flexWrap = "wrap" 
//          justifyItems="center"
//          ml='3rem'  
//          gap = {2}>
//       {
//         videos.map((item, index) => (
//           <Box key={index}>
//             {/* {console.log("Checing the id issue = "+item.id.videoId)} */}
//             {item.id.videoId && <VideoCard video={item}  id={item.id.videoId} />}
//             {item.id.channelId && <ChannelCard channelDetail={item}/>}
//           </Box>
//         ))
//       }
//     </Stack>
//   )
// }

// export default Videos


import React from "react";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <p className="text-white mt-5 text-center">Sorry, your search was not found!</p>;

  return (
    <div
      className={`flex ${direction === "column" ? "flex-col" : "flex-row flex-wrap"} gap-4 justify-center ml-12`}
    >
      {videos.map((item, index) => (
        <div key={index} className="flex justify-center">
          {item.id?.videoId && <VideoCard video={item} id={item.id.videoId} />}
          {item.id?.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
