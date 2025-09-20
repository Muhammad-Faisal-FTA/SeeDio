import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 bg-opacity-95 z-50">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinning Circle */}
        <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Text with pulse effect */}
        <p className="text-lg font-semibold text-white animate-pulse tracking-wide">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loader;
