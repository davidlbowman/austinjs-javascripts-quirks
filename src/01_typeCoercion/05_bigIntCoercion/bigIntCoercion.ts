// @ts-nocheck

function addBigInt(a: bigint, b: bigint): bigint {
	return a + b
}

/*
 * The addBigInt function accepts two parameters of type bigint and
 * returns their sum.
 *
 * In TypeScript, the bigint type represents BigInt values.
 *
 * BigInt values can be created by appending 'n' to the end of an
 * integer literal.
 *
 * The function ensures that only bigint values can be passed as arguments.
 */

addBigInt(1n, 2n) // 3n
addBigInt(BigInt(1), BigInt(2)) // 3n
addBigInt(1n, 2) // TypeScript error: Argument of type 'number' is not assignable to parameter of type 'bigint'.
addBigInt(1n, "2n") // TypeScript error: Argument of type 'string' is not assignable to parameter of type 'bigint'.

function compareBigInt(a: bigint, b: bigint): boolean {
	return a == b
}

/*
 * The compareBigInt function uses the == operator to compare two bigint values.
 *
 * In TypeScript, the == operator performs a strict equality comparison
 * for bigint values.
 *
 * The function ensures that only bigint values can be passed as arguments.
 */

compareBigInt(1n, 1n) // true
compareBigInt(1n, 2n) // false
compareBigInt(1n, BigInt(1)) // true
compareBigInt(1n, 1) // TypeScript error: Argument of type 'number' is not assignable to parameter of type 'bigint'.
compareBigInt(1n, "1n") // TypeScript error: Argument of type 'string' is not assignable to parameter of type 'bigint'.

function strictCompareBigInt(a: bigint, b: bigint): boolean {
	return a === b
}

/*
 * The strictCompareBigInt function uses the === operator to compare two
 * bigint values.
 *
 * In TypeScript, the === operator performs a strict equality comparison
 * for bigint values.
 *
 * The function ensures that only bigint values can be passed as arguments.
 */

strictCompareBigInt(1n, 1n) // true
strictCompareBigInt(1n, 2n) // false
strictCompareBigInt(1n, BigInt(1)) // true
strictCompareBigInt(1n, 1) // TypeScript error: Argument of type 'number' is not assignable to parameter of type 'bigint'.
strictCompareBigInt(1n, "1n") // TypeScript error: Argument of type 'string' is not assignable to parameter of type 'bigint'.

/*
 * In TypeScript, the bigint type represents BigInt values, which are
 * used for integer values that exceed the safe integer limit.
 *
 * BigInt values can be created by appending 'n' to the end of an
 * integer literal or by using the BigInt() function.
 *
 * The bigint type is a separate type and cannot be mixed with other types
 * like number or string.
 *
 * TypeScript's type system ensures that only bigint values can be passed
 * to functions expecting bigint parameters.
 *
 * Both the == and === operators perform strict equality comparisons for
 * bigint values in TypeScript.
 */
