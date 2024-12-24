// * IMP : when we use generic and non generic type together then while calling the function we need to defined the type in a manner but with non generics we don't

function add<T, U>(a:T,b:U, c:boolean) : void{
console. log(typeof a);
console. log(typeof b);
}

const result1= add<number, string>(5,"thapa",true);
const result2= add("Hello, ",5,false);