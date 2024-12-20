//! Array in TS

//? In TypeScript, you can create and initialize arrays using various approaches;

// a) Using square brackets:
const numbers: number[] = [1, 2, 3, 4, 5, 6];

//b) Using the Array constructor:

const numbers1: number[] = new Array(1, 2, 3, 4, 5, 6);

//c) Using the Array.of method:

const names: string[] = Array.of("vinod", "thapa", "youtube");

//Operation: Accessing elements using index:
//? You can access individual elements of an array using square brackets notation with the index of the element. Remember that array indices start from 0.

console.log(names[2]);


//TODO HomeWork Time
const value1 = [1, 2, 3, 4, 5];
//Is valuel an array? Yes or No
const value2 = "Hello, world!";
//Is value2 an array? Yes or No?
const value3 = { name: "John", age: 30 };
//Is value3 an array? Yes or No?
const value4 = [true, false, true];
//Is value4 an array? Yes or No?
const value5 = 42;
//Is vatues an array? Yes or No?