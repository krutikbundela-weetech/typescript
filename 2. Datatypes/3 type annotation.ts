// ? Introduction To Types in TypeScript - P-4
// * In TypeScript, type annotation is a way of explicitly specifying the type of a variable, function parameter, or function return value.

// let num1:number
// num1 = "krutik";
// num1 = 10

// ! Advantages
//? It helps the TypeScript compiler to
//? enforce type checking and provide type safety during development.
//? what operations could we performed on that variable or value

//? Type annotations are expressed by using a colon (:) followed by desired type after the variable or function parameter declaration. there can be a space after the colon.


//! Important: Type Casing
// In TypeScript, you work with types like string or number all the times.

// Important: It is string and number (etc.), NOT String, Number etc.

// The core primitive types in TypeScript are all lowercase!

// *------------------
// * Number Type
// *------------------
//? the number type represents numeric values,including integers and floating-point numbers.

//TODO Arithmetic Operations:
//? Number types in TypeScript support arithmetic operations such as
//? addition (+), subtraction (-), multiplication(*), and division (/).
//? The result of these operations on numbers also of type number.

let myFavNum: number = 5;
let myAge: number = 29;
let pi: number = 3.147;
let myNegVal: number = -5;

//error
// let invalidResult: number = myAge + "Krutik";
// let invalidResult: number =  "Krutik";

// let computedValue: number = Math.sqrt(16);

// ? NaN

// let nanValue: number = NaN

// Assigning NaN (Not-a-Number) to a variable in TypeScript is valid because NaN is a valid value of the number type. Here's how it works:

// Code Example:
// let nanValue: number = NaN;
// console.log(nanValue); // Outputs: NaN
// Explanation:
// NaN is a Number: In JavaScript and TypeScript, NaN is a special numeric value representing an invalid number (e.g., the result of 0 / 0).
// number Type: Since NaN belongs to the number type, it can be assigned to a variable declared as number.
// Common Scenarios Where NaN Appears:
// Invalid Arithmetic Operations:

// typescript
// Copy code
// let result: number = 0 / 0; // NaN
// console.log(result); // Outputs: NaN
// Parsing Invalid Strings to Numbers:

// let parsedValue: number = Number("invalid");
// console.log(parsedValue); // Outputs: NaN
// Checking for NaN:
// To check if a value is NaN, use the isNaN function:

// if (isNaN(nanValue)) {
//     console.log("nanValue is NaN");
// }
// Important Notes:
// NaN is Not Equal to Itself: A peculiar property of NaN is that it is not equal to itself.

// console.log(NaN === NaN); // Outputs: false
// Use isNaN to check for NaN instead.

// TypeScript Type Safety: The type number accepts NaN without issues, but ensure you handle it appropriately in logic to avoid unintended bugs.

// *------------------
// * String Type
// *------------------

//* Any value under single of double quotes are treated as string, Also any exp. result string as output

let myFullName = "Krutik Bundela";
let myFirstName = "Krutik";
let MyLastName = "Bundela";

myFullName = myFirstName + MyLastName;
console.log("file: 3 type annotation.ts:92 ~ myFullName:", myFullName);
console.log("file: 3 type annotation.ts:92 ~ myFullName:", myFullName);

// ! Here are some practice questions related to string types in TypeScript:

// todo String Initialization:
//? Declare a variable message of type string and assign it the value "Hello,TypeScript !.

let msg: string = "Hello, Krutik!";

// todo Concatenation:
// ? Create two variables firstName and lastName of type string and assign them your first name and last name, respectively. Concatenate the two variables and store the result in a variable called fullName.

myFullName = myFirstName + MyLastName;

//todo String Length:
// ? Declare a variable sentence of type string and assign it a sentence of your choice. Find the length of the string and store it in a variable called sentenceLength.

let sentence: string = "this is string";
let sentenceLength: number = sentence.length;
console.log("file: 3 type annotation.ts:199 ~ sentenceLength:", sentenceLength);

// todo Uppercase and Lowercase:
// ? Declare a variable text of type string and assign it a sentence of your  choice. Convert the entire sentence to uppercase and store the result in a variable called uppercaseText. Then convert the entire sentence to lowercase and store the result in a variable called lowercaseText.

