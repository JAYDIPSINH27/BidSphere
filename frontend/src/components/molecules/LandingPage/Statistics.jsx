import React from 'react'
import { statistics } from '../../../shared/constants'
import { motion } from 'framer-motion'
import { centerVariants } from '../../../shared/constants/motion'
const Statistics = () => {
  return (
    <motion.div variants={centerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "0px 0px -200px 0px", once: true }}
      className='py-[20px]'>
      <div className='container'>
        <div className='flex justify-center lg:justify-between itmes-start flex-wrap gap-8 rounded-4xl bg-gray-10 py-14 px-20'>
          {statistics.map((stat, index) => {
            return (
              <div key={index} className="w-[145px] flex flex-col items-center gap-y-4">
                <h1 className='text-h1 text-primary-50 '>{stat.number} </h1>
                <p className="text-xl text-center text-white">{stat.text} </p>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default Statistics