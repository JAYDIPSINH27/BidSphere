import React from 'react'
import { Tender,SectionHeader, SliderNavigation } from '../../molecules/LandingPage'
import {register} from "swiper/element/bundle"
import 'swiper/css';
import { tenders } from '../../../shared/constants';
import {motion} from 'framer-motion'
import { centerVariants } from '../../../shared/constants/motion';  
register();

const RecentTenders = () => {
  const sliderRef = React.useRef(null);
  const swiperParams = {  
    spaceBetween: 16,
    grabCursor: true,
    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      992:{
        slidesPerView:2,
      },  
    }
  }

  React.useEffect(() => {

    sliderRef.current && Object.assign(sliderRef.current,swiperParams)
   }
  , [])

  const dateThreshold = new Date();
  dateThreshold.setDate(dateThreshold.getDate() - 365);
  
  const recentlyAddedTenders = tenders.filter(tender => new Date(tender.publish_date) >= dateThreshold);
  
  return (
    <section id="popular">


      <div className='container flex flex-col gap-y-24 px-1'>
        <SectionHeader title="Explore Most Recent Tenders"  />
        <motion.div 
        // variants={centerVariants}
        // initial='hidden'
        // whileInView="visible"
        // viewport={{margin:"0px 0px -200px 0px",once:true}}
        className='flex flex-col gap-y-4'>
          <swiper-container ref={sliderRef}>
            
            {
            recentlyAddedTenders.map((tender)=>{
                
                  return (
                    <swiper-slide key={tender.id} >
                      <Tender 
                      id={tender.id} 
                      title={tender.title} 
                      sector={tender.sector}
                      duration={tender.duration}
                      thumbnail={tender.thumbnail}
                      organization={{name:tender.organization.name, pic:tender.organization.pic}}
                      ending_date={tender.ending_date}
                      />
                    </swiper-slide>
                  )
                
            })
            }
          </swiper-container>
          <SliderNavigation ref={sliderRef}/>

        </motion.div>
      </div>

    </section>

  )
}

export default RecentTenders