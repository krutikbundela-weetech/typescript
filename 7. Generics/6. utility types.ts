// generics utility type
// ChatGPT said:
// ChatGPT
// Generic Utility Types in TypeScript
// TypeScript provides several built-in utility types that simplify common type transformations. These utility types are generic and operate on existing types to produce new ones. They help make TypeScript more powerful and expressive while reducing repetitive code.

// Common Generic Utility Types
// Here are some of the most commonly used generic utility types:

// 1. Partial<T>
// Creates a type where all properties of T are optional.

// typescript
// Copy code
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// type PartialUser = Partial<User>;

// const user: PartialUser = {
//   name: "Alice", // id and email are optional
// };
// 2. Required<T>
// Creates a type where all properties of T are required.

// typescript
// Copy code
// interface User {
//   id?: number;
//   name?: string;
//   email?: string;
// }

// type RequiredUser = Required<User>;

// const user: RequiredUser = {
//   id: 1,
//   name: "Alice",
//   email: "alice@example.com",
// }; // All properties are mandatory now
// 3. Readonly<T>
// Creates a type where all properties of T are read-only.

// typescript
// Copy code
// interface User {
//   id: number;
//   name: string;
// }

// type ReadonlyUser = Readonly<User>;

// const user: ReadonlyUser = {
//   id: 1,
//   name: "Alice",
// };

// // user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
// 4. Record<K, T>
// Creates an object type with keys K and values T.

// typescript
// Copy code
// type Role = "admin" | "user" | "guest";

// type RoleDescriptions = Record<Role, string>;

// const roles: RoleDescriptions = {
//   admin: "Administrator",
//   user: "Regular User",
//   guest: "Guest User",
// };
// 5. Pick<T, K>
// Creates a type by selecting specific keys K from T.

// typescript
// Copy code
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// type UserNameAndEmail = Pick<User, "name" | "email">;

// const user: UserNameAndEmail = {
//   name: "Alice",
//   email: "alice@example.com",
// };
// 6. Omit<T, K>
// Creates a type by excluding specific keys K from T.

// typescript
// Copy code
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// type UserWithoutEmail = Omit<User, "email">;

// const user: UserWithoutEmail = {
//   id: 1,
//   name: "Alice",
// };
// 7. Exclude<T, U>
// Creates a type by excluding types in U from T.

// typescript
// Copy code
// type AllRoles = "admin" | "user" | "guest";
// type NonGuestRoles = Exclude<AllRoles, "guest">; // "admin" | "user"
// 8. Extract<T, U>
// Creates a type by extracting types in U from T.

// typescript
// Copy code
// type AllRoles = "admin" | "user" | "guest";
// type OnlyGuestRole = Extract<AllRoles, "guest">; // "guest"
// 9. NonNullable<T>
// Removes null and undefined from a type.

// typescript
// Copy code
// type NullableString = string | null | undefined;
// type NonNullString = NonNullable<NullableString>; // string
// 10. ReturnType<T>
// Gets the return type of a function type.

// typescript
// Copy code
// function getUser(): User {
//   return { id: 1, name: "Alice", email: "alice@example.com" };
// }

// type UserReturnType = ReturnType<typeof getUser>; // User
// 11. Parameters<T>
// Gets the parameter types of a function type as a tuple.

// typescript
// Copy code
// function setUser(id: number, name: string): void {}

// type UserParameters = Parameters<typeof setUser>; // [number, string]
// 12. ConstructorParameters<T>
// Gets the constructor parameter types of a class or constructor function.

// typescript
// Copy code
// class User {
//   constructor(public id: number, public name: string) {}
// }

// type UserConstructorParams = ConstructorParameters<typeof User>; // [number, string]
// 13. InstanceType<T>
// Gets the instance type of a class or constructor function.

// typescript
// Copy code
// class User {
//   id: number;
//   name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
// }

// type UserInstance = InstanceType<typeof User>; // User
// Custom Utility Types
// You can combine these built-in utility types to create custom types.

// Example: Making All Properties Optional and Readonly
// typescript
// Copy code
// type OptionalReadonly<T> = Readonly<Partial<T>>;

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// type OptionalReadonlyUser = OptionalReadonly<User>;

// const user: OptionalReadonlyUser = {
//   name: "Alice",
// };
// // user.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property
// These utility types are invaluable for creating type-safe, maintainable code. Let me know if you'd like to explore them further with examples! 😊