import React, { useState } from "react";
import Input from "../../atoms/input/index";
import Textarea from "../../atoms/textarea/index";
import Button from "../../atoms/button/index";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const errors = {};

    if (!formData.name.match(/^[A-Za-z][A-Za-z\s]*$/)) {
      errors.name =
        "Name should contain only letters and spaces and must start with a letter";
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = "Invalid email format";
    }
    if (formData.message.trim() === "") {
      errors.message = "Message cannot be empty";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  return (
    <div className="relative">
      {showSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 font-medium text-white text-center py-2 px-4 rounded-lg shadow-lg">
          Form submitted successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          name="name"
          className={errors.name ? "border-red-500" : "border-gray-950"}
        />
        {errors.name && (
          <span className="text-red-500 text-sm mt-1">{errors.name}</span>
        )}
        <Input
          type="email"
          placeholder="Your email address"
          value={formData.email}
          onChange={handleChange}
          name="email"
          className={errors.email ? "border-red-500" : "border-gray-950"}
        />
        {errors.email && (
          <span className="text-red-500 text-sm mt-1">{errors.email}</span>
        )}
        <Textarea
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          name="message"
          className={errors.message ? "border-red-500" : "border-gray-950"}
        />
        {errors.message && (
          <span className="text-red-500 text-sm mt-1">{errors.message}</span>
        )}
        <br />
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
};

export default ContactForm;
