import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Videos} from './'

import {fetchFromAPI} from '../Utils/fetchFromAPI';


const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();


useEffect(() =>{
   fetchFromAPI(`search?part=snippet&q=${searchTerm}`)   //Erro for search next till  not  ..  resolve..
   .then((data)=>setVideos(data.items));
  },[searchTerm])

  console.log("Searched Videos:"+searchTerm);
  
  return (
    <Box 
    p={2}
    sx={{
      // display:'flex',
      overflowY: "auto",
      height : "90vh",
      flex: "52"
    }}
  >
    <Typography 
        variant='h4'
        fontWeight= 'bold'
        ml = '4'
        mb = '1rem'
        sx={{
          color: "white"
        }}
      >
          See result for :{' '} 
          <span
           style={{
             color: "red",
          }}>
           {searchTerm}
        </span> Videos
    </Typography>

       <Videos  videos={videos}/>

  </Box>
  )
}

export default SearchFeed