let text: string = "this is string";
let uppercaseText: string = text.toUpperCase();
let lowercaseText: string = text.toLowerCase();
console.log("file: 3 type annotation.ts:207 ~ uppercaseText:", uppercaseText);
console.log("file: 3 type annotation.ts:209 ~ lowercaseText:", lowercaseText);

// todo 👉  Substring:
// Declare a variable longText of type string and assign it a long sentence. Extract the first 10 characters from longText and store them in a variable called shortText.

const longText: string = "This is the long string of the longText variable";

const shortText: string = longText.substring(0, 10);

console.log("shortText:", shortText);

//  todo 👉  String Comparison:
// Declare two variables str1 and str2 of type string and assign them different sentences. Compare the two strings and store the result (true or false) in a variable called areEqual.

const str1: string = "hello";
const str2: string = "hi";

const areEqual: boolean = str1 == str2;

console.log("areEqual: ", areEqual);

//  todo 👉  String Template:
// Declare variables product and price of type string and number, respectively. Create a string using template literals to display the product and its price in the format "The product {product} is priced at {price} dollars."

const product: string = "Biscut";
const price: number = 34;

console.log(`The product ${product} is priced at ${price} dollars.`);

// *------------------
// * Boolean Type
// *------------------

//? In TypeScript, the boolean type represents a value that can be either true or false. It is one of the basic primitive types in the language.

let isMyName: boolean = true;
let isDone: boolean = false;

//!Question: Check Even Number
//* Write a TypeScript function called isEven that takes a number as a parameter and returns true if the number is even and false otherwise.

function isEven(anyNumber: number): boolean {
  if (anyNumber % 2) {
    return true;
  } else {
    return false;
  }
}

const result = isEven(10);

//todo write a TypeScript function called isDivisibleBy4And8 that takes a number as a parameter and returns true if the number is divisible by both 4 and 8.

function func(a: number): boolean {
  return (a % 4 && a % 8) === 0;
}
console.log(func(16));

// *------------------
// * BigInt Type
// *------------------

//? It is a built-in type that allows you to work with numbers that are larger than the range supported by the regular number type.

//?BigInt literals are written by appending the n suffix to an integer literal.
//? In JS we can't read the whole numbers beyond 2 raise to power 53

// let maxSafeNumber = Number.MAX_SAFE_INTEGER;
// let maxSafeNumber = (Number as any).MAX_SAFE_INTEGER;

// let maxNumber: bigint = 9000009090909009099090n;
// let newNumber: bigint = BigInt("9000009090909009099090");

//! Assignment
// var sum2 = bigNumber + anotherBigNumber;
// console.log("sum2 "+ sum2);

//* let difference = bigNumber - anotherBigNumber;

//* let product = bigNumber * anotherBigNumber;

//* let division = bigNumber / anotherBigNumber;

// *------------------
// * Any Type
// *------------------
//? The any type is the most flexible type in TypeScript. It essentially turns off all type checking for the variables or expressions it is applied to.

//? you will see any type when u first write the code

// let myFavNum1: any = 5;

// myFavNum1 = "krutik";

//! useCases
//* Working with Dynamic Data: When dealing with data from dynamic sources like user inputs, network responses, or deserialized JSON objects, the any type can be useful.

//* Migration from JavaScript: When migrating an existing JavaScript codebase to TypeScript, using the any type can be a convenient way to quickly annotate variables and functions without immediately specifying their precise type

// *------------------
// * unknown Type
// *------------------

//? The unknown type is a safer alternative to "any" because it still enforces type checking and type safety.
//? Variables of type unknown can hold values of any type, but you must perform type checks or type assertions before using them in specific ways.

let num2: unknown;
num2 = 5;
num2 = "thapa";
num2 = true;

if (typeof num2 === "number") {
  console.log(num2 + 5);
} else if (typeof num2 === "boolean") {
  console.log(num2);
}

async function fetchData(): Promise<unknown> {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    return data;
}

async function processData() {
    const res = await fetchData();

    if (typeof res === "object") {
        //perform operations
    }
}






