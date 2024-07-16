/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { act } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader, Tender } from '../../molecules/LandingPage';
import { categories, tenders } from '../../../shared/constants';
import getRandomElements from '../../utils/getRandomElements';

const MotionTender = motion(Tender);

function Tenders() {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const [categorizedCourses, setCategorizedCourses] = React.useState(getRandomElements(tenders, 6));

  const handleCategory = (item) => {
    setActiveCategory(item);
    if (item === 'All') {
      setCategorizedCourses(getRandomElements(tenders, 6));
    } else {
      setCategorizedCourses(tenders.filter(tender => tender.sector === item));
    }
  };
  return (
    <section id="tenders">
      <div className="container ">
        <div className="flex flex-col gap-y-24">
          <SectionHeader
            title="Explore all the 20+ sectors"
            link="#"
          />
          <div className="flex flex-col items-center">
            <div className="flex items-center px-6 w-[calc(100%-1.5rem)] overflow-auto">
              {
                categories.map((category, index) => (
                  <div
                    className={`group flex items-center justify-center px-8 py-6 min-w-[120px] bg-white rounded-t-4xl hover:bg-gray-30 [&:is(.active)]:!bg-bsnavyblue cursor-pointer transition-colors duration-300 ${activeCategory === category ? 'active' : ''}`}

                    key={index}
                    onClick={() => handleCategory(category)}
                  >
                    <p className="text-xl md:text-2xl font-medium text-gray-10 group-hover:text-white group-[.active]:text-white transition-colors duration-300">
                      {category}

                    </p>

                  </div>
                ))
              }
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 w-full min-h-[540px] p-4 bg-bsnavyblue rounded-4xl">
              {categorizedCourses.map(tender => (
                <MotionTender
                  layout
                  intitial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: 'easeInOut', duration: 0.5 }}
                  key={tender.id}
                  id={tender.id}
                  title={tender.title}
                  sector={tender.sector}
                  duration={tender.duration}
                  thumbnail={tender.thumbnail}
                  organization={{ name: tender.organization.name, pic: tender.organization.pic }}
                  ending_date={tender.ending_date}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Tenders;
