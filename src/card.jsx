/* 5c i. Import React */
import React from "react";

/* 5c ii. Paste your function  here */
function Card() {
  return (
    <div className="CardLight">
      <div className="Day">Sunday</div>
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/1779/1779906.svg"
        alt="Sunny"
        className="WeatherPicture"
      ></img>
      <div className="WordDescription">Sunny</div>
      <div className="Temperature">27°C</div>
    </div>
  );
}

/* 6a. i.  Add a props attribute to the Card function
       ii. Props is an object that contains information stored as key value pairs
       iii.Use the values in props inplace of hardcoded text/links in your Component 
           Ex. Replace 'Sunday' with {props.day}
           NOTE the curly braces here, because we're adding JS code to a HTML tag*/

/* 10d. Write a conditional statement to change the className of the main div based on the value of theme
    Modify the className attribute, use 'CardLight' for light theme(0) and 'CardDark' for dark theme(1)
*/

/* 5c iii. Add an export default statement to export your module */
export default Card;