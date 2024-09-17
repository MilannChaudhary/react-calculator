import React from "react";
import "./display.css";
const DisplayComponent = ({ value }) => {
  return (
    <>
      <div className="display">{value}</div>
    </>
  );
};

const CalculatedComponent = ({ value }) => {
  return (
    <>
      <div className="calculated">{value}</div>
    </>
  );
};

export { DisplayComponent, CalculatedComponent };
