// let num = 5;

// num = "krutik";



// to compile this => tsc 1.ts  then run == node 1.js file

// we dont run typescript in development it is just for developer experience

// ? version check:  tsc --v

// ? tsc --init   ==> for configuration file
//  "noEmitOnError": true, ==> koi b error hsee to js ma compile nai krseee
/* Language and Environment */
    // "target": "ES2020",    ===> es2020 sudhi support krse

    // "lib": ["es6","dom"], ===> target pramane lib maa b es6 , es2020 , es2021 lakhvaa nu
//*tsconfig.json hoi tyaa run krvaa only ===> tsc   , jj  lkahvaaa nu
//? tsc --noEmitOnError file.ts ==> koi b error hsee to js ma compile nai krseee

//recompile the same file
//? tsc app.ts --watch
// OR
//? tsc app.ts -w
 

// * tsconfig.json ma ===> object compilerOptions pachiiii:
 // "exclude":[
    // "node_modules", // default way ma excluded jj hoi lakhvaa ni jroor nathi
    // "abc.ts",  // this file will be excluded
    // "*.dev.ts", //j file .dev.ts thi end thati hoiii
    // "**/*.dev.ts", //j file koi b folder ma hoi and .dev.ts thi end thati hoiii
  // ],
  // include krvaaa(opposite of include)
  // "include":[
    // "abc.ts"
  // ],

// * target es6 kriyee etele aa hovaa joieeee
//   "lib": ["es6","dom","DOM.Iterable","ScriptHost"],

//* "SourceMap":true
// Debug Krvaa maate 
// Chrome => inspect => Source ma .ts file b aavi jsse to debug kri sakaase

// *"OutDir" "rootDir"
// OutDir: "./dist" => jevu src directory ma file structured hsee tevi rite compile thayaa pachi js file structured thseee dist directory maaaa

// rootDir : "./src" => compiler badhii jj root files josee .ts ne badha jj folder structure dist ma naakhse .js 

// removeComments:true


// ? "strict": true 
// aa on kriyee that means eni niche naa badhaa option on jj che


//! Error : Cannot redeclare block-scoped variable 'name'.

// Cannot redeclare block-scoped variable 'name'.
// 11 March 2018 by Tamas Piros  TypeScript, Quick Fix
// The problem
// For a long time now I've been baffled by the following error message that I frequently saw in my TypeScript applications:

// [ts] Cannot redeclare block-scoped variable 'name'.
// This error is raised when I try to declare a variable called name:

// const name = "John";
// The explanation
// The fun fact that this is not in fact a bug related to TypeScript but it's a feature of the language. TypeScript uses the DOM typings for the global execution environment and there in fact exists a name property on the global window object. If you don't believe me, open up your browser's console and type in the following:

// 'name' in window ? 'property exists' : 'property does not exist'; // property exists
// (You can also check the property's value but it will return an empty string: window.name; // "".

// The solution
// There are three solutions to this hitch:

// Rename the variable to be something else, other than name.
// Use TypeScript modules, and adding an empty export {}; will do the job, like so:
// export {};
// const name = "John";
// Configure your compiler options by not adding DOM typings. This can be achieved by adding an explicit lib property to tsconfig.json, like so:
// {
//   "compilerOptions": {
//       "lib": ["es6","dom"],   //es6 re-declare error durr krva and "dom" console log lakhvaa
//   }
// }
// Either of the above three solutions will remove the error and we can continue to write more TypeScript code!