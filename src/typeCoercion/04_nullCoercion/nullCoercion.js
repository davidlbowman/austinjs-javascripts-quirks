function addNullCoercion(a, b) {
	return a + b
}

/*
 * When the + operator is used with null and a string, null is coerced to the string 'null',
 * and the two strings are concatenated.
 */

addNullCoercion(null, "hello") // 'nullhello'

/*
 * When the + operator is used with null and a number, null is coerced to the number 0,
 * and the addition operation is performed.
 */

addNullCoercion(null, 1) // 1
addNullCoercion(null, -5) // -5
addNullCoercion(null, 3.14) // 3.14

function compareNullCoercion(a, b) {
	return a == b
}

/*
 * When using the == operator to compare null with a number or a string,
 * no type coercion occurs, and the comparison always returns false.
 */

compareNullCoercion(null, 0) // false
compareNullCoercion(null, "") // false
compareNullCoercion(null, "0") // false
compareNullCoercion(null, "null") // false

/*
 * However, when comparing null with undefined using the == operator,
 * the comparison returns true due to a special case in JavaScript's equality comparison.
 */

compareNullCoercion(null, undefined) // true

function strictCompareNullCoercion(a, b) {
	return a === b
}

/*
 * When using the === operator to compare null with any other value,
 * no type coercion occurs, and the comparison returns true only if both operands are null.
 */

strictCompareNullCoercion(null, 0) // false
strictCompareNullCoercion(null, "") // false
strictCompareNullCoercion(null, "null") // false
strictCompareNullCoercion(null, undefined) // false
strictCompareNullCoercion(null, null) // true

/*
 * The === operator provides a strict equality comparison, checking both the value and the type of the operands.
 */
