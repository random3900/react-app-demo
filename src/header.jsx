/* 5b i. Import React */
import React from "react";

/* 5b ii. Paste your function  here */

/* 10d. Write a conditional statement to change the background of the header div based on the value of theme
    Modify the style attribute, use '#d9ecf2' for light theme(0) and '#fabe02' for dark theme(1)
*/
function Header(props) {
  return (
    <div
      className="Header"
      style={{ background: props.headerStyle === 0 ? "#d9ecf2" : "#fabe02" }}
    >
      Weather Forecast
    </div>
  );
}

/* 5b iii. Add an export default statement to export your module */
export default Header;
