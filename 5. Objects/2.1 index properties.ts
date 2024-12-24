// In TypeScript, index properties (also called index signatures) allow you to define objects that can have arbitrary properties, where the keys are not known in advance but share a common type. They are particularly useful when working with dynamic objects or collections with consistent key-value types.

// Syntax
// The general syntax for an index property is:

// typescript
// Copy code
// type TypeName = {
//     [key: KeyType]: ValueType;
// };
// key: The name of the property used as the index (commonly key or index). Its type must be string, number, or symbol.
// ValueType: The type of the values stored in the object.
// Example: Object with Arbitrary String Keys
// typescript
// Copy code
// type UserRoles = {
//     [username: string]: string;
// };

// const roles: UserRoles = {
//     alice: "admin",
//     bob: "editor",
//     charlie: "viewer",
// };

// console.log(roles.alice); // Output: "admin"
// Here:

// The keys (alice, bob, charlie) are string.
// The values (e.g., "admin", "editor") are also string.
// Example: Using Number as Keys
// You can use number as the key type, which is useful for arrays or numeric mappings.

// typescript
// Copy code
// type NumberMap = {
//     [id: number]: string;
// };

// const errorMessages: NumberMap = {
//     404: "Not Found",
//     500: "Internal Server Error",
//     200: "OK",
// };

// console.log(errorMessages[404]); // Output: "Not Found"
// Using Index Properties with Other Properties
// You can combine specific properties with an index signature.

// typescript
// Copy code
// type Config = {
//     name: string;
//     [key: string]: string | number;
// };

// const appConfig: Config = {
//     name: "MyApp",
//     version: 1.0,
//     author: "John Doe",
// };

// console.log(appConfig.version); // Output: 1
// console.log(appConfig.author);  // Output: "John Doe"
// In this case:

// The name property is explicitly defined.
// Any other properties must have types string or number.
// Readonly Index Properties
// You can make an index property readonly to prevent modifications.

// typescript
// Copy code
// type ReadonlyMap = {
//     readonly [key: string]: number;
// };

// const scores: ReadonlyMap = {
//     alice: 10,
//     bob: 15,
// };

// // scores.alice = 20; // Error: Cannot assign to 'alice' because it is a read-only property.
// Index Property Restrictions
// Incompatible Property Types: If you define specific properties alongside an index property, those properties must conform to the index property type.

// typescript
// Copy code
// type InvalidConfig = {
//     name: string;
//     [key: string]: number;
// };

// // Error: Property 'name' must be of type 'number'.
// Fix:

// typescript
// Copy code
// type ValidConfig = {
//     name: number; // Matches the index property type
//     [key: string]: number;
// };
// No Mixed Key Types: A single index property type (string, number, or symbol) is allowed. You cannot mix types in one index signature.

// Practical Use Cases
// Dynamic Objects: Use index properties for objects where keys and values are dynamic, like dictionaries or maps.

// typescript
// Copy code
// type Dictionary = {
//     [key: string]: string;
// };

// const translations: Dictionary = {
//     hello: "Hola",
//     goodbye: "Adiós",
// };
// Flexible APIs: Allow users to add custom fields to objects while enforcing consistency in value types.

// typescript
// Copy code
// type APIResponse = {
//     status: string;
//     [key: string]: string | number;
// };

// const response: APIResponse = {
//     status: "success",
//     timestamp: 1234567890,
//     message: "Operation completed",
// };
// Error Maps: Create mappings for error codes and their corresponding messages.

// typescript
// Copy code
// type ErrorMap = {
//     [errorCode: number]: string;
// };

// const errors: ErrorMap = {
//     404: "Not Found",
//     500: "Server Error",
// };



// Certainly! Here's an example of how to use index properties in an interface in TypeScript.

// Index Signature in Interface
// An index signature can be used in an interface to allow an object to have arbitrary keys, with each key corresponding to a certain value type. Here's how it works:

// Example 1: Simple Index Signature in an Interface
// typescript
// Copy code
// interface UserRoles {
//     [username: string]: string;  // Index signature
// }

// const roles: UserRoles = {
//     alice: "admin",
//     bob: "editor",
//     charlie: "viewer",
// };

// console.log(roles.alice); // Output: "admin"
// console.log(roles.bob);   // Output: "editor"
// In this example:

// UserRoles defines an index signature with the type string for the keys (i.e., username), and the values are also of type string (i.e., the roles like "admin", "editor").
// You can access the properties dynamically using any string as the key.
// Example 2: Index Signature with Other Specific Properties
// You can combine specific properties with an index signature in an interface. For example, let's define an interface where name is a specific property, and all other properties can be dynamic.

// typescript
// Copy code
// interface User {
//     name: string;  // Specific property
//     age: number;   // Specific property
//     [key: string]: string | number;  // Index signature for additional properties
// }

// const user: User = {
//     name: "Alice",
//     age: 30,
//     address: "123 Main St",
//     phoneNumber: "123-456-7890",
// };

// console.log(user.name);          // Output: "Alice"
// console.log(user.address);       // Output: "123 Main St"
// console.log(user.phoneNumber);   // Output: "123-456-7890"
// console.log(user.age);           // Output: 30
// In this case:

// The name and age properties are explicitly defined.
// The [key: string]: string | number; index signature means that any additional properties must be either a string or a number.
// Example 3: Readonly Index Signature in Interface
// You can also define an index signature with the readonly modifier, which ensures that the properties cannot be modified once they are set.

// typescript
// Copy code
// interface ReadOnlyDictionary {
//     readonly [key: string]: number;
// }

// const errorCodes: ReadOnlyDictionary = {
//     "404": 1,
//     "500": 2,
//     "403": 3,
// };

// console.log(errorCodes["404"]); // Output: 1

// // errorCodes["404"] = 5; // Error: Cannot assign to '404' because it is a read-only property.
// In this case:

// The readonly modifier ensures that properties of errorCodes cannot be modified after being initialized.
// Example 4: Index Signature with a Numeric Key
// You can also use a numeric index signature. This is useful for working with arrays or objects indexed by numbers.

// typescript
// Copy code
// interface PhoneBook {
//     [index: number]: string;  // Index signature with number as key
// }

// const contacts: PhoneBook = {
//     0: "Alice",
//     1: "Bob",
//     2: "Charlie",
// };

// console.log(contacts[1]); // Output: "Bob"
// In this example:

// The key is of type number, and the value is of type string. This is useful for scenarios like a list of contacts, where the index is a number.
// Example 5: Using Both String and Number as Index Signatures
// It's possible to use both string and number as index signatures within the same interface, but note that they should have compatible value types.

// typescript
// Copy code
// interface Config {
//     [key: string]: string;
//     [index: number]: string;
// }

// const settings: Config = {
//     "theme": "dark",
//     "language": "en",
//     1: "setting1",
//     2: "setting2",
// };

// console.log(settings["theme"]);    // Output: "dark"
// console.log(settings[1]);          // Output: "setting1"
// In this case:

// Both string and number keys are allowed, and both should return a string as the value.
// Important Notes
// The index signature in an interface allows any additional properties that match the specified key and value types.
// If you define specific properties in the interface, they must adhere to the same type as the index signature if they are dynamic.
// Readonly index signatures ensure immutability for properties.
