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

/*
f. The program must let the user pick one of these to do. 
*/ 


Button1.onclick=function(){
  withMarmaduke.splice(5, 1); 
  alert(`You removed Vinny from the array.`);
  console.log(`The action taken was: Remove Vinny. The remaining array data are: ${withMarmaduke}.`);
}


Button2.onclick=function(){
  withMarmaduke.splice(3, 1); 
  alert(`You removed Marty from the array.`);
  console.log(`The action taken was: Remove Marty. The remaining array data are: ${withMarmaduke}.`);
}

Button3.onclick=function(){
  let addNancy = withMarmaduke.unshift("Nancy");
  alert(`You added Nancy to the array.`);
  console.log(`The action taken was: Add Nancy to the beginning of the array. The new array data is: ${withMarmaduke}.`)
}
