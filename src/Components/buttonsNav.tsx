import * as React from "react";
import { AwesomeButton } from "react-awesome-button";
import {styles} from "react-awesome-button/src/styles/themes/theme-blue";

const buttonsNav = ({ label }) => {

  const construyeButton = (params) =>
  (
    params.map((value) => (
        <div key={label} className="containerButton">
            <AwesomeButton cssModule={styles}   size="large"  type="primary" > {value}</AwesomeButton>
        </div>
           ),
        )
     );

  return (
        <div>
          {construyeButton(label)}
        </div>
          );
};

export default buttonsNav;
