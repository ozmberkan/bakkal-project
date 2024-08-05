import React from "react";

const FlexContainer = ({ children }) => {
  return (
    <div className="flex gap-x-2 justify-between items-start mt-2">
      {children}
    </div>
  );
};

export default FlexContainer;
