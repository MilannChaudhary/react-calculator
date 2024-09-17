import React from "react";

const ButtonComponent = ({ label, onClick, className }) => {
  return (
    <>
      <button className={className} onClick={() => onClick(label)}>
        {label}
      </button>
    </>
  );
};

export default ButtonComponent;
