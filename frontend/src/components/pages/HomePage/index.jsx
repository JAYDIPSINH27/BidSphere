import React from 'react'

import withAppbarFooter from '../../../shared/hoc/withAppbarFooter';
import withHeaderFooter from '../../../shared/hoc/withHeaderFooter';
import { Statistics, CTA } from "../../molecules/LandingPage";
import { About, Blogs, Tenders, Hero, Reviews, RecentTenders } from "../../organisms/LandingPage";

const HomePage = () => {
  return (

    <div className=''>
      <Hero/>
      <Statistics/>
      <About/>
      <RecentTenders/>
      <Tenders/>
      <Reviews/>
      <Blogs/>
      {/* <CTA/> */}
    </div>

  )
}

export default withAppbarFooter(HomePage);