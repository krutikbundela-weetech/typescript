//* In TypeScript, objects are used to represent data with key-value pairs. Each key in the object is a string (or a symbol in ES6) that maps to a value.

//? Let's consider a real-life example of representing a person's information using TypeScript objects
//?-> name, age, isStudent, address{ city, country}


const person: {
  name: string;
  age: number;
  isStudent: boolean;
  address: {
    city: string;
    country: string;
  };
} = {
  name: "krutik",
  age: 20,
  isStudent: true,
  address: { city: "surat", country: "india" },
};

//Todo Accessing the object data
// console.log(person.address.country);
// console.log(person.class); // Property 'class' does not exist 

//Todo Updating object properties
// person.age = 10


const personk: object = {
  name: "krutik",
  age: 20,
  isStudent: true,
  address: { city: "surat", country: "india" },
};

//still throws error
// console.log(personk.class); // Property 'class' does not exist 


// Of course object types can also be created for nested objects.

// Let's say you have this JavaScript object:

// const product = {
//   id: 'abc1',
//   price: 12.99,
//   tags: ['great-offer', 'hot-and-new'],
//   details: {
//     title: 'Red Carpet',
//     description: 'A great carpet - almost brand-new!'
//   }
// }
// This would be the type of such an object:

// {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }
// So you have an object type in an object type so to say.