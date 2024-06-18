console.log(typeof Number.NaN) // Output: 'number'

/*
 * In JavaScript, the typeof operator returns 'number' when applied to the
 * NaN (Not a Number) value.
 *
 * NaN (Not a Number) is a special value in JavaScript that represents an
 * undefined or unrepresentable value resulting from an invalid mathematical
 * operation or an operation that cannot be performed.
 *
 * When the typeof operator is applied to NaN, it returns 'number'. This
 * behavior might seem counterintuitive since NaN is not a valid number.
 * However, the reasoning behind this is that NaN is considered a numeric data
 * type in JavaScript, even though it represents an invalid numeric value.
 *
 * Here are a few key points about NaN:
 *     1) NaN is a global property of the Number object.
 *     2) NaN is the only value in JavaScript that is not equal to itself.
 *        Therefore, you cannot use the equality operator (== or ===) to check
 *        if a value is NaN.
 *     3) To check if a value is NaN, you can use the built-in isNaN() function
 *        or the value !== value comparison.
 */

function isNaN(value) {
	console.log(typeof value) // Output: 'number' for NaN values
	return value !== value // NaN is the only value that is not equal to itself
}

console.log(isNaN(Number.NaN)) // Output: true
console.log(isNaN(42)) // Output: false
console.log(isNaN("hello")) // Output: false

/*
 * To check if a value is NaN, it is recommended to use the built-in
 * isNaN() function or the value !== value comparison.
 *
 * This ensures that NaN values are correctly identified, despite the
 * typeof operator returning 'number' for NaN.
 */
