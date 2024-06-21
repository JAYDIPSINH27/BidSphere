import React from "react";
import ContactFormContainer from "../../organisms/ContactFormContainer/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const ContactTemplate = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-bsnavyblue">
          Contact Us
        </h1>
        <h2 className="text-2xl font-bold mb-4 text-bslightblue">
          Get in Touch
        </h2>
        <p className="text-gray-500 mb-12 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We are here to assist you with your tender and procurement needs.
          Whether you have a question, need support, or want to learn more about
          our services, feel free to reach out to us. Our team is dedicated to
          providing you with the best service possible.
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2 space-y-6 text-left">
            <div className="flex items-center lg:items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-bsnavyblue rounded-lg">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-bsnavyblue">Our Address</h4>
                <p className="text-gray-600">
                  6299 South St, Halifax, Nova Scotia, Canada
                </p>
              </div>
            </div>
            <div className="flex items-center lg:items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-bsnavyblue rounded-lg">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-bsnavyblue">Contact</h4>
                <p className="text-gray-600">
                  Mobile: +1 (123) 456-7890
                  <br />
                  Mail: bidsphere@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center lg:items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-bsnavyblue rounded-lg">
                <FontAwesomeIcon icon={faClock} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-bsnavyblue">Working hours</h4>
                <p className="text-gray-600">
                  Monday - Friday: 08:00 - 17:00
                  <br />
                  Saturday & Sunday: 08:00 - 12:00
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <ContactFormContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTemplate;
