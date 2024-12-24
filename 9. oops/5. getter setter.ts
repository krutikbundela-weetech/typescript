//* ****************
//* GETTER & SETTER
//******************

//? In TypeScript classes, you can use getter and setter methods to control the access and modification of class properties. Getter methods allow you to retrieve the value of a property, while setter methods allow you to set the value of a property with additional logic or validation.

//TODO The get method doesn't take any parameters, and the set method takes only one parameter.

class Persons {
  private _age: number | undefined;
  constructor(public name: string, protected hobbies: string[]) {
    // if (this.age > 150 || this.age < 0) {
    //     throw new Error("age is not valid")
    // }
  }
  public set age(age: number) {
    if (this.age > 150 || this.age < 0) {
      throw new Error("age is not valid");
    }
    this.age = age;
  }

  public get age(): number {
    if (this._age === undefined) {
      throw new Error("age is not undefined");
    }
    return this._age;
  }
  introduce(): string {
    return `Hi, I'm ${this.name} and I'm ${
      this.age
    } years old. I love ${this.hobbies.join(", ")} .`;
  }
}

const perso1 = new Persons("raj", 189, ["reading"]);
const perso2 = new Persons("gbuiyhi", 89, ["cooking"]);
console.log(perso1.name);

//* PRACTICE TIME
//? Q1: Bank Account Balance
// Create a TypeScript class BankAccount with a private property _balance initialized to 0.
// Implement a getter method balance that returns the current balance.
// Implement a setter method balance that updates the balance if the new value is non-negative. Otherwis error message.
// Instantiate an object of the BankAccount class.
// Use the setter to set the balance to 1000 and use the getter to display the updated balance.
// Try setting a negative balance using the setter. What output do you expect?

class BankAccount {
  private _balance: number = 0;

  public get balance(): number {
    return this._balance;
  }

  public set balance(newBalance: number) {
    if (newBalance < 0) {
      throw new Error("Invalid Balance");
    }
    this._balance = newBalance;
  }
}

const accountq = new BankAccount();
accountq.balance = -10;

//? Q2: Temperature Converter
// Define a TypeScript class Temperature with a private property _celsius set to 0.
// Implement a getter method celsius that returns the temperature in Celsius.
// Implement a setter method celsius that sets the temperature in Celsius.
// Implement a getter method fahrenheit that converts Celsius to Fahrenheit using the formula (C * 9/5) + 32.
// Implement a setter method fahrenheit that converts Fahrenheit to Celsius using the formula (F - 32) * 5/9.
// Create an instance of the Temperature class.
// Use the setter to set the temperature in Celsius to 25 and then use the getter for Fahrenheit. What Fahrenheit value do you expect?
// Use the setter to set the temperature in Fahrenheit to 98.6 and then use the getter for Celsius. What Celsius value do you expect?

class Temperature {
  private _celsius: number = 0;

  public get celsius(): number {
    return this._celsius;
  }

  public set celsius(newCelsius: number) {
    this._celsius = newCelsius;
  }

  public get fahrenheit() {
    return (this._celsius * 9)/5 + 32;
  }
  public set fahrenheit(newFahrenheit:number) {
    this._celsius = ((newFahrenheit-32)*5) / 9;
  }
}

const temp = new Temperature();
temp.celsius = 25
console.log("file: 5. getter setter.ts:98 ~ celsius:", temp.fahrenheit);

temp.fahrenheit = 77
console.log("file: 5. getter setter.ts:98 ~ temp.celsius :", temp.celsius );



// Getters and Setters in TypeScript
// Getters and setters are special methods that allow you to access and modify private or protected properties of a class. They provide a controlled way to encapsulate the internal details of a class while exposing a clean interface to the outside world.

// Syntax of Getters and Setters
// In TypeScript, getters and setters are defined using the get and set keywords.

// Getter: Used to retrieve or "get" the value of a property.
// Setter: Used to update or "set" the value of a property.
// Basic Example
// typescript
// Copy code
// class Person {
//   private _name: string = "";

//   // Getter
//   public get name(): string {
//     return this._name;
//   }

//   // Setter
//   public set name(newName: string) {
//     if (newName.length < 3) {
//       console.log("Name must be at least 3 characters long.");
//       return;
//     }
//     this._name = newName;
//   }
// }

// const person = new Person();
// person.name = "Al"; // Output: Name must be at least 3 characters long.
// person.name = "Alice"; // Valid assignment
// console.log(person.name); // Output: Alice
// How It Works
// Private Property (_name):

// The actual value is stored in a private property prefixed with _.
// This ensures that direct access to the property is restricted.
// Getter (get name):

// Allows reading the value of the private _name property.
// Accessed like a regular property (person.name), not as a method (person.getName()).
// Setter (set name):

// Allows updating the value of the private _name property.
// Includes validation logic to ensure only valid values are assigned.
// Advanced Example with Read-Only Properties
// You can use only a getter to make a property read-only:

// typescript
// Copy code
// class Circle {
//   constructor(private radius: number) {}

//   // Getter for read-only property
//   public get area(): number {
//     return Math.PI * this.radius ** 2;
//   }
// }

// const circle = new Circle(5);
// console.log(circle.area); // Output: 78.53981633974483
// // circle.area = 100; // Error: Cannot assign to 'area' because it is a read-only property
// Example with Protected Properties
// You can combine getters and setters with protected properties to make them accessible to subclasses:

// typescript
// Copy code
// class Animal {
//   protected _species: string = "";

//   public get species(): string {
//     return this._species;
//   }

//   public set species(newSpecies: string) {
//     if (newSpecies.length < 3) {
//       console.log("Species name must be at least 3 characters long.");
//       return;
//     }
//     this._species = newSpecies;
//   }
// }

// class Dog extends Animal {
//   public bark(): void {
//     console.log(`Woof! I am a ${this.species}.`);
//   }
// }

// const dog = new Dog();
// dog.species = "Dog"; // Valid assignment
// dog.bark(); // Output: Woof! I am a Dog.
// Getters and Setters with Access Modifiers
// You can control access to getters and setters using access modifiers (public, protected, private).

// Example:

// typescript
// Copy code
// class Employee {
//   private _salary: number = 0;

//   // Public getter
//   public get salary(): number {
//     return this._salary;
//   }

//   // Private setter
//   private set salary(newSalary: number) {
//     if (newSalary < 0) {
//       console.log("Salary cannot be negative.");
//       return;
//     }
//     this._salary = newSalary;
//   }

//   public updateSalary(newSalary: number): void {
//     this.salary = newSalary; // Setter is accessible inside the class
//   }
// }

// const employee = new Employee();
// employee.updateSalary(50000); // Valid
// console.log(employee.salary); // Output: 50000
// // employee.salary = 60000; // Error: Property 'salary' has a private setter
// Benefits of Getters and Setters
// Encapsulation: Hide internal details and expose only the necessary interface.
// Validation: Add custom logic to ensure valid data.
// Read-Only Properties: Create derived or computed properties without allowing modification.
// Consistency: Abstract property access and modification logic.
// Key Notes
// Use getters and setters sparingly to avoid unnecessary complexity.
// Avoid heavy computations in getters to maintain performance.
// Always prefix private properties with _ to differentiate them from public interfaces.
// Let me know if you need more examples or clarification! 😊
