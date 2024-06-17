console.log(typeof Number.NaN) // Output: 'number'

/*
 * In JavaScript, the typeof operator returns 'number' when applied to the NaN (Not a Number) value.
 * This behavior is because NaN is considered a numeric value, even though it represents an invalid or undefined mathematical operation.
 */

function isNaN(value) {
	console.log(typeof value) // Output: 'number' for NaN values
	return value !== value // NaN is the only value that is not equal to itself
}

console.log(isNaN(Number.NaN)) // Output: true
console.log(isNaN(42)) // Output: false
console.log(isNaN("hello")) // Output: false

/*
 * To check if a value is NaN, it is recommended to use the built-in isNaN() function or the value !== value comparison.
 * This ensures that NaN values are correctly identified, despite the typeof operator returning 'number' for NaN.
 */
