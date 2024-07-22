// Author: Christin Saji

import React from 'react';
import SignupForm from '../../organisms/SignupForm';

const SignupTemplate = () => (
  <section className="min-h-0 pt-8 pb-0">
    <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-wrap items-center justify-center lg:justify-between">
      <div className="w-full md:w-6/12 lg:w-6/12">
        {/* Image Source: https://www.freepik.com/free-vector/sign-concept-illustration_5423351.htm */}
        <img
          src="src/shared/assets/signup.jpg"
          className="w-full h-full object-cover"
          alt="Signup Illustration"
        />
      </div>
      <div className="w-full md:w-6/12 lg:ms-6 lg:w-5/12 bg-bslightgreen p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-bsnavyblue">
          Sign Up
        </h2>
        <SignupForm />
      </div>
    </div>
  </section>
);

export default SignupTemplate;
