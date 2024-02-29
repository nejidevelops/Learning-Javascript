// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let today = new Date();
let day = days[today.getDay()];

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

let formattedHours = hours > 12 ?  `${hours} PM` : `${hours} AM`;


console.log(`Today is: ${day}`);
console.log(`Current time is: ${formattedHours} : ${minutes} : ${seconds}`);
