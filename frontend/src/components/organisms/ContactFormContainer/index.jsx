import React from "react";
import ContactForm from "../../molecules/ContactForm/index";

const ContactFormContainer = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-bslightgreen shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-bsnavyblue">
        Ready to Get Started?
      </h2>
      <ContactForm />
    </div>
  );
};

export default ContactFormContainer;
