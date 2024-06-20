import React from 'react'
import { hero01, hero02, hero03, Hero4, Hero5, Handshake } from '../../../shared/constants/images'
import {motion} from 'framer-motion'
import { leftSideVariants,rightSideVariants } from '../../../shared/constants/motion'

const Hero = () => {
  return (
    <section className='flex items-center pt-2'>

      <div className='container flex items-center justify-center '>
        <div className='flex justify-between items-center flex-col-reverse lg:flex-row  lg:pt-0 gap-8'>

          {/** Left Side */}
          <motion.div
          variants={leftSideVariants}
          initial="hidden"
          animate="visible"
          className='flex flex-col gap-y-8 items-center lg:items-start text-center lg:text-start'>
            <div className='flex flex-col gap-y-4'>
              <h2 className='section-title-before section-title-after text-h1 text-gray-10'> Igniting Procurement Excellence</h2>
              <p className='text-base font-medium text-gray-60'>
                <span className='text-logo-primary'>BidSphere </span>
                is the ultimate procurement platform, connecting issuers and
                bidders seamlessly.
              </p>
              <div
                className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16 sm:shadow-sm">
                <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Looking for new tenders, We are your go-to destination

                </p>


                {/* <form > */}
                <label
                  className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                  htmlFor="search-bar">

                  <input id="search-bar" placeholder="Find your next contract now" name="q"
                    className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" required="" />
                  <button
                    className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all">
                    <div className="flex items-center transition-all opacity-1">
                      <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                        Find
                      </span>
                    </div>
                  </button>
                </label>
                {/* </form> */}


              </div>
              {/* <button
                type="button"
                className='btn btn-primary'
              >
                Get Started
              </button> */}
            </div>

          </motion.div>

          {/*Right Side */}
          <motion.div 
          variants={rightSideVariants}
          initial="hidden"
          animate="visible"
          className='relative'>
            <div className='grid grid-cols-[minmax(70px,_230px)_minmax(70px,_250px)] grid-rows-[auto_auto] sm:grid-cols-[240px_270px] sm:grid-rows-[220px_220px] xl:grid-cols-[270px_300px] xl:grid-rows-[250px_250px] gap-4'>
              <img src={Hero4} alt='hero02' className='rounded-4xl shadow-lg' />
              <img src={Handshake} alt='hero03' className='rounded-4xl shadow-lg' />
              {/* <img src={hero02} alt='hero01' className='rounded-lg shadow-lg' /> */}
              <img src={hero03} alt='hero01' className='rounded-4xl shadow-lg' />

              <img src={Hero5} alt='hero04' className='rounded-4xl shadow-lg' />

            </div>
          </motion.div>
        </div>

       

      </div>
      
    </section>
  )
}

export default Hero