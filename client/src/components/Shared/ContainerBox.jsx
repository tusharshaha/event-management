import React from "react";

const ContainerBox = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto md:px-8 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default ContainerBox;
