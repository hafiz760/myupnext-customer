import React, { useEffect } from "react";

const DetectClickOutside = (props) => {
  // Detect Click Outside the Modal
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (props.clickRef.current && !props.clickRef.current.contains(e.target)) {
      props.setActiveState(false);
    }
  };
  return <div>{props.children}</div>;
};

export default DetectClickOutside;
