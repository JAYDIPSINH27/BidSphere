/* eslint-disable no-unused-vars */
import React from 'react';

import withAppBarFooter from '../../../shared/hoc/withAppBarFooter';
// import withHeaderFooter from '../../../shared/hoc/withHeaderFooter';
import { Statistics, CTA } from '../../molecules/LandingPage';
import {
  About, Blogs, Tenders, Hero, Reviews, RecentTenders,
} from '../../organisms/LandingPage';

function HomePage() {
  return (

    <div className="">
      <Hero />
      <Statistics />
      <About />
      <RecentTenders />
      <Tenders />
      <Reviews />
      <Blogs />
      {/* <CTA/> */}
    </div>

  );
}

export default withAppBarFooter(HomePage);
