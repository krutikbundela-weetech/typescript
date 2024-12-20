//* In TypeScript, a type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. Type aliases provide better readability, organization, and abstraction of complex types

//* To define a type alias, you use the type keyword followed by the alias name and the type definition:

//? syntax
// type var = {}  === shape of object
// to define alias use ===> type AliasName(First Letter Capital)

type Person = {
    name: string;
  age: number;
  isStudent: boolean;
  address: {
    city: string;
    country: string;
  };
}

const person2:Person = {
  name: "krutik",
  age: 20,
  isStudent: true,
  address: { city: "surat", country: "india" },
};



type User = {
  name: string;
  age: number;

  address?: string; //? address nai hsse to b chaalse === address?: string | undefined

  DOB?: Date | string | number; // DOB can be Date OR string OR number

  krutik?: any; // it can be ANYTHING ,stop further checking it can be string , number ,array
};

function login(USerData: User): User {
  // function type is User
  // return "krutik";  // error
  return USerData;
}

const User: User = {
  name: "krutik",
  age: 20,
};

console.log("file: 1.ts:28 ~ login ~ login:", login(User));


//todo Create a Product Object:
// Define an interface or type representing a product with properties for name, price, and quantity. Create a product object with the following data:
// Name: "Laptop'
// Price: 1000
// Quantity: 5 

type Product = {
  name:string;
  price:number;
  quantity:number;
}

const product2: Product = {
  name:"laptop",
  price:100000,
  quantity:5
}

//! Calculate Total Price:
//? Given the product object from the previous question, write a function called calculateTotalPric and returns the total price (price * quantity) of the product.


const calculateTotalPrice = (product:Product) =>{
  return `${product.name} total cost is ${product.price * product.quantity}`
}

calculateTotalPrice(product2);