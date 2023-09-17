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

DOWNLOAD REACT DEVELOPMENT TOOLS - CREATED BY GOOGLE
refresh given website to see component tabs updated right next in the developer tools

these react comp tools makes it easy to see whats going on in these componenets

##################################################################################

- mapping components to avoid repetitve code like this
    <!-- <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
    <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
    <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> -->

  -- so what does the map function do, it loops through every single element of an array, and runs a function on each element.
  -- and while trying to create a map function, it require a unique value or key to identify each element. it is advisable to have an
  -- id in your array of objects or automatically create one... this is used to ensure the right order of item into the tree

  ####################################################################################################################################

  - other methods of manipulating arrays in react, are => filter, reduce
    var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.----------------

//forEach and Map
// forEach needs new array and the push method while map function comes with a new array
//The map() method of Array instances creates a new array populated with the results of calling a provided function on every
//element in the calling array.

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x \* 2);

console.log(map1);
///////////////////////////////////////////////////////////////////
The forEach() method of Array instances executes a provided function once for each array element.
for Each
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
// Expected output: Array [2, 8, 18, 32]
/////////////////////////////////////////////////////////////////

//Filter - Create a new array by keeping the items that return true.---------------

//The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just
//the elements from the given array that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

//Reduce - Accumulate a value by doing something to each item in an array.------------------

//The reducer walks through the array element-by-element, at each step adding the current array value to the result from the
//previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);
// Expected output: 10

//Find - find the first item that matches from an array.------------------------------------
//The find() method of Array instances returns the first element in the provided array that satisfies the provided
//testing function. If no values satisfy the testing function, undefined is returned.

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12

//FindIndex - find the index of the first item that matches.----------------------------------
//The findIndex() method of Array instances returns the index of the first element in an array that satisfies
//the provided testing function. If no elements satisfy the testing function, -1 is returned.

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3

###########################################################################################################################

- array destructuring
  -lets use an example
- const arr = [234, 445, 555]
  -to destructure this now, we would do
  const [red, blue, green] = [234, 445, 555] // for array
  const {red, blue, green} = {234, 445, 555} //for objects

#############################################################################################################################
React Hook => use it inside your component function but above render or return

- you must use a hook in a functional component
  const [count, setCount] = useState(0)
