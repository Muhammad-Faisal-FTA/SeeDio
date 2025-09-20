// import React, {useState, useEffect} from 'react';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import {Box} from "@mui/material";
// import Loader from "../components/Loader"

// import {Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed} from './components';

// const App = () => {
//    const [loading, setLoading] = useState(false);

//    return(
//    <BrowserRouter>
//         <Box sx={{backgroundColor: '#000'}} >
//          {loading? <Loader /> : ""}
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Feed setLoading={setLoading} />} />
//         <Route path="/search/:searchTerm" element={<SearchFeed setLoading={setLoading} />} />
//         <Route path="/channel/:id" element={<ChannelDetails setLoading={setLoading} />} />
//         <Route path="/video/:id" element={<VideoDetails setLoading={setLoading} />} />
//       </Routes>
//         </Box>    
//    </BrowserRouter>
//    );
// }

// export default App

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Loader from "./components/Loader";
import Loader from "./Loader";


import { Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed } from "./components";

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen text-white">
        {/* Global Loader */}
        {loading && <Loader />}

        <Navbar />

        <Routes>
          <Route path="/" element={<Feed setLoading={setLoading} />} />
          <Route path="/search/:searchTerm" element={<SearchFeed setLoading={setLoading} />} />
          <Route path="/channel/:id" element={<ChannelDetails setLoading={setLoading} />} />
          <Route path="/video/:id" element={<VideoDetails setLoading={setLoading} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
