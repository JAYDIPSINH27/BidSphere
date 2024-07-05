import React, { forwardRef } from 'react'

const Tender = forwardRef(({ id, title, sector, duration, thumbnail, organization: { name, pic }, ending_date }, ref) => {
  return (
    <div className='group relative h-[350px] border-[1.5px] border-solid border-transparent rounded-4xl overflow-hidden transition-colors duration-300'
      ref={ref} data-id={id} data-category={sector.toLowerCase()} data-difficulty="short"

    >
      <div className='w-full h-full'>

        <img src={thumbnail} alt={title} />
      </div>

      <div className='absolute bottom-0 inset-x-0 h-24 p-2 m-2 bg-white border-[1.5px] border-solid border-transparent rounded-3xl transition-colors duration-300 grop-hover:border-grey-10'>
        <a href="" className='flex flex-col justify-between h-full ' title={title}>
          {/* {title} */}
          <div className='flex justify-between gap-4'>
            <p className='text-lg font-medium text-gray-10 whitespace-nowrap text-ellipsis overflow-hidden'>
              {title}
            </p>
            <div className='flex items-center gap-4 rounded-md p-1 h-fit bg-[var(--bg-alpha-35)]'>
              <p className='text-sm font-semibold !leading-[normal] text-gray-10'>
                {sector}
              </p>
              {/* <p className='text-sm font-demibold text-gray-10'>
                {duration}
              </p> */}

            </div>

          </div>

        {/* Organization */}
        <div className='flex justify-between items-center '>
          <div className='flex items-center gap-x-4'>
            <div className='w-9 h-9 rounded-full overflow-hidden'>
              <img src={pic} alt="name" />
            </div>
            <p className='text-base font-medium'>
              {name}
            </p>
          </div>
          <div className='flex items-center gap-x-2'>
              <h6>
               Ending Date: {ending_date}
              </h6>
          </div>
        </div>

        </a>

      </div>

    </div>
  )
})

export default Tender