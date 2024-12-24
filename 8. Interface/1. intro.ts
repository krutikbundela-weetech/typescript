
//* In TypeScript, an interface is a powerful feature that allows you to define a contract for an object's shape. It specifies the properties and their types that an object must have to be considered of that particular interface type. Interfaces are primarily used for type-checking during development and do not generate any JavaScript code at runtime.


interface Greet{
    name:string;
    age:number
}

const greets:Greet = {
    name:'krutik',
    age:90,
}


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
