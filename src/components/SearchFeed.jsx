// import React from 'react'
// import { useState, useEffect } from 'react';
// import { Box, Typography } from '@mui/material';
// import { useParams } from 'react-router-dom';
// import { Videos} from './'

// import {fetchFromAPI} from '../Utils/fetchFromAPI';


// const SearchFeed = () => {
//   const [videos, setVideos] = useState([]);
//   const {searchTerm} = useParams();


// useEffect(() =>{
//    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)   //Erro for search next till  not  ..  resolve..
//    .then((data)=>setVideos(data.items));
//   },[searchTerm])

//   console.log("Searched Videos:"+searchTerm);
  
//   return (
//     <Box 
//     p={2}
//     sx={{
//       // display:'flex',
//       overflowY: "auto",
//       height : "90vh",
//       flex: "52"
//     }}
//   >
//     <Typography 
//         variant='h4'
//         fontWeight= 'bold'
//         ml = '4'
//         mb = '1rem'
//         sx={{
//           color: "white"
//         }}
//       >
//           See result for :{' '} 
//           <span
//            style={{
//              color: "red",
//           }}>
//            {searchTerm}
//         </span> Videos
//     </Typography>

//        <Videos  videos={videos}/>

//   </Box>
//   )
// }

// export default SearchFeed

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Videos } from './';
// import { fetchFromAPI } from '../Utils/fetchFromAPI';

// const SearchFeed = () => {
//   const [videos, setVideos] = useState([]);
//   const { searchTerm } = useParams();

//   useEffect(() => {
//     fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
//       .then((data) => setVideos(data.items));
//   }, [searchTerm]);

//   console.log("Searched Videos: " + searchTerm);

//   return (
//     <div className="p-4 overflow-y-auto h-[90vh] flex-1">
//       <h2 className="text-2xl font-bold text-white mb-4 ml-2">
//         See result for:{' '}
//         <span className="text-red-500">{searchTerm}</span> Videos
//       </h2>

//       <Videos videos={videos} />
//     </div>
//   );
// };

// export default SearchFeed;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos } from "./";
import SideBar from "./SideBar";
import { fetchFromAPI } from "../Utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // optional, if you want active highlight
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      {/* Sidebar Component */}
      <div className="md:w-1/5 w-full border-r border-gray-700 p-2 md:p-4 overflow-y-auto">
        <SideBar
          selectedCategory={selectedCategory}
          setselectedCategory={setSelectedCategory}
        />
        <p className="text-gray-400 text-xs mt-4 md:block hidden">
          © All rights reserved.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">
          Search Results for:{" "}
          <span className="text-red-500">{searchTerm}</span>
        </h2>

        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default SearchFeed;
