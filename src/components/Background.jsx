import React from 'react';

function Background() {
  return (
    <>
      {/* <div className='fixed z-[2] w-full h-screen'> */}
      <div className="fixed z-[2] w-full h-screen bg-[url('./public/khush2.jpg')] bg-cover bg-center">

        <div className='absolute top-[5%] w-full py-10 flex justify-center text-white text-xl font-semibold hover:text-yellow-500 transition-colors duration-300 ease-in-out'>
          Documents
        </div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] leading-none tracking-tighter font-semibold hover:text-yellow-500 transition-colors duration-300 ease-in-out text-yellow-500'>
          Docs
        </h1>
      </div>
    </>
  );
}

export default Background;
