// @ts-nocheck

function addNullCoercion(a: string, b: string): string
function addNullCoercion(a: number, b: number): number
function addNullCoercion(a: null, b: string | number): string | number
function addNullCoercion(
	a: string | number | null,
	b: string | number
): string | number {
	if (a === null) {
		return b
	}
	if (typeof a === "string" && typeof b === "string") {
		return `${a}${b}`
	}
	if (typeof a === "number" && typeof b === "number") {
		return a + b
	}
	throw new Error(`Unsupported type combination: ${typeof a} and ${typeof b}`)
}

/*
 * The addNullCoercion function is overloaded to handle different
 * type combinations.
 * If the first argument is null, it returns the second argument as is.
 * If both arguments are strings, it concatenates them.
 * If both arguments are numbers, it performs addition.
 * If the type combination is not supported, it throws an error.
 */

addNullCoercion("hello", "world") // "helloworld"
addNullCoercion(1, 2) // 3
addNullCoercion(null, "hello") // "hello"
addNullCoercion(null, 1) // 1
addNullCoercion("hello", 1) // TypeScript error: Argument of type 'number' is not assignable to parameter of type 'string'.

function compareNullCoercion(a: string, b: string): boolean
function compareNullCoercion(a: number, b: number): boolean
function compareNullCoercion(a: null, b: string | number): boolean
function compareNullCoercion(
	a: string | number | null,
	b: string | number
): boolean {
	if (a === null) {
		return false
	}
	if (typeof a === "string" && typeof b === "string") {
		return a === b
	}
	if (typeof a === "number" && typeof b === "number") {
		return a === b
	}
	throw new Error(`Unsupported type combination: ${typeof a} and ${typeof b}`)
}

/*
 * The compareNullCoercion function is overloaded to handle different
 * type combinations.
 * If the first argument is null, it always returns false.
 *
 * If both arguments are strings or both are numbers, it performs a
 * strict equality comparison.
 *
 * If the type combination is not supported, it throws an error.
 */

compareNullCoercion("hello", "world") // false
compareNullCoercion(1, 2) // false
compareNullCoercion(null, "hello") // false
compareNullCoercion(null, 1) // false
compareNullCoercion("hello", 1) // TypeScript error: Argument of type 'number' is not assignable to parameter of type 'string'.
compareNullCoercion("hello", "hello") // true
compareNullCoercion(1, 1) // true
compareNullCoercion(1, "1") // TypeScript error: Argument of type 'string' is not assignable to parameter of type 'number'.
compareNullCoercion(null, null) // TypeScript error: Argument of type 'null' is not assignable to parameter of type 'string | number'.

function strictCompareNullCoercion(a: string, b: string): boolean
function strictCompareNullCoercion(a: number, b: number): boolean
function strictCompareNullCoercion(a: null, b: string | number): boolean
function strictCompareNullCoercion(
	a: string | number | null,
	b: string | number
): boolean {
	if (a === null) {
		return false
	}
	if (typeof a === "string" && typeof b === "string") {
		return a === b
	}
	if (typeof a === "number" && typeof b === "number") {
		return a === b
	}
	throw new Error(`Unsupported type combination: ${typeof a} and ${typeof b}`)
}

/*
 * The strictCompareNullCoercion function is overloaded to handle
 * different type combinations.
 *
 * It behaves the same as the compareNullCoercion function, using
 * strict equality comparison.
 *
 * If the first argument is null, it always returns false.
 *
 * If both arguments are strings or both are numbers, it performs a strict equality comparison.
 *
 * If the type combination is not supported, it throws an error.
 */

strictCompareNullCoercion("hello", "world") // false
strictCompareNullCoercion(1, 2) // false
strictCompareNullCoercion(null, "hello") // false
strictCompareNullCoercion(null, 1) // false
strictCompareNullCoercion("hello", 1) // TypeScript error: Argument of type 'number' is not assignable to parameter of type 'string'.
strictCompareNullCoercion("hello", "hello") // true
strictCompareNullCoercion(1, 1) // true
strictCompareNullCoercion(1, "1") // TypeScript error: Argument of type 'string' is not assignable to parameter of type 'number'.
strictCompareNullCoercion(null, null) // TypeScript error: Argument of type 'null' is not assignable to parameter of type 'string | number'.

/*
 * The behavior of null in TypeScript is similar to that of undefined.
 *
 * TypeScript's type system ensures that null values are handled explicitly.
 *
 * Attempting to pass null to a function expecting a string or number
 * will result in a TypeScript error.
 */
