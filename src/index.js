/* 1a.Import React */
import React from "react";

/* 1b.Import React DOM */
import ReactDOM from "react-dom";

/* 5d i. Import Header */
import Header from "./header";

/* 5d ii. Import Card */
import Card from "./card";

/* 7. Import weatherDeatils */

/* 9c. Import your newly created App component */

/* 1c.Render Your Code 
    HINT: ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW IT)
*/

/* 2a.Add one more h1 tag to your render method 
    HINT: The render method accepts only one HTML tag as its first parameter
    HINT: Wrap both your h1 tags inside a single div to render them
*/

/* 2b.Use a variable to render your name in the second h1 tag 
   HINT: Use a JavaScript variable to hold your name
   HINT: Replace the content in the second h1 tag with your variable name enclosed in curly braces {}*/

/* 2c.Replace the variable name within the curly braces with different JavaScript expressions 
   Example: 2+3 
            myName*5 
   etc
   Did you try using JS statements? Did they work? Why or Why not?
*/

/* 3a.Add custom styling for your first h1 tag
   HINT: Apply the styles present in the title class in styles.css to your h1
   Did you get a warning here? Try changing the class attribute to className instead.  */

/* 3b.Add custom styling for your second h2 tag
   HINT: Use inline css to set the text color to blue
   HINT: Set style to a javascript object containing a key value pair for each style attribute
   HINT: style = {{color:blue}}  */

/* 4. Let's now create our first weather card!*/

/* 4a. Copy paste the Card div to create a row of cards with different information */

/* 4a. Or actually, don't. This is where react components come in */

/* 4b. i.Create a function with the name of your 1st component - Header
       ii.Return the Header div in your Header function
       iii.Add a <Header/> tag to your main div to render the Header component */

/* 4c. Repeat steps i and ii for your Card Component
       Add 5 new cards to your WeatherCards div
       NOTE: The content of each of these cards will be the same, but we'll modify that later :D */

/* 5a. Now that you've successfully created 2 new components, try importing them into this module.
   Create 2 new files named Header.jsx and Card.jsx in the src folder
   Move your functions to their respective files. */
ReactDOM.render(
  <div>
    <Header />
    <div className="WeatherCards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>,
  document.getElementById("root")
);

/* 5d. After completing steps 5b and 5c, add import statements at the beginning of your code. 
   Your app should now look the same as it previously did, without any errors */

/* 6a. Add a props parameter to your Card component */

/* 6b. Use attributes day, imageSrc, description and temperature to pass information to your component
         Example : 
<Card day="Sunday" imageSrc="https://www.flaticon.com/svg/static/icons/svg/1779/1779906.svg" description="Sunny" temperature="27°C"/> 
   Your app should now look the same as it previously did, without any errors */

/* 6c. Try adding a HTML Attribute (For example: className) to your Card component. Did it work? Why or why not? */

/* 7. You can also use import statements to import data to your app.
      For instance, the properties of each component can be imported from the WeatherDetails file. 
      Import information from the weatherDetails file and use it to populate your card components*/

/* 8. Use the JavaScript map function to loop through your wD array and create custom cards 
for each Day of the week */

/*WITH ARROW FUNCTION*/

/*WITHOUT ARROW FUNCTION*/

/* 9. The last feature we're going to add to our app is an option to change the them from light to dark and back,
     with the click of a button. We will be using the concept of STATE and React's useState hook to achieve this*/

/* 9a. Firstly, Add a button to your main div, below the WeatherCards div.*/

/* 9b. Note that React Hooks can only be used inside a function, copy paste your entire code into app.jsx */

/* 9d. Now write a render statement that renders only an App component in the root div */
