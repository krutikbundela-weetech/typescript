//* In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of elements of different types. They are similar to arrays, but with a key difference: the types of elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type, and their size can vary.

//? Real-life example of using tuples in TypeScript:

//? Let's consider a scenario where you want to represent a person's basic information, including their name, age, and whether they have a driver's license. Using a tuple can be an appropriate choice because these three elements have a specific order and type.


// Defining a tuple type for person information
type PersonInfo = readonly [string, number, boolean]

// Function to display person information
const display = (person:PersonInfo) => {
    const [name , age , hasDriverLicense] =person;
    console.log(`has driving licence ${hasDriverLicense?"Yes":"No"}`);
    
}


// Example usage
const person1: PersonInfo = ['vinod' ,29, true];
// const person20: PersonInfo = [29, 'thapa', false];
const person9: PersonInfo = ['vinod' ,17, false];

// person1.push("coding"); // nai krii sakaai cozzz readonlyy lakhiyuu che



//? What is a Tuple in TypeScript?
// A tuple in TypeScript is a specialized array type that allows you to define an array with a fixed number of elements, where each element has a specific type. This is particularly useful when you need to group related values with known types and positions.

// Defining a Tuple
// You define a tuple using a type annotation in square brackets [], specifying the type of each element:

// let tupleName: [type1, type2, ...];
// Examples
// Basic Tuple:

// let user: [string, number];
// user = ["Alice", 25]; // Valid
// user = [25, "Alice"]; // Error: Type 'number' is not assignable to type 'string'
// Optional Elements: Tuples can have optional elements using ?:

// let user: [string, number?];
// user = ["Alice"];     // Valid
// user = ["Alice", 25]; // Valid
// Read-Only Tuples: You can make tuples immutable using readonly:

// let user: readonly [string, number] = ["Alice", 25];
// user[1] = 30; // Error: Cannot assign to a readonly tuple
// Accessing and Modifying Tuple Elements
// Access Elements: You can access tuple elements using their index:

// typescript
// Copy code
// let user: [string, number] = ["Alice", 25];
// console.log(user[0]); // Output: Alice
// console.log(user[1]); // Output: 25
// Modify Elements: You can modify elements if the tuple is not readonly:

// typescript
// Copy code
// user[1] = 26;
// console.log(user); // Output: ["Alice", 26]
// Using Tuples in Functions
// Return Multiple Values: Tuples are often used to return multiple values from a function:

// typescript
// Copy code
// function getUser(): [string, number] {
//     return ["Alice", 25];
// }

// let user = getUser();
// console.log(user[0]); // Output: Alice
// console.log(user[1]); // Output: 25
// Destructuring Tuples: You can destructure tuples for better readability:

// typescript
// Copy code
// let [name, age] = getUser();
// console.log(name); // Output: Alice
// console.log(age);  // Output: 25
// Tuples vs Arrays
// Feature	Tuple	Array
// Length	Fixed	Dynamic
// Element Types	Can have different types	Typically homogeneous
// Access by Index	Index-based access	Index-based access
// Mutability	Can be mutable or readonly	Can be mutable or readonly
// Advanced Tuple Features
// Rest Elements: Tuples can include rest elements, allowing them to handle a flexible number of values for the specified type:

// typescript
// Copy code
// let tuple: [string, ...number[]];
// tuple = ["Alice", 1, 2, 3];
// Union of Tuples: You can use unions to define multiple valid tuple shapes:

// typescript
// Copy code
// let data: [string, number] | [string, number, boolean];
// data = ["Alice", 25];
// data = ["Alice", 25, true];
// Tuples are highly versatile and can greatly improve type safety when working with fixed-size arrays of mixed types. Let me know if you'd like more examples or specific use cases!