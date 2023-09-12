#codesandbox.io #https://www.appbrewery.co/p/web-development-course-resources/

- ***

# var React = require("react");

# var ReactDom = require("react-dom");

# ReactDom.render("what to show", "where to show it")

OR

# import React from 'react';

# import ReactDOM from 'react-dom/client';

# const myFirstElement = <h1>Hello React!</h1>

# const root = ReactDOM.createRoot(document.getElementById('root'));

# root.render(myFirstElement);

OR

# var h1 = document.createElement("h1);

# hi.innerHTML = "hello world"

# document.getElementById("root").appendChild(h1);

###################################################################
what is babel
this is a javascript compiler, that converts es6,7,8 or even next gen js to what older version browsers will understand

#######################################################################
styling in react

.header{
color:red;
}

<h1 className="header"> hello spine </h1>

OR

//doing inline

<h1 style={{color:red}}> hello <h1>

OR

const customStyle = {
color: "red",
fontSize: "20px",
border: "1px solid black"
};

ReactDOM.render(

  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);

//BOTE, CONVERT ALL YOUR CSS PROPERTIES TO CAMELCASE
#############################################################################
