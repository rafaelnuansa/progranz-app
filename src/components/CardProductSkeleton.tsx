import React from 'react';

const CardProductSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-40 md:48 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
        <div className="h-6 bg-gray-300 w-3/4 mb-4"></div>
        <div className="h-6 bg-gray-300 w-1/2 mb-4"></div>
      </div>
    </div>
  );
};

export default CardProductSkeleton;
