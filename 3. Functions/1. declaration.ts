//! Function Declaration:
// *You can declare a function using the function keyword, followed by the function name, a list of parameters enclosed in parentheses, and a return type.
// *The function body contains the code that will be executed when the function is called.

//! Function Invocation:
//*To execute a function, you simply invoke it by using its name followed by parentheses.
//*You can provide arguments (actual values) for the parameters defined in the function declaration.

//function declaration
function greeting(name: string, age: number): string {
  // console.log(`${name} your age is ${age}`);
  return `${name} your age is ${age}`;
}

//call function
greeting("krutik", 18);

//arrow  function
const greeting2 = (name: string, age: number): string => {
  console.log(`${name} your age is ${age}`);
  return `${name} your age is ${age}`;
};


//TODO Practice Time
//? Write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.

const isPalindrome = (palin:string):boolean =>{
    let myPalin = palin.split("").reverse().join("");

    return myPalin === palin 
}

isPalindrome("12321")


//! Homework
//? 1: Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.

const calculateAverage = (myarr: number[]) => {
  const sum = myarr.reduce(
    (accumulator: number, currentVal: number) => accumulator + currentVal
  );
  return sum / myarr.length;
};

const average = calculateAverage([6, 8, 11, 10, 15, 12]);
console.log("Average of numbers :", average);

//? 2: Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.


const findMaxValue = (par: any): number => {
  let max = par[0];
  for (let i = 1; i < par.length; i++) {
    if (par[i] > max) {
      max = par[i];
    }
  }
  return max;
};

let arr2 = [8, 90, 56, 4, 1, 3, 4, 32];
console.log(findMaxValue(arr2));