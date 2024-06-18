/*
 * In JavaScript, the result of 0.1 + 0.2 is not exactly 0.3 due to the way
 * floating-point numbers are represented in binary format.
 *
 * In JavaScript, numbers are typically represented using the IEEE 754 standard
 * for floating-point arithmetic. This standard defines how floating-point
 * numbers are stored and processed in binary format.
 *
 * Floating-point numbers are represented using a fixed number of bits, which
 * includes a sign bit, exponent bits, and mantissa bits. The mantissa
 * represents the significant digits of the number, while the exponent
 * determines the position of the decimal point.
 *
 * The problem arises because not all decimal fractions can be precisely
 * represented in binary format using a fixed number of bits. In the case of 0.
 * 1 and 0.2, their binary representations are actually infinite repeating
 * fractions:
 *
 *      0.1 in decimal is represented as 0.0001100110011... in binary.
 *      0.2 in decimal is represented as 0.0011001100110... in binary.
 *
 * When these numbers are added together, the result is also an infinite
 * repeating fraction in binary. However, due to the limited number of bits
 * available for the mantissa, the result is rounded to the nearest
 * representable value, which is not exactly 0.3.
 *
 * This issue is not specific to JavaScript but is a limitation of the IEEE 754 * standard for floating-point arithmetic, which is used by most programming
 * languages and computer systems.
 */

console.log(0.1 + 0.2) // Output: 0.30000000000000004

function addNumbers(a, b) {
	const sum = a + b
	console.log(`${a} + ${b} = ${sum}`)
	return sum
}

console.log(addNumbers(0.1, 0.2)) // Output: 0.1 + 0.2 = 0.30000000000000004
