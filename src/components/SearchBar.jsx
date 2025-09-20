// import React  from 'react';

// import {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Paper, IconButton } from '@mui/material';
// import {Search} from '@mui/icons-material'; 

// const SearchBar = () => {
//   const [searchTerm,setsearchTerm] = useState('');
//   const  navigate = useNavigate(); 

//   const handleSubmit =(e) => {
//      e.preventDefault();

//      if(searchTerm){
//       navigate(`/search/${searchTerm}`);
//       setsearchTerm('');
//      }
//   }
//   return (
//    <Paper 
//    component = "form"
//    onSubmit = {handleSubmit} 
//    sx ={{borderRadius: 20, 
//      border: '1px solid #3e3e3',
//      pl:2, boxShadow:'none', 
//      mr:{sm: 5}}}
//    >
//     <input
//      className='search-bar'  // this is in css- file
//      border = 'none'
//      placeholder= 'search your Sees'
//      value={searchTerm}
//      onChange = {(e)=>setsearchTerm(e.target.value)}
//      />
//      <IconButton type='submit' sx={{p: "10px", color: "red"}}>
//         <Search />
//      </IconButton>
//    </Paper>
//   )
// }

// export default SearchBar

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-gray-900 border border-gray-700 rounded-full px-3 py-1 w-full max-w-md"
    >
      <input
        type="text"
        placeholder="Search your Sees"
        className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none px-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button
        type="submit"
        className="p-2 text-red-500 hover:text-red-400 transition-colors"
      >
        🔍
      </button>
    </form>
  );
};

export default SearchBar;
