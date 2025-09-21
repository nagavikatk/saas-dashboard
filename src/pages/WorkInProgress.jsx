import React from 'react';

const WorkInProgress = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <img src="/page-0001.svg" alt="Work in Progress" className="w-1/2 h-1/2" />
      <h1 className="text-4xl font-bold mt-8">Work in Progress</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
        This page is currently under construction. Please check back later.
      </p>
    </div>
  );
};

export default WorkInProgress;
