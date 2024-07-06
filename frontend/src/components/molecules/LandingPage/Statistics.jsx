/* eslint-disable react/no-array-index-key */
import React from 'react';
import { motion } from 'framer-motion';
import { statistics } from '../../../shared/constants';
import { centerVariants } from '../../../shared/constants/motion';
function Statistics() {
  return (
    <motion.div
      variants={centerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: '0px 0px -200px 0px', once: true }}
      className="py-[20px]"
    >
      <div className="container">
        <div className="flex justify-center lg:justify-between itmes-start flex-wrap gap-8 rounded-4xl bg-bsnavyblue py-14 px-20">
          {statistics.map((stat, index) => (
            <div key={index} className="w-[145px] flex flex-col items-center gap-y-4">
              <h1 className="text-h1 text-primary-50 ">{stat.number} </h1>
              <p className="text-xl text-center text-white">{stat.text} </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Statistics;
