import React from 'react'
import { Stack } from '@mui/material';
import {categories} from '../Utils/constants';


const SideBar = ({selectedCategory, setselectedCategory}) => {
  return (
    <Stack
     direction = 'row'
     sx={{
        overFlowY: 'auto',
        height: {sx:"auto", md: "95%"},
        flexDirection: {xs:'row', md: "column" },
        overflowX: 'scroll'
     }}
    >
        {
            categories.map((category)=>(
                <button
                onClick={()=>setselectedCategory(category.name)}
                className='category-btn'
                style={{
                    background: category.name === selectedCategory && "#F1dC03",
                    color: "white"
                }}
                key = {category.name}
                >
                    <span
                     style={{
                        color: category.name === selectedCategory?  "white" : "red" ,
                        marginRight: '1rem'
                     }}
                    >
                        {category.icon}
                    </span>
                    <span
                    style={{
                      opacity: category.name === selectedCategory ? "1" : "0.8",
                    }}
                    >
                        {category.name}
                    </span>
                </button>
            ))
        }

    </Stack>
  )
}

export default SideBar
