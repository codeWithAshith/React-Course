import React from "react";

const FirstComponent = (props) => {
  let { value } = props;
  return (
    <p
      onClick={() => {
        console.log("clicked");
      }}
    >
      {value}
    </p>
  );
};

export default FirstComponent;
