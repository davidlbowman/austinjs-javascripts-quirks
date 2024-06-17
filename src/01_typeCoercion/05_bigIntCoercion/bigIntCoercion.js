function addBigInt(a, b) {
	return a + b
}

/*
 * The addBigInt function accepts two BigInt values and returns their sum.
 * BigInt values can be created by appending 'n' to the end of an integer literal.
 * BigInt values cannot be mixed with other types in arithmetic operations.
 */

addBigInt(10n, 5n) // 15n
addBigInt(BigInt(10), BigInt(5)) // 15n
// addBigInt(10n, 5); // TypeError: Cannot mix BigInt and other types, use explicit conversions

function compareBigInt(a, b) {
	return a == b
}

/*
 * The compareBigInt function uses the == operator to compare two values.
 *
 * When comparing a BigInt with a number or a string using ==,
 * JavaScript performs type coercion.
 *
 * The number or string is converted to a BigInt before the comparison.
 */

compareBigInt(10n, 10) // true
compareBigInt(10n, "10") // true
compareBigInt(10n, 10n) // true
compareBigInt(10n, 5) // false
compareBigInt(10n, "5") // false

function strictCompareBigInt(a, b) {
	return a === b
}

/*
 * The strictCompareBigInt function uses the === operator to compare two values.
 *
 * When comparing a BigInt with a number or a string using ===, no
 * type coercion occurs.
 *
 * The === operator checks for both value equality and type equality.
 *
 * A BigInt is only considered equal to another BigInt with the same value.
 */

strictCompareBigInt(10n, 10) // false
strictCompareBigInt(10n, "10") // false
strictCompareBigInt(10n, 10n) // true
strictCompareBigInt(BigInt(10), 10n) // true
strictCompareBigInt(BigInt(10), BigInt(10)) // true

/*
 * BigInt is a built-in object in JavaScript that provides a way to
 * represent whole numbers larger than 2^53 - 1.
 *
 * BigInt values are created by appending 'n' to the end of an integer
 * literal or by calling the BigInt() function.
 *
 * BigInt values cannot be mixed with regular numbers in arithmetic operations.
 *
 * When comparing BigInt values with other types using ==, type coercion occurs.
 *
 * When comparing BigInt values with other types using ===, no type
 * coercion occurs, and the types must match for equality.
 */
