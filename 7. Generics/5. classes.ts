// Generic Classes in TypeScript
// Generic classes in TypeScript allow you to define classes that can operate on multiple types without sacrificing type safety. These classes use generic type parameters to make their members (fields, methods, or properties) adaptable to various data types.

// Basic Syntax
// typescript
// Copy code
// class ClassName<T> {
//   field: T;

//   constructor(field: T) {
//     this.field = field;
//   }

//   getValue(): T {
//     return this.field;
//   }
// }
// Example 1: A Generic Box Class
// This example demonstrates a generic class that can store and retrieve a value of any type.

// typescript
// Copy code
// class Box<T> {
//   content: T;

//   constructor(content: T) {
//     this.content = content;
//   }

//   getContent(): T {
//     return this.content;
//   }
// }

// const stringBox = new Box<string>("Hello");
// console.log(stringBox.getContent()); // Output: Hello

// const numberBox = new Box<number>(42);
// console.log(numberBox.getContent()); // Output: 42
// Example 2: Generic Classes with Multiple Type Parameters
// You can define classes with more than one generic type parameter.

// typescript
// Copy code
// class Pair<T, U> {
//   first: T;
//   second: U;

//   constructor(first: T, second: U) {
//     this.first = first;
//     this.second = second;
//   }

//   getPair(): [T, U] {
//     return [this.first, this.second];
//   }
// }

// const pair = new Pair<string, number>("Alice", 25);
// console.log(pair.getPair()); // Output: ['Alice', 25]
// Example 3: Using Constraints in Generic Classes
// You can constrain the type parameters using the extends keyword to ensure the type meets specific criteria.

// typescript
// Copy code
// interface HasId {
//   id: number;
// }

// class Entity<T extends HasId> {
//   entity: T;

//   constructor(entity: T) {
//     this.entity = entity;
//   }

//   getId(): number {
//     return this.entity.id;
//   }
// }

// const user = { id: 101, name: "John" };
// const entity = new Entity(user);
// console.log(entity.getId()); // Output: 101

// // const invalidEntity = new Entity({ name: "Invalid" }); // Error: Property 'id' is missing
// Example 4: Static Members in Generic Classes
// Static members of a generic class cannot directly use the class's type parameter because static members belong to the class itself, not to an instance.

// typescript
// Copy code
// class Container<T> {
//   static description: string = "A generic container";

//   content: T;

//   constructor(content: T) {
//     this.content = content;
//   }

//   getContent(): T {
//     return this.content;
//   }
// }

// console.log(Container.description); // Output: A generic container
// const container = new Container<number>(123);
// console.log(container.getContent()); // Output: 123
// Example 5: Generic Class with Methods
// A class can have methods that use additional generics, separate from the class-level type parameter.

// typescript
// Copy code
// class DataStore<T> {
//   private data: T[] = [];

//   add(item: T): void {
//     this.data.push(item);
//   }

//   getAll(): T[] {
//     return this.data;
//   }

//   find<U>(callback: (item: T) => U): U[] {
//     return this.data.map(callback);
//   }
// }

// const store = new DataStore<string>();
// store.add("Apple");
// store.add("Banana");
// console.log(store.getAll()); // Output: ['Apple', 'Banana']

// const lengths = store.find(item => item.length);
// console.log(lengths); // Output: [5, 6]
// Benefits of Generic Classes
// Type Safety: Ensures that operations on class members are type-safe.
// Reusability: Write code once and use it with multiple types.
// Flexibility: Operate on a wide range of types without sacrificing correctness.
// When to Use Generic Classes
// When designing reusable data structures like lists, stacks, or queues.
// For scenarios where a class needs to handle various types of data consistently.
// When type safety is critical for operations on the class members.