import React from 'react'

function TimeAndLocation() {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>Date Time</p>
      </div>
      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>
          City State
        </p>
      </div>
    </div>
  )
}

export default TimeAndLocation