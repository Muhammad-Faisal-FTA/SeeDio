// 

import React from 'react';
import { categories } from '../Utils/constants';

const SideBar = ({ selectedCategory, setselectedCategory }) => {
  return (
    <div className="flex md:flex-col overflow-x-auto md:overflow-y-auto h-auto md:h-[95%] scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setselectedCategory(category.name)}
          className={`
            flex items-center px-4 py-2 rounded-lg mr-2 md:mr-0 mb-2 transition-colors duration-200 
            ${selectedCategory === category.name 
              ? 'bg-yellow-400 text-white font-semibold' 
              : 'bg-transparent text-white hover:bg-gray-800'}
          `}
        >
          <span
            className={`mr-3 ${
              selectedCategory === category.name ? 'text-white' : 'text-red-500'
            }`}
          >
            {category.icon}
          </span>
          <span
            className={`${
              selectedCategory === category.name ? 'opacity-100' : 'opacity-80'
            }`}
          >
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SideBar;
