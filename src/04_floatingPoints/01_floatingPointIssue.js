console.log(0.1 + 0.2) // Output: 0.30000000000000004

/*
 * In JavaScript, the result of 0.1 + 0.2 is not exactly 0.3 due to the way
 * floating-point numbers are represented in binary format.
 *
 * Floating-point numbers are represented using a fixed number of bits, which
 * means that some decimal fractions cannot be precisely represented in binary * format.
 *
 * This issue is not specific to JavaScript but is a limitation of the IEEE 754 * standard for floating-point arithmetic, which is used by most programming
 * languages and computer systems.
 */

function addNumbers(a, b) {
	const sum = a + b
	console.log(`${a} + ${b} = ${sum}`)
	return sum
}

console.log(addNumbers(0.1, 0.2)) // Output: 0.1 + 0.2 = 0.30000000000000004

/*
 * The addNumbers function demonstrates the issue with floating-point
 * arithmetic.
 *
 * When adding 0.1 and 0.2, the result is not exactly 0.3 due to the binary
 * representation of these decimal fractions.
 *
 * This issue can lead to unexpected results when performing calculations
 * involving floating-point numbers, especially when dealing with precise
 * values or comparing floating-point numbers for equality.
 */
