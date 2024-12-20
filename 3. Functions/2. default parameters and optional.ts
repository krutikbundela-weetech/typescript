//? Optional and Default Parameters:

//*TypeScript allows you to define optional and default parameters in functions.
//*Optional parameters are denoted by appending a ? symbol after the parameter name,
//*and default parameters are specified by providing a default value in the parameter declaration.


// ! Default Parameters

const greet3 = (name:string , id:number=1): string => {
    return `Welcome, ${name} and your id is ${id}`
}

const emp = greet3("krutik"); // we can pass only one

console.log("file: 2. default parameters and optional.ts:15 ~ emp:", emp);


// ! Optional Parameters

const greet4 = (name: string, id?: number): string => {
    if (id) {
        return `Welcome, ${name} and and your id is ${id}`;
    }else{
        return `Welcome,${name}  `;
    }
};