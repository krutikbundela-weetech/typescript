//* STATIC PROPERTIES & METHODS

//* In TypeScript, static methods and properties belong to the class itself rather than to instances of the class. By making methods and properties static, we can access them directly from the class without needing to create an instance of the class. This is useful for utility functions or properties that don't rely on instance-specific data.

//? Example: Math Operations Utility - creating a utility class to perform various mathematical operations.


class MathOperations{
    public static PI:number = Math.PI;
    public static add(num1:number,num2:number){
        return num1+ num2;
    }
    public static subs(num1:number,num2:number){
        return num1 - num2;
    }
}

console.log(MathOperations.PI);
console.log(MathOperations.add(12,22));
console.log(MathOperations.subs(122,22));
