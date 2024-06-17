typeof null // Output: 'object'

/*
 * In JavaScript, the typeof operator returns 'object' when applied to the null value.
 * This behavior is a long-standing bug in the language that cannot be fixed without breaking existing code.
 * Despite being a primitive value, null is incorrectly identified as an object by the typeof operator.
 */

function isNull(value) {
	console.log(typeof value) // Output: 'object' for null values
	return value === null
}

isNull(null) // Output: true
isNull({}) // Output: false
isNull(0) // Output: false

/*
 * When checking for null values, it is recommended to use strict equality (===) or inequality (!==) operators
 * instead of relying solely on the typeof operator. This ensures that null values are correctly identified
 * and avoids potential confusion caused by the typeof null quirk.
 */
