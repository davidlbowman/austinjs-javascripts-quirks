function booleanCoercion<T>(a: boolean, b: T): T | false {
    return a && b
}

/*
 * In TypeScript, the && operator expects the first operand to be of type boolean.
 * 
 * If the first operand is true, it returns the second operand.
 * 
 * If the first operand is false, it returns false.
 */

booleanCoercion(true, "hello") // "hello"
booleanCoercion(false, "hello") // false

/*
 * TypeScript's type system ensures that the first operand is always a boolean.
 *
 * Passing any other type as the first operand will result in a 
 * TypeScript error.
 */

booleanCoercion(1, "hello") // TypeScript error: Argument of type 'number' is not assignable to parameter of type 'boolean'.
booleanCoercion(null, "hello") // TypeScript error: Argument of type 'null' is not assignable to parameter of type 'boolean'.
booleanCoercion(undefined, "hello") // TypeScript error: Argument of type 'undefined' is not assignable to parameter of type 'boolean'.
booleanCoercion("", "hello") // TypeScript error: Argument of type 'string' is not assignable to parameter of type 'boolean'.
booleanCoercion([], "hello") // TypeScript error: Argument of type 'never[]' is not assignable to parameter of type 'boolean'.
booleanCoercion({}, "hello") // TypeScript error: Argument of type '{}' is not assignable to parameter of type 'boolean'.

/*
 * The generic type parameter <T> allows the function to accept any type 
 * as the second operand.
 * 
 * The return type of the function is specified as T | false, indicating 
 * that it will return either the value of type T or false.
 */

booleanCoercion(true, 42) // 42
booleanCoercion(false, 42) // false
booleanCoercion(true, ["hello", "world"]) // ["hello", "world"]
booleanCoercion(false, ["hello", "world"]) // false
