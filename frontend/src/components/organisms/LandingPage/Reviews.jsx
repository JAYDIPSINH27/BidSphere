import React from 'react'
import { Review, SectionHeader, SliderNavigation } from '../../molecules/LandingPage'
import { register } from 'swiper/element'
import { reviews } from '../../../shared/constants'
import { motion } from 'framer-motion'
import { centerVariants, leftSideVariants } from '../../../shared/constants/motion'
register()

const Reviews = () => {
  const sliderRef = React.useRef(null)
  const swiperParams = {
    spaceBetween: 16,
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }
    }
  }

  React.useEffect(() => {

    sliderRef.current && Object.assign(sliderRef.current, swiperParams)
  }
    , [])
  return (
    <section id="reviews">
      <div className='container'>
        <div className='flex flex-col gap-y-24'>
          <SectionHeader
            title="What our customers say about us"
            link="#"
          />

          <motion.div
            variants={centerVariants}
            initial='hidden'
            whileInView="visible"
            viewport={{ once: true }}
            className='flex flex-col gap-y-4'>

            <swiper-container ref={sliderRef}>
              {
                reviews.map((review) => {
                  return (
                    <swiper-slide key={review.id}>
                      <Review
                        id={review.id}
                        name={review.name}
                        review={review.review}
                        pic={review.pic}
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

export default Reviews