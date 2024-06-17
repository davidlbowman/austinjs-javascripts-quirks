function addNumbers(a: number, b: number): number {
	return a + b
}

/*
 * The addNumbers function performs addition between two numbers.
 * It accepts two parameters of type number and returns their sum as a number.
 * TypeScript ensures that only numbers can be passed as arguments to the function.
 */

addNumbers(1, 2) // 3
addNumbers(1.5, 2.5) // 4
addNumbers(-1, 2) // 1
addNumbers(1, "2") // TypeScript error: Argument of type 'string' is not assignable to parameter of type 'number'
addNumbers(1, "abc") // TypeScript error: Argument of type 'string' is not assignable to parameter of type 'number'

function subtractNumbers(a: number, b: number): number {
	return a - b
}

/*
 * The subtractNumbers function performs subtraction between two numbers.
 * It accepts two parameters of type number and returns their difference as a number.
 * TypeScript ensures that only numbers can be passed as arguments to the function.
 */

subtractNumbers(1, 2) // -1
subtractNumbers(5.5, 2.5) // 3
subtractNumbers(-1, 2) // -3
subtractNumbers(1, "2") // TypeScript error: Argument of type 'string' is not assignable to parameter of type 'number'
subtractNumbers(1, "abc") // TypeScript error: Argument of type 'string' is not assignable to parameter of type 'number'

function looselyCompareNumbers(a: number, b: number): boolean {
	return a == b // performs type coercion
}

/*
 * The looselyCompareNumbers function compares two numbers using the == operator.
 * The == operator performs type coercion if the values have different types.
 * It returns true if the values are equal after type coercion, otherwise false.
 * TypeScript ensures that only numbers can be passed as arguments to the function.
 */

looselyCompareNumbers(1, 1) // true
looselyCompareNumbers(1, 1.0) // true
looselyCompareNumbers(1, 2) // false
looselyCompareNumbers(1, "1") // TypeScript error: Argument of type 'string' is not assignable to parameter of type 'number'

function strictlyCompareNumbers(a: number, b: number): boolean {
	return a === b // does not perform type coercion
}

/*
 * The strictlyCompareNumbers function compares two numbers using the === operator.
 * The === operator does not perform type coercion and returns true only if the values have the same type and value.
 * It returns false if the values have different types or different values.
 * TypeScript ensures that only numbers can be passed as arguments to the function.
 */

strictlyCompareNumbers(1, 1) // true
strictlyCompareNumbers(1, 1.0) // true
strictlyCompareNumbers(1, 2) // false
strictlyCompareNumbers(1, "1") // TypeScript error: Argument of type 'string' is not assignable to parameter of type 'number'

/*
 * In TypeScript, the type system ensures that only values of the specified type can be passed to functions.
 * The addNumbers and subtractNumbers functions accept only numbers as arguments and return a number.
 * The looselyCompareNumbers and strictlyCompareNumbers functions accept only numbers as arguments and return a boolean.
 * Attempting to pass a value of a different type will result in a TypeScript error.
 * TypeScript's type checking helps catch type-related errors at compile-time, providing better type safety compared to JavaScript.
 */
