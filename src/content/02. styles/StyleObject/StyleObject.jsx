import React from "react";
import { styles } from "./styles";

const StyleObject = () => {
  console.log(styles.Header);
  return (
    <div>
      <p style={styles.Header}>Hi</p>
      <p style={styles.Body}>Hello</p>
    </div>
  );
};

export default StyleObject;
