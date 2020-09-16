/* 
c. On the 'pets' form, create an array named 'petNames' that contains the pet names below:
Darcy, Jack, Jerry, Marty, Vito, Vinny, Riley, Saddie, Marge, Sam
*/

let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"];

console.log(petNames);

/* 
d. Use an array method to create a new array named "withMarmaduke
that holds the original array data with the string "Marmaduke" added as the last item
*/

let withMarmaduke = petNames.concat("Marmaduke");

console.log(withMarmaduke);

/*
Write some code that uses at least one array method to do something.
*/

let nameLengths = withMarmaduke.map(item => item.length);

console.log(nameLengths); 
