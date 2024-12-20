//*----------------
//* Enums in TS
//*-----------------

// //? Enums in TypeScript are commonly used when you want to represent a set of related values and choose one value from multiple options. Enums provide a convenient way to define a set of named values and associate them with specific meanings.

// //* In TypeScript, when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0. The default numeric value for the first enum constant is 0, and subsequent enum constants receive values incremented by 1.

// user1 = login => normal user
// user2 = login => admin user


enum Roles {
  user ="user",
  admin = "admin",
}


type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};


const user1:LoginDetails = {
    email:"krutik@gmail.com",
    password:"hbljhb",
    role:Roles.user,
}

const user2:LoginDetails = {
    email:"krutik@gmail.com",
    password:"hbljhb",
    role:Roles.admin,
}


const isAdmin = (user:LoginDetails) =>{
    const {name,role } = user1;
    return role === "admin" ? `${name} is allow to edit the website` : `${name} not allowed to edit the website`
} 

console.log(isAdmin(user1));
console.log(isAdmin(user2));



// What is an Enum in TypeScript?
// An enum in TypeScript is a way to define a set of named constants that can represent numeric or string values. Enums make it easier to work with a group of related values and provide meaningful names for these values.

// Types of Enums
// Numeric Enums
// String Enums
// Heterogeneous Enums
// 1. Numeric Enums
// Numeric enums assign numeric values to their members starting from 0 by default. You can also customize the starting value.

// Example:

// typescript
// Copy code
// enum Direction {
//     North,   // 0
//     East,    // 1
//     South,   // 2
//     West     // 3 
// }

// console.log(Direction.North); // Output: 0
// console.log(Direction[2]);    // Output: "South" (Reverse mapping)
// Custom Starting Value:

// typescript
// Copy code
// enum Direction {
//     North = 1,
//     East,        // 2
//     South,       // 3
//     West         // 4
// }
// 2. String Enums
// String enums allow you to associate string values with enum members. These do not support reverse mapping.

// Example:

// typescript
// Copy code
// enum Direction {
//     North = "NORTH",
//     East = "EAST",
//     South = "SOUTH",
//     West = "WEST"
// }

// console.log(Direction.North); // Output: "NORTH"
// 3. Heterogeneous Enums
// Heterogeneous enums mix numeric and string values.

// Example:

// typescript
// Copy code
// enum Response {
//     Success = 200,
//     NotFound = 404,
//     ServerError = "500"
// }

// console.log(Response.Success); // Output: 200
// console.log(Response.ServerError); // Output: "500"
// Computed and Constant Values
// Enums can include members with computed values.

// Example:

// typescript
// Copy code
// enum FileAccess {
//     None,               // 0
//     Read = 1 << 1,      // 2 (Computed)
//     Write = 1 << 2,     // 4
//     ReadWrite = Read | Write, // 6 (Combination)
//     G = "GLOBAL".length // 6 (Computed from string length)
// }
// Using Enums
// Accessing Values:

// typescript
// Copy code
// enum Status {
//     Active = 1,
//     Inactive = 2,
//     Suspended = 3
// }

// let userStatus: Status = Status.Active;
// console.log(userStatus); // Output: 1
// Reverse Mapping (Numeric Enums Only):

// typescript
// Copy code
// console.log(Status[1]); // Output: "Active"
// As Function Parameters:

// typescript
// Copy code
// function getStatus(status: Status) {
//     if (status === Status.Active) {
//         return "User is active";
//     }
// }

// console.log(getStatus(Status.Active)); // Output: "User is active"
// Advantages of Enums
// Improved Code Readability: Enums give meaningful names to values, making code easier to understand.
// Type Safety: Enums prevent invalid values from being assigned.
// Reverse Mapping: Numeric enums allow you to retrieve the name of a value.
// Enums vs Objects
// Enums have additional features compared to plain objects, like reverse mapping. However, if you only need a simple mapping, you can use an object:

// Object Example:

// typescript
// Copy code
// const Direction = {
//     North: "NORTH",
//     East: "EAST",
//     South: "SOUTH",
//     West: "WEST"
// } as const;

// console.log(Direction.North); // Output: "NORTH"
// Best Practices
// Use string enums if values are not numeric or reverse mapping is not needed.
// Use numeric enums for cases requiring reverse mapping.
// Avoid heterogeneous enums unless there's a strong reason to mix value types.