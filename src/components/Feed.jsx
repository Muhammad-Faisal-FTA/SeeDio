// import React from 'react'
// import { useState, useEffect } from 'react';
// import { Box, Stack, Typography } from '@mui/material';
// import {SideBar, Videos} from './'

// import {fetchFromAPI} from '../Utils/fetchFromAPI';


// const Feed = () => {
//   const [selectedCategory, setselectedCategory] = useState('New');
//   const [videos, setVideos] = useState([]);


// useEffect(() =>{

//    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)   //Erro for search next url ..  resolve..
//    .then((data)=>setVideos(data.items))
//   },[selectedCategory])
//   return (
//     <Stack 
//     sx={{
//         flexDirection: {sx: "coloumn", md: "row"}
//       }}>

//      <Box 
//      sx={{
//         height: {sx: "auto", md: "92vh"} , 
//         borderRight: "1px solid #3d3d3d", 
//         px: {sx: 0, md:2}
//       }} >

//        <SideBar 
//        selectedCategory = {selectedCategory} 
//        setselectedCategory = {setselectedCategory}
//         />

//        <Typography 
//           className='copyright' 
//           variant = "body2" 
//           sx={{
//           mt: 1.5, 
//           color: "#fff"
//         }}>

//           All rights are reserved.

//        </Typography>
//      </Box>
      
//       <Box 
//         p={2}
//         sx={{
//           overflowY: "auto",
//           height : "90vh",
//           flex: "2"
//         }}
//       >
//         <Typography 
//             variant='h4'
//             fontWeight= 'bold'
//             ml = '4'
//             mb = '1rem'
//             sx={{
//               color: "white"
//             }}
//           >
//               {selectedCategory}<span
//               style={{
//                 color: "red",
//               }}>
//                Videos
//             </span>
//         </Typography>

//            <Videos  videos={videos}/>

//       </Box>

//     </Stack>
//   )
// }

// export default Feed

// import React, { useState, useEffect } from 'react';
// import { SideBar, Videos } from './';
// import { fetchFromAPI } from '../Utils/fetchFromAPI';

// const Feed = () => {
//   const [selectedCategory, setSelectedCategory] = useState('New');
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
//       .then((data) => setVideos(data.items));
//   }, [selectedCategory]);

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen">
//       {/* Sidebar */}
//       <div className="md:h-[92vh] border-r border-gray-800 px-0 md:px-2">
//         <SideBar
//           selectedCategory={selectedCategory}
//           setselectedCategory={setSelectedCategory}
//         />

//         <p className="text-xs text-gray-400 mt-2 text-center md:text-left">
//           All rights are reserved.
//         </p>
//       </div>

//       {/* Main content */}
//       <div className="flex-1 p-4 overflow-y-auto h-[90vh]">
//         <h2 className="text-2xl font-bold text-white mb-4 ml-2">
//           {selectedCategory}
//           <span className="text-red-500 ml-1">Videos</span>
//         </h2>

//         <Videos videos={videos} />
//       </div>
//     </div>
//   );
// };

// export default Feed;


// Feed.jsx
import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../Utils/fetchFromAPI";

const Feed = ({ setLoading }) => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* Sidebar */}
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setselectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          © 2025 Video Feed
        </Typography>
      </Box>

      {/* Video Feed */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
