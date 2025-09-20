// import React from 'react';
// import {Stack} from '@mui/material';
// import {Link} from 'react-router-dom';
// import { logo } from '../Utils/constants';
// import SearchBar from './SearchBar';


// const Navbar = () => {
//   return(

//  <Stack 
//  direction = "row"
//  alignItem = "center"
//  p = {2}
//      sx = {{position: "sticky", 
//      background: "#000", 
//      top: 0, 
//      justifyContent:"space-between"}} >

//    <Link to= '/' 
//    style={{display:'flex', alignItem: 'cnter' }} >
//     <img src= {logo} alt="logo" height = {45} />
//    </Link>
//    <SearchBar />
//  </Stack>
//   );
// }

// export default Navbar


import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../Utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div
      className="
        flex flex-row items-center justify-between 
        px-4 py-2 sticky top-0 bg-black z-50
      "
    >
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="logo" className="h-[45px]" />
      </Link>

      {/* Search Bar */}
      <SearchBar />
    </div>
  );
};

export default Navbar;
