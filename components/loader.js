"use client";

import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = ({ children, show = false }) => {

  return (
    <>
        {show ? 

          <div className='h-full w-full flex justify-center items-center'>
            <InfinitySpin visible={true} width='200' color='#3A7CFD' /> 
          </div>
        
        : children}
    </>
  )

}

export default Loader