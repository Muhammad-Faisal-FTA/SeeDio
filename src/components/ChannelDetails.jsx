// import React from 'react'
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Box } from '@mui/material'

// import {Videos, ChannelCard} from './';
// import { fetchFromAPI } from '../Utils/fetchFromAPI';

// const ChannelDetails = () => {
//   const [channelDetail, setChannelDetail] = useState(null);
//   const [videos, setVideos] =useState();
//   // console.log('videos'  );
//   // console.log(channelDetail);
  
//   const {id} = useParams();
//   console.log("this is an ID "+id)
//    useEffect(()=>{
//     fetchFromAPI(`channels?part=snippet&id=${id}`)
//     .then((data)=>setChannelDetail(data?.items[0]));
//     fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
//     .then((data)=>setVideos(data?.items));
//    },[id])

//   return (
//   <Box
//    minHeight="90vh"
//   >
//     <Box>
//       <div 
//        style={{
//         background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(150,144,12,1) 39%, rgba(203,77,49,1) 69%, rgba(0,212,255,1)100%)',
//         zIndex: 10,
//         height: '300px'
//        }}
//       />
//           <ChannelCard channelDetail={channelDetail}
//             marginTop = '-7.5rem'
//           />
//     </Box>

//     <Box 
//       display='flex'
//       justifyContent='center'
//       p='2rem'
//       margin= '1rem'

//     >
//       <Box
//          sx={{
//           mr: {sm:'100px'}
//          }}
//       >
//         <Videos videos={videos} />
//       </Box>
//     </Box>
//   </Box>
//   )
// }

// export default ChannelDetails


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../Utils/fetchFromAPI';

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  console.log("this is an ID " + id);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <div className="min-h-[90vh] flex flex-col">
      {/* Gradient Banner */}
      <div
        className="h-[300px] w-full z-10"
        style={{
          background:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(150,144,12,1) 39%, rgba(203,77,49,1) 69%, rgba(0,212,255,1) 100%)',
        }}
      />

      {/* Channel Card */}
      <div className="flex justify-center -mt-28">
        <ChannelCard channelDetail={channelDetail} />
      </div>

      {/* Videos Section */}
      <div className="flex justify-center p-8 m-4">
        <div className="w-full max-w-[1200px]">
          <Videos videos={videos} />
          {/* <h1 className='text-center font-serif text-green-600'>q</h1> */}
        </div>
      </div>
    </div>
  );
};

export default ChannelDetails;
