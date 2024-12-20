//? Intersection types allow you to combine multiple types into a single type. You use the & (ampersand) symbol to define an intersection type.

type Person101 = {
    name: string;
    age: number
}

type Employee = {
    emp_id:number;
    department:string
}

type EmployeeDetails = Person101 & Employee

const emp1:EmployeeDetails = {
    name:"Krutik",
    age:20,
    emp_id:1,
    department:"sales"
}

//* Practice: Create User Profile
//*You are given two TypeScript types: User and MyLocation. The User type represents basic user information, while the MyLocation type contains details about the user's location.create a function called createUserProfile that takes a User object and a MyLocation object as arguments and prints the user's name and the city they are from.


type UserType = {
    name: string;
    age:number
}

type MyLocation = {
    city:string;
    country:string
}


const user: User = {
    name:"krutik",
    age: 90
}

const myLocation = {
    city:"Surat",
    country:"india"
}

const createUserProfile = (user:UserType,location:MyLocation)=>{
// return  `${user.name} ${location.city}`
return {...user,...location}
}

const myCompleteInfo: User & MyLocation = createUserProfile(user,myLocation);

//todo Homework Question: Combine User and Account Data

//todo You are building a user management system, and you have two TypeScript types:

//? User: Represents basic user information, with the following properties:

//? id (number): The user's unique identifier.
// name (string): The user's name.
// email (string): The user's email address.

//? Account: Contains details about the user's account, with the following properties:
// accountId (number): The account's unique identifier.
// accountType (string): The type of the account (e.g., "Savings," "Checking," etc.).
//balance (number): The account balance.

//* Your task istto create a function called combineUserAndAccount that takes a User object and an Account object as arguments and returns a new object representing the combined information of the user and their account.

// Ensure that the resulting object contains all the properties from both User and Account types.

// Define the User type
type User = {
    id: number;
    name: string;
    email: string;
};

// Define the Account type
type Account = {
    accountId: number;
    accountType: string;
    balance: number;
};

// Define the function to combine User and Account
function combineUserAndAccount(user: User, account: Account) {
    return { ...user, ...account };
}

// Test the function
const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};

const account: Account = {
    accountId: 101,
    accountType: "Savings",
    balance: 5000,
};

const combinedData = combineUserAndAccount(user, account);

console.log(combinedData);
// Output:
// {
//     id: 1,
//     name: "Alice",
//     email: "alice@example.com",
//     accountId: 101,
//     accountType: "Savings",
//     balance: 5000
// }




// Intersection Types in TypeScript
// In TypeScript, an intersection type combines multiple types into a single type. The resulting type must satisfy all the constraints of the intersected types. This is particularly useful when you want to merge the properties and methods of different types.

// Defining Intersection Types
// The & operator is used to define an intersection type.

// typescript
// Copy code
// type TypeA = { propertyA: string };
// type TypeB = { propertyB: number };

// type CombinedType = TypeA & TypeB;
// CombinedType will have both propertyA from TypeA and propertyB from TypeB.
// Example 1: Combining Object Types
// typescript
// Copy code
// type User = {
//     id: number;
//     name: string;
// };

// type Account = {
//     accountId: number;
//     balance: number;
// };

// type UserAccount = User & Account;

// const userAccount: UserAccount = {
//     id: 1,
//     name: "Alice",
//     accountId: 1001,
//     balance: 5000,
// };

// console.log(userAccount);
// // Output:
// // {
// //     id: 1,
// //     name: "Alice",
// //     accountId: 1001,
// //     balance: 5000
// // }
// In this example, the resulting UserAccount type contains all the properties from both User and Account.

// Example 2: Combining Function Types
// Intersection types can also combine multiple callable signatures.

// typescript
// Copy code
// type Logger = (message: string) => void;
// type ErrorHandler = (error: Error) => void;

// type LoggingErrorHandler = Logger & ErrorHandler;

// const logAndHandle: LoggingErrorHandler = (input: any) => {
//     if (typeof input === "string") {
//         console.log(`Log: ${input}`);
//     } else if (input instanceof Error) {
//         console.error(`Error: ${input.message}`);
//     }
// };

// logAndHandle("Initialization complete"); // Logs: Initialization complete
// logAndHandle(new Error("Something went wrong")); // Logs: Error: Something went wrong
// Example 3: Combining Class Types
// You can combine properties from multiple class instances using intersection types.

// typescript
// Copy code
// class Person {
//     name: string = "John";
// }

// class Employee {
//     employeeId: number = 123;
// }

// type Worker = Person & Employee;

// const worker: Worker = {
//     name: "Jane",
//     employeeId: 456,
// };

// console.log(worker);
// // Output:
// // { name: "Jane", employeeId: 456 }
// Use Cases for Intersection Types
// Merging Models: Combine multiple data models into a single type.
// Extending Functionality: Add behaviors by combining types with callable signatures.
// Reusable Definitions: Create flexible and modular types for large applications.
// Difference Between Intersection (&) and Union (|)
// | Feature | Intersection (&) | Union (|) | |---------------------|--------------------------------------------------|---------------------------------------------| | Combines Types | Includes all properties from all types. | Includes properties from either type. | | Use Case | Merging models or behaviors. | Flexible inputs or outputs. | | Example | {a: string} & {b: number} => {a: string, b: number} | string | number => "abc" or 123. |

// Type Compatibility
// If two intersected types have properties with the same name but different types, TypeScript enforces stricter type compatibility.

// Example:
// typescript
// Copy code
// type A = { id: number };
// type B = { id: string };

// type AB = A & B; // Error: 'id' is incompatible in both types.
// Let me know if you need more examples or clarification! 😊