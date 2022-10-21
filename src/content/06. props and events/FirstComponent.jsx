import React from "react";
import SecondComponent from "./SecondComponent";

const FirstComponent = () => {
  const clickHandler = () => {
    let a = 6;
    let b = 9;
    console.log(a + b);
    console.log("clicked");
  };
  return (
    <div>
      <SecondComponent click={clickHandler} />
    </div>
  );
};

export default FirstComponent;
