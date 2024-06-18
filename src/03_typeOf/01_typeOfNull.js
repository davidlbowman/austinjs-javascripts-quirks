typeof null // Output: 'object'

/*
 * In JavaScript, the typeof operator returns 'object' when applied to the
 * null value.
 *
 * The behavior of typeof null returning 'object' is a well-known quirk in
 * JavaScript that has existed since the early days of the language. It is
 * considered a bug that has been preserved for backward compatibility reasons.
 *
 * The reason behind this behavior lies in the internal representation of
 * values in JavaScript. In the early implementations of JavaScript, values
 * were represented using a 32-bit word, where the lower 1-3 bits were used to
 * store the type tag, and the remaining bits stored the actual value or a
 * reference to an object.
 *
 * The type tags were assigned as follows:
 *      000: Object
 *      001: Int32
 *      010: Double
 *      100: String
 *      110: Boolean
 *      111: Undefined
 *
 * Despite being a primitive value, null is incorrectly identified as an
 * object by the typeof operator.
 */

function isNull(value) {
	return value === null
}

isNull(null) // Output: true
isNull({}) // Output: false
isNull(0) // Output: false

/*
 * When checking for null values, it is recommended to use strict
 * equality (===) or inequality (!==) operators instead of relying solely
 * on the typeof operator. This ensures that null values are correctly
 * identified and avoids potential confusion caused by the typeof null quirk.
 */
