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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        name="name"
      />
      <Input
        type="email"
        placeholder="Your email address"
        value={formData.email}
        onChange={handleChange}
        name="email"
      />
      <Textarea
        placeholder="Write your message..."
        value={formData.message}
        onChange={handleChange}
        name="message"
      />
      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default ContactForm;
