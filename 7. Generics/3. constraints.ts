// Generic Constraints in TypeScript
// Generic constraints allow you to restrict the types that can be used as a type parameter in generics. This ensures that the type being used meets specific criteria, which is often necessary to perform certain operations or access properties/methods safely.

// Syntax of Generic Constraints
// To add constraints to a generic type, use the extends keyword. This limits the type parameter to a specific type or a subset of types.

// typescript
// Copy code
// function func<T extends ConstraintType>(arg: T): ReturnType {
//   // Function logic here
// }
// Examples of Generic Constraints
// 1. Restricting to Specific Property
// If you want to ensure that a type has a specific property, you can use an interface or an inline type.

// typescript
// Copy code
// function logLength<T extends { length: number }>(value: T): void {
//   console.log(`Length: ${value.length}`);
// }

// logLength("Hello"); // Length: 5
// logLength([1, 2, 3]); // Length: 3
// // logLength(42); // Error: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'
// 2. Extending an Interface
// You can restrict the type parameter to types that extend a particular interface.

// typescript
// Copy code
// interface HasId {
//   id: number;
// }

// function printId<T extends HasId>(item: T): void {
//   console.log(`ID: ${item.id}`);
// }

// const user = { id: 101, name: "John" };
// printId(user); // ID: 101

// // printId({ name: "Jane" }); // Error: Property 'id' is missing
// 3. Extending Multiple Constraints
// You can use intersection types (&) to enforce multiple constraints.

// typescript
// Copy code
// function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
//   return { ...obj1, ...obj2 };
// }

// const person = merge({ name: "John" }, { age: 30 });
// console.log(person); // { name: 'John', age: 30 }

// // merge({ name: "John" }, "not an object"); // Error: Type 'string' does not satisfy the constraint 'object'.
// 4. Using a Class as a Constraint
// You can constrain a type parameter to a class or its subclasses.

// typescript
// Copy code
// class Animal {
//   eat(): void {
//     console.log("Eating...");
//   }
// }

// class Dog extends Animal {
//   bark(): void {
//     console.log("Barking...");
//   }
// }

// function feed<T extends Animal>(animal: T): void {
//   animal.eat();
// }

// const dog = new Dog();
// feed(dog); // Eating...
// 5. Keyof Constraints
// You can constrain a type parameter to the keys of another type using the keyof keyword.

// typescript
// Copy code
// function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// const person = { name: "Alice", age: 25 };
// console.log(getValue(person, "name")); // Alice
// console.log(getValue(person, "age")); // 25

// // getValue(person, "email"); // Error: Argument of type '"email"' is not assignable to parameter of type '"name" | "age"'
// 6. Default Type with Constraints
// You can set a default type for a generic parameter while still applying constraints.

// typescript
// Copy code
// function createArray<T extends number | string = string>(item: T, count: number): T[] {
//   return Array(count).fill(item);
// }

// const strings = createArray("Hello", 3); // Default type 'string'
// console.log(strings); // ["Hello", "Hello", "Hello"]

// const numbers = createArray(42, 2); // Explicit type 'number'
// console.log(numbers); // [42, 42]
// When to Use Generic Constraints
// When you need to ensure the presence of specific properties or methods on a type.
// When you want to restrict a generic type to a subset of types (e.g., objects, arrays, or primitives).
// When you need to use the type parameter in a way that requires it to have certain attributes.
// Summary
// Generic constraints allow you to:

// Narrow down the types that can be used in a generic.
// Enable type-safe operations by ensuring the required structure or methods are present.
// Write more robust and reusable code.