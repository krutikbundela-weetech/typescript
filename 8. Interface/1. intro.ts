
//* In TypeScript, an interface is a powerful feature that allows you to define a contract for an object's shape. It specifies the properties and their types that an object must have to be considered of that particular interface type. Interfaces are primarily used for type-checking during development and do not generate any JavaScript code at runtime.


interface Greet{
    name:string;
    age:number
    greet(phrase:string):void;
}

const greets:Greet = {
    name:'krutik',
    age:90,
    greet(phrase:string){
        console.log(phrase);
    }
}

greets.greet("hello")


//todo Create a Product Object:

//? Define an interface or type representing a product with properties for name, price, and quantity. Create a product object with the following data:
// Name: "Laptop"
// Price: 1000
// Quantity: 5


interface Products{
    name:string;
    price:number;
    quantity:number;

}

const prod1:Products = {
    name:"khbk",
    price:1000,
    quantity:1,
}
const prod2:Products = {
    name:"uyfgulygi",
    price:5000,
    quantity:1,
}

//! Calculate Total Price:
//? Given the product object from the previous question, write a function called calculateTotalPrice that calculates and returns the total price (price * quantity) of the product.

const calc = (prod:Products):number =>{
    const {price,quantity} = prod
    return price * quantity;
}


console.log(calc(prod1));

// ? interface as function

interface AddFn{
    (a:number,b:number):number ;
}

let addkl:AddFn;

addkl =(n1:number,n2:number) =>{
    return n1+n2
}




// Interface in TypeScript
// In TypeScript, an interface is used to define the shape of an object. It can be used to define a contract for the structure of a class or an object, including the types of properties, methods, and their signatures. Interfaces are often used in object-oriented programming patterns to ensure that classes or objects adhere to a particular structure.

// Key Features of Interfaces in TypeScript
// Defining Object Shapes:
// An interface can define the structure of an object, specifying the types of the properties it must have.

// typescript
// Copy code
// interface Person {
//   id: number;
//   name: string;
//   email: string;
// }

// const user: Person = {
//   id: 1,
//   name: "John Doe",
//   email: "john.doe@example.com"
// };
// Optional Properties:
// You can make properties optional using the ? symbol.

// typescript
// Copy code
// interface Person {
//   id: number;
//   name: string;
//   email?: string; // email is optional
// }

// const user1: Person = { id: 1, name: "John" };
// const user2: Person = { id: 2, name: "Alice", email: "alice@example.com" };
// Readonly Properties:
// If a property is marked as readonly, it cannot be changed once it is initialized.

// typescript
// Copy code
// interface Person {
//   readonly id: number;
//   name: string;
// }

// const user: Person = { id: 1, name: "John" };
// // user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
// Function Types:
// Interfaces can also define function signatures.

// typescript
// Copy code
// interface Greet {
//   (name: string): string;
// }

// const greet: Greet = (name) => `Hello, ${name}`;
// Extending Interfaces:
// Interfaces can extend other interfaces, allowing for the reuse of properties and methods across different interface definitions.

// typescript
// Copy code
// interface Person {
//   id: number;
//   name: string;
// }

// interface Employee extends Person {
//   role: string;
// }

// const employee: Employee = {
//   id: 1,
//   name: "Alice",
//   role: "Software Engineer"
// };
// Implementing Interfaces in Classes:
// Classes can implement interfaces to ensure that they follow a particular structure.

// typescript
// Copy code
// interface Person {
//   id: number;
//   name: string;
//   greet(): string;
// }

// class Employee implements Person {
//   id: number;
//   name: string;
//   role: string;

//   constructor(id: number, name: string, role: string) {
//     this.id = id;
//     this.name = name;
//     this.role = role;
//   }

//   greet(): string {
//     return `Hello, my name is ${this.name}.`;
//   }
// }

// const emp = new Employee(1, "John", "Developer");
// console.log(emp.greet()); // Hello, my name is John.
// Merging Interfaces:
// If you declare an interface with the same name multiple times, TypeScript will automatically merge their definitions.

// typescript
// Copy code
// interface Person {
//   id: number;
// }

// interface Person {
//   name: string;
// }

// const person: Person = {
//   id: 1,
//   name: "John"
// };
// // This results in the merged interface: { id: number; name: string; }
// Example of Using an Interface
// Let’s combine all the features in a simple example of a Person interface:

// typescript
// Copy code
// interface Person {
//   readonly id: number;
//   name: string;
//   email?: string;  // Optional property
//   greet(): string; // Function signature
// }

// const person1: Person = {
//   id: 1,
//   name: "John",
//   greet: function () {
//     return `Hello, my name is ${this.name}`;
//   }
// };

// console.log(person1.greet()); // Output: Hello, my name is John
// Interface vs Type
// While type and interface are both used to define types in TypeScript, interfaces are specifically designed for defining object structures, and they support features like declaration merging and extending other interfaces.

// In contrast, type is more flexible and can be used to create unions, intersections, and more complex types.