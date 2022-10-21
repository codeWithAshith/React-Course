import React from "react";

const SecondComponent = ({ value }) => {
  let clickHandler = () => {
    console.log("clicked");
  };
  return <p onClick={clickHandler}>{value}</p>;
};

export default SecondComponent;
