import React from 'react'
import SectionHeader from './../../molecules/LandingPage/SectionHeader';
import { register } from 'swiper/element';
import { blogs } from '../../../shared/constants';
import SliderNavigation from './../../molecules/LandingPage/SliderNavigation';
import Blog from './../../molecules/LandingPage/Blog';
import {motion} from 'framer-motion'
import { centerVariants } from './../../../shared/constants/motion';

register()
const Blogs = () => {

  const sliderRef = React.useRef(null)
  const swiperParams = {
    spaceBetween: 16,
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
    }
  }
  React.useEffect(() => {

    sliderRef.current && Object.assign(sliderRef.current, swiperParams)
  }
    , [])
  return (
    <section id="blog">
      <div className='container'>
        <div className='flex flex-col gap-y-24'>
          <SectionHeader
            title="Resources"
            link="#"
          />

          <motion.div 
          variants={centerVariants}
          initial='hidden'
          whileInView="visible"
          viewport={{margin:"0px 0px -200px 0px",once:true}}
          className='flex flex-col gap-y-4'>
            <swiper-container ref={sliderRef}>
              {
                blogs.map((blog) => {
                  return (
                    <swiper-slide key={blog.id}>
                      <Blog
                        id={blog.id}
                        title={blog.title}
                        description={blog.description}
                        thumbnail={blog.thumbnail}
                      />
                    </swiper-slide>
                  )
                })
              }
            </swiper-container>
            <SliderNavigation ref={sliderRef} />
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Blogs