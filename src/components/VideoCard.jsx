// import React from 'react'

// import { Link } from 'react-router-dom';
// import { Typography,Card, CardContent, CarMedia, CardMedia } from '@mui/material';
// import { CheckCircle } from '@mui/icons-material';
// import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle, demoProfilePicture } from '../Utils/constants';

// const VideoCard = ({video:{id:{videoId}, snippet}}) => {
//     // console.log(videoId)
//   return (
//     <Card sx={{
//         width:{xs: '100%', md: '23rem'},
//         boxShadow: 'none' , 
//         borderRadius: '3px'
//     }}>
//         <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
//            <CardMedia
//             image={snippet?.thumbnails?.high?.url}
//             alt = {snippet?.title}
//             sx={{width: 380, height: 180}}
//             />
//         </Link>


//         <CardContent sx={{background:'#1e1e1e', height: '106px'}}>
//         <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
//            <Typography
//              variant='subtitle1'
//              fontWeight='bold'
//              color="#FFFF"
//            >
//              {snippet?. title. slice(0, 60)
//              || demoVideoTitle.slice(0,60)}
//            </Typography>
//         </Link>
        
//          <Link to={snippet?. channelId? `/channel/${snippet?.channelId}`:demoChannelUrl}>
//            <Typography
//              variant='subtitle2'
//              fontWeight='bold'
//              color="gray"
//            >
//              {snippet?.channelTitle || demoChannelTitle}
//                <CheckCircle 
//                  sx={{
//                     fontSize: 12,
//                     color:'blue',
//                     ml:'5px'
//                  }}
//                />
//            </Typography>
//         </Link>
//         </CardContent>
//     </Card>
//   )
// }

// export default VideoCard


import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
} from '../Utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div className="w-full md:w-[23rem] rounded-md overflow-hidden bg-transparent shadow-none">
      {/* Thumbnail */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img
          src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          className="w-full h-[180px] object-cover"
        />
      </Link>

      {/* Content */}
      <div className="bg-[#1e1e1e] p-3 h-[106px]">
        {/* Video Title */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <h3 className="text-white text-sm font-bold truncate">
            {snippet?.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </h3>
        </Link>

        {/* Channel Title */}
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <p className="text-gray-400 text-xs font-semibold flex items-center mt-1">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'blue', marginLeft: '5px' }} />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
