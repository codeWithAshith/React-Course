import React from "react";

const InlineStyle = () => {
  return (
    <div>
      <p
        style={{
          // text-align -> css
          textAlign: "center",
          border: "1px solid #e6e6e6",
          padding: "40px 25px",
          background: "blue",
          color: "white",
        }}
      >
        Hello
      </p>
    </div>
  );
};

export default InlineStyle;
