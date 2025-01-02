import React from 'react';

function Loader() {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <div className='flex space-x-2'>
        <div className='h-[50px] w-[40px] bg-red-600 rounded-full animate-bounce' style={{ animationDelay: '0s' }}></div>
        <div className='h-[50px] w-[40px] bg-orange-400 rounded-full animate-bounce' style={{ animationDelay: '0.2s' }}></div>
        <div className='h-[50px] w-[40px] bg-yellow-400 rounded-full animate-bounce' style={{ animationDelay: '0.4s' }}></div>
      </div>
      <span className='mt-4 text-amber-800 text-4xl'>Loading...</span>
    </div>
  );
}

export default Loader;
