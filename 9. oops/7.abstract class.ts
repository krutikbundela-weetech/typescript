//* Abstract classes provide a way to define common properties and methods that multiple derived classes can share. This promotes code reuse and helps establish a common interface for related classes.
//* abstract class cannot be instantiated

//* abstract classes focus on class inheritance and sharing common functionality,
//* whereas the useContext hook in React focuses on managing global state and allowing components to consume that state.

//? Example: Shape Hierarchy
//? Suppose you're building a graphics application, and you want to create a hierarchy of different shapes. You can use an abstract base class Shape to define common properties and methods that all shapes share.
abstract class PerObj {
  name!: string; // Abstract class with properties
  age!: number;
}

class Personk extends PerObj {
  name = "Vinod";
  age = 29;
}

class Person1k extends PerObj {
  name = "Thapa";
  age = 29;
}

class Person3k extends PerObj {
  name = "John";
  age = 30;
}

// Creating instances of derived classes
const person1kk = new Personk();
console.log(person1kk); // Output: Personk { name: 'Vinod', age: 29 }

const person2kk = new Person1k();
console.log(person2kk); // Output: Person1k { name: 'Thapa', age: 29 }

const person3kk = new Person3k();
console.log(person3kk); // Output: Person3k { name: 'John', age: 30 }

//? Example: Shape Hierarchy
//? Suppose you're building a graphics application, and you want to create a hierarchy of different shapes. You can use an abstract base class Shape to define common properties and methods that all shapes share.

abstract class Shape {
  constructor(protected color: string) {}

  abstract calculateArea(): number;
  abstract displayArea: () => void;
}

class Circle extends Shape {
  constructor(protected color: string, protected radius: number) {
    super(color);
  }

  public calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  displayArea = () => {
    console.log(`This is a ${this.color} circle with radius ${this.radius}.`);
    
  };
}


const circle = new Circle("red",3);
console.log(circle.calculateArea);
circle.displayArea;








// Abstract Classes in TypeScript
// An abstract class in TypeScript is a class that cannot be instantiated directly. It serves as a blueprint for other classes and is used to define methods and properties that must be implemented by subclasses. Abstract classes are a key part of object-oriented programming in TypeScript, enabling polymorphism and inheritance.

// Key Features of Abstract Classes
// Cannot Be Instantiated: You cannot create an instance of an abstract class.
// Abstract Methods: These methods are defined without implementation in the abstract class and must be implemented in derived classes.
// Concrete Methods: Abstract classes can also have methods with full implementation.
// Combination of Abstract and Non-Abstract Members: You can define both abstract and non-abstract members in the same class.
// Access Modifiers: Abstract members can use public, protected, or private access modifiers.
// Syntax
// typescript
// Copy code
// abstract class AbstractClass {
//   abstract abstractMethod(): void; // Abstract method with no implementation

//   concreteMethod(): void {
//     console.log("This is a concrete method.");
//   }
// }

// class DerivedClass extends AbstractClass {
//   abstractMethod(): void {
//     console.log("Abstract method implemented in DerivedClass.");
//   }
// }

// const obj = new DerivedClass();
// obj.abstractMethod(); // Output: Abstract method implemented in DerivedClass.
// obj.concreteMethod(); // Output: This is a concrete method.
// Example: Animal Hierarchy
// typescript
// Copy code
// abstract class Animal {
//   constructor(protected name: string) {}

//   // Abstract method
//   abstract makeSound(): void;

//   // Concrete method
//   move(): void {
//     console.log(`${this.name} is moving.`);
//   }
// }

// class Dog extends Animal {
//   makeSound(): void {
//     console.log("Woof! Woof!");
//   }
// }

// class Cat extends Animal {
//   makeSound(): void {
//     console.log("Meow!");
//   }
// }

// const dog = new Dog("Buddy");
// dog.makeSound(); // Output: Woof! Woof!
// dog.move();      // Output: Buddy is moving.

// const cat = new Cat("Whiskers");
// cat.makeSound(); // Output: Meow!
// cat.move();      // Output: Whiskers is moving.
// When to Use Abstract Classes
// Common Functionality with Variation:

// Use abstract classes to define common functionality (e.g., move() in Animal) and let derived classes implement specific behavior (e.g., makeSound() in Dog and Cat).
// Code Reusability:

// Reduce code duplication by implementing shared methods in the abstract class.
// Polymorphism:

// Enable consistent handling of different derived classes through the base class.
// Abstract Properties
// Abstract classes can also define abstract properties, which must be implemented in derived classes.

// typescript
// Copy code
// abstract class Shape {
//   abstract area: number; // Abstract property
//   abstract perimeter(): number; // Abstract method
// }

// class Circle extends Shape {
//   constructor(private radius: number) {
//     super();
//   }

//   get area(): number {
//     return Math.PI * this.radius ** 2;
//   }

//   perimeter(): number {
//     return 2 * Math.PI * this.radius;
//   }
// }

// const circle = new Circle(5);
// console.log(circle.area);        // Output: 78.53981633974483
// console.log(circle.perimeter()); // Output: 31.41592653589793
// Abstract vs Interface
// Aspect	Abstract Class	Interface
// Implementation	Can include both abstract and concrete methods.	Cannot include implementations, only method signatures.
// Instantiation	Cannot be instantiated.	Cannot be instantiated.
// Inheritance	A class can inherit only one abstract class.	A class can implement multiple interfaces.
// Fields/Properties	Can define fields and properties directly.	Cannot define fields directly; only describe structure.
// Use Case	Use for inheritance when classes share common behavior.	Use for defining contracts or types for objects.
// Key Notes
// Abstract classes are ideal for situations where you want to share functionality between related classes but also enforce implementation of specific methods in derived classes.
// Use interfaces if you only need a contract or type definition without shared implementation.
// Abstract members must be implemented in derived classes unless the derived class is also abstract.