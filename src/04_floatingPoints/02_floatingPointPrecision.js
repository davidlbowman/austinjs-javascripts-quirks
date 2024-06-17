const x = 0.3 - 0.2 // x = 0.09999999999999998
const y = 0.2 - 0.1 // y = 0.1

console.log(x === y) // Output: false

/*
 * This example demonstrates another issue with floating-point arithmetic in
 * JavaScript.
 *
 * Even though the expressions 0.3 - 0.2 and 0.2 - 0.1 should theoretically
 * result in the same value (0.1), due to the binary representation of
 *  floating-point numbers, the results are slightly different.
 *
 * This can lead to unexpected behavior when comparing floating-point numbers
 * for equality, as the comparison x === y evaluates to false, even though the
 * values should be equal.
 */

function areFloatsEqual(a, b) {
	const epsilon = 0.000001 // Adjust this value based on the desired precision
	return Math.abs(a - b) < epsilon
}

console.log(areFloatsEqual(x, y)) // Output: true

/*
 * To address the issue of comparing floating-point numbers for equality, a
 * common approach is to use a small epsilon value to account for the potential
 * rounding errors.
 *
 * The areFloatsEqual function compares two floating-point numbers by checking
 * if their absolute difference is less than a small epsilon value (0.000001 in
 * this example).
 *
 * This approach provides a more reliable way to compare floating-point numbers
 * for approximate equality, taking into account the inherent limitations of
 * floating-point arithmetic.
 */
