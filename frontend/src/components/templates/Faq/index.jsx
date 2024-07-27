/* eslint-disable react/prop-types */
import React from 'react';
import RedirectToQnA from '@components/molecules/RedirectToQnA';
import FaqGroup from '../../organisms/FaqGroup';

function Faqs({ faqs }) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-bsnavyblue">Frequently Asked Questions</h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Get answers to the most common questions about our platform.
          </p>
        </div>
        <FaqGroup faqs={faqs}></FaqGroup>
        <RedirectToQnA />
      </div>
    </section>
  );
}

export default Faqs;
