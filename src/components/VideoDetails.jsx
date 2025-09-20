// import React from 'react'
// import { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import  ReactPlayer from 'react-player';
// import { Typography, Box, Stack} from '@mui/material';
// import { CheckCircle } from '@mui/icons-material';

// import {loder} from './loder.gif';
// import { fetchFromAPI } from '../Utils/fetchFromAPI';
// import {Videos} from './';


// const VideoDetails = () => {
//   const [videoDetails, setvideoDetails] = useState('');
//   const [videos, setVideos] = useState();
//   const {id} = useParams();
// //  console.log(id+"Details")
//   useEffect(()=>{
//     fetchFromAPI(`videos?part=snippet,statistics&id=${id}`) // !error in id | path 100% issue to be resolves... 
//     .then((data)=> setvideoDetails(data.items[0]));
//     fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
//      .then((data)=>setVideos(data.items));
//   }, [id]);
// // (!videoDetails)? "": {loder};
// console.log("Data = "+videoDetails)
//   console.log("Details for = "+id)

//   //  const {snippet: {title, channelId, channelTitle}, statistics:{viewCount, likeCount}} = videoDetails;
//   const title = videoDetails?.snippet?.title || "No Title";
//   const channelId = videoDetails?.snippet?.channelId || "";
//   const channelTitle = videoDetails?.snippet?.channelTitle || "Unknown Channel";
//   const viewCount = videoDetails?.statistics?.viewCount || "0";
//   const likeCount = videoDetails?.statistics?.likeCount || "0";

//    return (
//     <Box
//      minHeight='95vh' 
//     >
//       <Stack
//        direction={{xs: 'column', md: 'row' }}
//       >
//        <Box flex={1}>
//          <Box
//            sx={{
//             width: '100%', position: 'sticky', top: '86px'
//            }}
//          >
          
//             <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
//               className="react-player" controls
//             />
//             <Typography
//              variant= 'h5'
//              fontWeight= 'bold'
//              color='#fff'
//              p={2}
//              >
//               {title}
//             </Typography>
//             <Stack 
//               direction= 'row'
//               justifyContent='space-between'
//               color='#fff'
//               px={2}
//               py={1}
//             >
//               <Link
//                to={`/channel/${channelId}`}
//               >
//                 <Typography 
//                  variant= {{sm:'subtitle1', md:'h6'}}
//                  color='#fff'

//                 >
//                   {channelTitle}
//                   <CheckCircle sx={{fontSize: '0.8rem', color: 'gray', ml: '5px'}} />
//                 </Typography>
                 
//               </Link>
//               <Stack direction='row' gap='20px' alignItems='center'>
//                 <Typography 
//                  variant='body1'
//                  sx={{opacity:0.7}}
//                 >
//                   {parseInt(viewCount).toLocaleString()} views
//                 </Typography> 
//                 <Typography 
//                  variant='body1'
//                  sx={{opacity:0.7}}
//                 >
//                   {parseInt(likeCount).toLocaleString()} likes
//                 </Typography>
//               </Stack>
//             </Stack>
//          </Box>
//         </Box> 
//       <Box px={2} 
//         py={{xs: 5, md: 1}} 
//         justifyContent='center'
//         alignItems='center'
        
//         >
//           <Videos videos={videos} direction='column' />
//       </Box>
//       </Stack>
//     </Box>
//   )
// }

// export default VideoDetails


import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";

import { fetchFromAPI } from "../Utils/fetchFromAPI";
import { Videos } from "./";

const VideoDetails = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetails(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetails) return <p className="text-white text-center mt-10">Loading...</p>;

  const title = videoDetails?.snippet?.title || "No Title";
  const channelId = videoDetails?.snippet?.channelId || "";
  const channelTitle = videoDetails?.snippet?.channelTitle || "Unknown Channel";
  const viewCount = videoDetails?.statistics?.viewCount || "0";
  const likeCount = videoDetails?.statistics?.likeCount || "0";

  return (
    <div className="min-h-[95vh] bg-black text-white">
      <div className="flex flex-col md:flex-row">
        {/* Video Player + Info */}
        <div className="flex-1">
          <div className="w-full sticky top-[86px]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              width="100%"
              height="480px"
              controls
            />

            {/* Title */}
            <h1 className="text-lg md:text-xl font-bold p-4">{title}</h1>

            {/* Channel + Stats */}
            <div className="flex justify-between items-center px-4 py-2 text-sm md:text-base">
              {/* Channel */}
              <Link to={`/channel/${channelId}`} className="flex items-center">
                <span className="font-semibold">{channelTitle}</span>
                <CheckCircle sx={{ fontSize: "0.9rem", color: "gray", marginLeft: "5px" }} />
              </Link>

              {/* Views + Likes */}
              <div className="flex gap-5 opacity-80 text-sm">
                <span>{parseInt(viewCount).toLocaleString()} views</span>
                <span>{parseInt(likeCount).toLocaleString()} likes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Videos */}
        <div className="px-2 py-5 md:py-2 flex justify-center items-center md:w-[400px]">
          <Videos videos={videos} direction="column" />
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
