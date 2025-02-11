import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {SideBar, Videos} from './'

import {fetchFromAPI} from '../Utils/fetchFromAPI';


const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);


useEffect(() =>{

   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)   //Erro for search next url ..  resolve..
   .then((data)=>setVideos(data.items))
  },[selectedCategory])
  return (
    <Stack 
    sx={{
        flexDirection: {sx: "coloumn", md: "row"}
      }}>

     <Box 
     sx={{
        height: {sx: "auto", md: "92vh"} , 
        borderRight: "1px solid #3d3d3d", 
        px: {sx: 0, md:2}
      }} >

       <SideBar 
       selectedCategory = {selectedCategory} 
       setselectedCategory = {setselectedCategory}
        />

       <Typography 
          className='copyright' 
          variant = "body2" 
          sx={{
          mt: 1.5, 
          color: "#fff"
        }}>

          All rights are reserved.

       </Typography>
     </Box>
      
      <Box 
        p={2}
        sx={{
          overflowY: "auto",
          height : "90vh",
          flex: "2"
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
              {selectedCategory}<span
              style={{
                color: "red",
              }}>
               Videos
            </span>
        </Typography>

           <Videos  videos={videos}/>

      </Box>

    </Stack>
  )
}

export default Feed
