import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import  ReactPlayer from 'react-player';
import { Typography, Box, Stack} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {loder} from './loder.gif';
import { fetchFromAPI } from '../Utils/fetchFromAPI';
import {Videos} from './';


const VideoDetails = () => {
  const [videoDetails, setvideoDetails] = useState('');
  const [videos, setVideos] = useState();
  const {id} = useParams();
//  console.log(id+"Details")
  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`) // !error in id | path 100% issue to be resolves... 
    .then((data)=> setvideoDetails(data.items[0]));
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
     .then((data)=>setVideos(data.items));
  }, [id]);
// (!videoDetails)? "": {loder};
console.log("Data = "+videoDetails)
  console.log("Details for = "+id)

  //  const {snippet: {title, channelId, channelTitle}, statistics:{viewCount, likeCount}} = videoDetails;
  const title = videoDetails?.snippet?.title || "No Title";
  const channelId = videoDetails?.snippet?.channelId || "";
  const channelTitle = videoDetails?.snippet?.channelTitle || "Unknown Channel";
  const viewCount = videoDetails?.statistics?.viewCount || "0";
  const likeCount = videoDetails?.statistics?.likeCount || "0";

   return (
    <Box
     minHeight='95vh' 
    >
      <Stack
       direction={{xs: 'column', md: 'row' }}
      >
       <Box flex={1}>
         <Box
           sx={{
            width: '100%', position: 'sticky', top: '86px'
           }}
         >
          
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player" controls
            />
            <Typography
             variant= 'h5'
             fontWeight= 'bold'
             color='#fff'
             p={2}
             >
              {title}
            </Typography>
            <Stack 
              direction= 'row'
              justifyContent='space-between'
              color='#fff'
              px={2}
              py={1}
            >
              <Link
               to={`/channel/${channelId}`}
              >
                <Typography 
                 variant= {{sm:'subtitle1', md:'h6'}}
                 color='#fff'

                >
                  {channelTitle}
                  <CheckCircle sx={{fontSize: '0.8rem', color: 'gray', ml: '5px'}} />
                </Typography>
                 
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography 
                 variant='body1'
                 sx={{opacity:0.7}}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography> 
                <Typography 
                 variant='body1'
                 sx={{opacity:0.7}}
                >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
         </Box>
        </Box> 
      <Box px={2} 
        py={{xs: 5, md: 1}} 
        justifyContent='center'
        alignItems='center'
        
        >
          <Videos videos={videos} direction='column' />
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails
