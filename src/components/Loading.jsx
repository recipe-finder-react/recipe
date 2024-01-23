import React from 'react'
import {Spinner} from "@material-tailwind/react";

function Loading() {
  return (
    <div className='d-flex items-center'>
      <Spinner className="d-flex items-center justify-center h-16 w-16 text-gray-900/50" />
    </div>
  )
}

export default Loading
