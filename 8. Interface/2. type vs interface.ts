// 1:
//? Use custom types when you need unions, intersections, or mapped types.
//? Use interfaces when defining object shapes or classes that adhere to a contract.

// 2:
//? Interfaces can extend other interfaces to inherit their members.
//? Custom types can use unions and intersections for more complex type compositions.

// same Interface name treated as one




// Here's a detailed comparison of type and interface in TypeScript, along with examples for each difference:

// 1. Defining Object Shapes
// Type:
// Can define object shapes.

// typescript
// Copy code
// type User = {
//   id: number;
//   name: string;
// };
// Interface:
// Can also define object shapes.

// typescript
// Copy code
// interface User {
//   id: number;
//   name: string;
// }
// 2. Extending or Combining
// Type (using & for intersections):

// typescript
// Copy code
// type User = {
//   id: number;
//   name: string;
// };

// type Admin = User & {
//   role: string;
// };

// const admin: Admin = { id: 1, name: "John", role: "SuperAdmin" };
// Interface (using extends):

// typescript
// Copy code
// interface User {
//   id: number;
//   name: string;
// }

// interface Admin extends User {
//   role: string;
// }

// const admin: Admin = { id: 1, name: "John", role: "SuperAdmin" };
// 3. Declaration Merging
// Type:
// Does not support declaration merging. Attempting to redefine results in an error.

// typescript
// Copy code
// type User = { id: number; };
// type User = { name: string; }; // Error: Duplicate identifier
// Interface:
// Supports declaration merging, where multiple declarations with the same name are merged into one.

// typescript
// Copy code
// interface User {
//   id: number;
// }

// interface User {
//   name: string;
// }

// const user: User = { id: 1, name: "John" };
// 4. Union and Intersection Types
// Type:
// Can define unions and intersections directly.

// typescript
// Copy code
// type Status = "active" | "inactive" | "suspended";

// type Role = { role: string } & { permissions: string[] };

// const userStatus: Status = "active";
// const userRole: Role = { role: "Admin", permissions: ["read", "write"] };
// Interface:
// Cannot define unions directly.

// typescript
// Copy code
// // This is not allowed
// // interface Status = "active" | "inactive"; // Error
// 5. Primitives and Aliases
// Type:
// Can alias primitive types, tuples, and more.

// typescript
// Copy code
// type ID = number | string;

// type Tuple = [number, string];

// const userId: ID = "12345";
// const userInfo: Tuple = [1, "John"];
// Interface:
// Cannot alias primitives or tuples.

// typescript
// Copy code
// // This is not allowed
// // interface ID = number | string; // Error
// 6. Functions
// Type:
// Can define a function signature.

// typescript
// Copy code
// type Greet = (name: string) => string;

// const greet: Greet = (name) => `Hello, ${name}`;
// Interface:
// Can also define a callable object.

// typescript
// Copy code
// interface Greet {
//   (name: string): string;
// }

// const greet: Greet = (name) => `Hello, ${name}`;
// 7. Use with Classes
// Type:
// Can be used as a type annotation for properties or variables.

// typescript
// Copy code
// type User = {
//   id: number;
//   name: string;
// };

// class Person {
//   user: User;
//   constructor(user: User) {
//     this.user = user;
//   }
// }
// Interface:
// Can directly define the structure of a class using implements.

// typescript
// Copy code
// interface User {
//   id: number;
//   name: string;
// }

// class Person implements User {
//   id: number;
//   name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
// }
// 8. Read-Only or Optional Properties
// Type:
// Supports readonly and optional properties.

// typescript
// Copy code
// type User = {
//   readonly id: number;
//   name?: string;
// };

// const user: User = { id: 1 };
// // user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
// Interface:
// Also supports readonly and optional properties.

// typescript
// Copy code
// interface User {
//   readonly id: number;
//   name?: string;
// }

// const user: User = { id: 1 };
// // user.id = 2; // Error
// 9. Key Difference Summary
// Feature	Type	Interface
// Object Shapes	Yes	Yes
// Extensibility	Using intersections (&).	Using extends.
// Declaration Merging	Not supported.	Supported.
// Union and Intersection	Supported.	Not supported for unions.
// Primitives and Tuples	Can alias primitives and tuples.	Not supported.
// Function Types	Supported.	Supported.
// Use with Classes	Used as type annotations.	Used directly with implements.
// When to Use Which?
// Use interface:

// When defining object or class shapes.
// When you need declaration merging.
// When working in an object-oriented style.
// Use type:

// For unions, intersections, and aliases for primitives.
// When you need advanced types (e.g., conditional or mapped types).
// Both are powerful, and the choice often depends on the specific use case or coding style. 😊