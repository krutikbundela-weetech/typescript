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
