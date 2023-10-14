import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="pb-8 text-center md:w-2/5 mx-auto">
      <p className="text-purple-500 text-sm font-bold">{title}</p>
      <h3 className="text-indigo-900 text-xl md:text-3xl font-bold">
        {subtitle}
      </h3>
    </div>
  );
};

export default SectionTitle;
