/* 9b. The final code from step 9a has already been provided here for your use.
Wrap the makeCard function inside an App() function and export it as default. 
Replace the render function call with a return statement, you will not need the document.getElementById here */

import React from "react";
import Header from "./header";
import Card from "./card";
import wD from "./weatherDetails";

function App() {
  function makeCard(item) {
    return (
      <Card
        day={item.day}
        imageSrc={item.imageSrc}
        description={item.description}
        temperature={item.temperature}
      />
    );
  }
  return (
    <div
      style={{ height: "100vh" }}
    >
      <Header/>
      <div className="WeatherCards">{wD.map(makeCard)}</div>
      <button className="theme-btn">
        Change to Dark Theme
      </button>
    </div>
  );
}

export default App;

/* 10a. Create a new constant variable called theme and a function changeTheme
  Use the useState hook to initialise the theme variable and changeTheme method 
  */
//   const themeTemp = React.useState(0);
// const theme = themeTemp[0];
// const setTheme = themeTemp[1];

/* 10f. Define your change theme function. 
  The function should call the setTheme method and toggle the value of theme. */

/* 10e. Add a cardStyle prop attribute to your card and set its value to theme*/

/* 10b. Write a conditional statement to change the background color of the main div based on the value of theme
    Modify the style attribute, use white for light theme(0) and #1f1f1f for dark theme(1)
  */

/* 10c. Write a conditional statement to change the text inside the theme button based on value of the theme
    Display 'Change to Dark theme' for Light theme(0) and 'Change to Light theme' for Dark theme(1)
      */

/* 10g. Set your theme button's onClick Listener to changeTheme*/
