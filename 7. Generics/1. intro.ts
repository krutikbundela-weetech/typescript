// * Generics in typescript allow you to create reusable components or functions that can work with multiple data types.


// function logAndReturn(value:number|string):number|string{
//     console.log(value);
//     return value;
// }

// const numberResult = logAndReturn(42)
// const stringResult = logAndReturn("Hello")
// console.log("file: 1. intro.ts:10 ~ numberResult:", numberResult);
// console.log("file: 1. intro.ts:12 ~ stringResult:", stringResult);




// Generics
function logAndReturn<T>(value:T):T{
    console.log(value);
    return value;
}

const numberResult = logAndReturn<number>(42);
const stringResult = logAndReturn<string>("Hello");
const booleanResult = logAndReturn<boolean>(true);
console.log("file: 1. intro.ts:10 ~ numberResult:", numberResult);
console.log("file: 1. intro.ts:12 ~ stringResult:", stringResult);
console.log("file: 1. intro.ts:26 ~ booleanResult:", booleanResult);





// Generics in TypeScript
// Generics allow you to create reusable components that work with a variety of data types while maintaining type safety. They are particularly useful for functions, classes, and interfaces where the type of an input, output, or intermediate value can vary.

// Why Use Generics?
// Code Reusability: You can write a single piece of code that works for multiple types.
// Type Safety: Generics allow you to work with types without losing the benefits of TypeScript's strong typing.
// Flexibility: Generics provide a way to handle different types dynamically while still enforcing type constraints.
// Basic Syntax
// The syntax for generics involves placing a type parameter in angle brackets (<>) after the name of a function, class, or interface.

// typescript
// Copy code
// function identity<T>(value: T): T {
//   return value;
// }

// const result1 = identity<number>(42); // T is 'number'
// const result2 = identity<string>("Hello"); // T is 'string'
// Here:

// T is a type parameter that acts as a placeholder for the actual type.
// The type of T is inferred or explicitly provided when the function is called.
// Generic Functions
// A generic function can work with any data type.

// typescript
// Copy code
// function getArray<T>(items: T[]): T[] {
//   return new Array().concat(items);
// }

// const numArray = getArray<number>([1, 2, 3]); // T is 'number'
// const strArray = getArray<string>(["a", "b", "c"]); // T is 'string'
// Generic Classes
// Generic classes allow you to create classes that can operate on different types without specifying the type upfront.

// typescript
// Copy code
// class Box<T> {
//   private _content: T;

//   constructor(content: T) {
//     this._content = content;
//   }

//   getContent(): T {
//     return this._content;
//   }
// }

// const numberBox = new Box<number>(42);
// console.log(numberBox.getContent()); // 42

// const stringBox = new Box<string>("Hello");
// console.log(stringBox.getContent()); // Hello
// Generic Interfaces
// Interfaces can also use generics.

// typescript
// Copy code
// interface Pair<K, V> {
//   key: K;
//   value: V;
// }

// const pair: Pair<string, number> = { key: "age", value: 25 };
// console.log(pair); // { key: 'age', value: 25 }
// Generic Constraints
// You can constrain a generic type to ensure it has specific properties or extends a particular type.

// typescript
// Copy code
// function logLength<T extends { length: number }>(value: T): void {
//   console.log(value.length);
// }

// logLength("Hello"); // 5
// logLength([1, 2, 3]); // 3
// // logLength(42); // Error: Argument of type 'number' is not assignable to type '{ length: number; }'
// Default Generic Types
// You can provide default types for generics.

// typescript
// Copy code
// function wrapValue<T = string>(value: T): T {
//   return value;
// }

// const result = wrapValue(); // T defaults to 'string'
// console.log(result); // ''
// Generics with Multiple Types
// You can use multiple type parameters in a generic.

// typescript
// Copy code
// function mapPair<K, V>(key: K, value: V): [K, V] {
//   return [key, value];
// }

// const result = mapPair<string, number>("age", 30);
// console.log(result); // ['age', 30]
// Generic Utility in a Practical Example
// For example, let’s create a generic stack data structure:

// typescript
// Copy code
// class Stack<T> {
//   private items: T[] = [];

//   push(item: T): void {
//     this.items.push(item);
//   }

//   pop(): T | undefined {
//     return this.items.pop();
//   }

//   peek(): T | undefined {
//     return this.items[this.items.length - 1];
//   }
// }

// const numberStack = new Stack<number>();
// numberStack.push(10);
// numberStack.push(20);
// console.log(numberStack.peek()); // 20
// console.log(numberStack.pop()); // 20
// console.log(numberStack.pop()); // 10
// Generics are a powerful feature that allows you to write flexible yet type-safe code. Would you like more details or examples on specific generic use cases? 😊