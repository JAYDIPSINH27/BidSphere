import React from 'react'

const Review = ({ id, name, review, pic }) => {
  return (
    <div className='group flex flex-col p-6 gap-y-4 rounded-4xl border border-solid border-transparent hover:border-gray-10 transition-colors duration-300'
      data-id={id}
    >
      <div className='w-full h-[300px] rounded-3xl border border-solid border-transparent overflow-hidden group-hover:border-gray-10 transition-colors duration-300 '>
        <img
          src={pic}
          alt={name}

        />

      </div>

      <div className='flex flex-col gap-y-4'>
        <div className='flex flex-col'>
          <div className='flex justify-between'>

            {/* <div className='flex items-center gap-x-1.5'>
              <p className=''>
               "{review}"
              </p>

            </div> */}
          </div>

          <p className='text-base text-gray-60'>
            "{review}"

          </p>
          <p className='m-1.5 text-lg text-gray-10'>
            ~{name}
          </p>

        </div>
        {/* <a href="#"
        className='group/view-btn btn btn-outline flex items-center justify-center gap-x-2 !w-full'
        >
          View
          
        </a> */}

      </div>
    </div>
  )
}

export default Review