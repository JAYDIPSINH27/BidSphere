import React from "react";

const Textarea = ({ placeholder = "", value, onChange, name }) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="w-full px-4 py-2 border border-gray-950 rounded-md focus:outline-none focus:ring-2 focus:ring-bsnavyblue"
    ></textarea>
  );
};

export default Textarea;
