import React from 'react'
import { SectionHeader } from '../../molecules/LandingPage'
import { categories } from '../../../shared/constants'
const Tenders = () => {
  return (
    <section>
      <div className='container '>
        <div className='flex flex-col gap-y-24'>
          <SectionHeader
          title="Explore all the 20+ sectors"
          link="#"
          />
          <div className='flex flex-col items-center'>
            <div className='flex items-center px-6 w-[calc(100%-1.5rem)] overflow-auto'>
              {
                categories.map((category,index) => {
                  <div 
                  className='group flex items-center justify-center px-8 py-6 min-w-[120px] bg-white rounded-t-4xl hover:bg-gray-30 [&:is(.active)]:!bg-gray-10 cursor-pointer transition-colors duration-300'
                  key={index}
                  >
                    <p className='text-xl md:text-2xl font-medium text-gray-10 group-hover:text-white group-[.active]:text-white transition-colors duration-300'>
                      {category}

                    </p>

                  </div>
                })
              }
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Tenders