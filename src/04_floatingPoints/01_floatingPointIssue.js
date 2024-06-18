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
 * represented in binary format using a fixed number of bits. In the case of
 * 0.1 and 0.2, their binary representations are actually infinite repeating
 * fractions:
 *
 *      0.1 in decimal is represented as 0.0001100110011... in binary.
 *      Sign bit: 0 (positive)
 *      Exponent: 01111111011 (1023 in decimal, biased by 1023)
 *      Mantissa: 1001100110011001100110011001100110011001100110011010 (52 bits)
 *      Full 64-bit representation:
 *          0011111110111001100110011001100110011001100110011001100110011010
 *
 *      0.2 in decimal is represented as 0.0011001100110... in binary.
 *      Sign bit: 0 (positive)
 *      Exponent: 01111111100 (1020 in decimal, biased by 1023)
 *      Mantissa: 1001100110011001100110011001100110011001100110011010 (52 bits)
 *      Full 64-bit representation:
 *          0011111111001001100110011001100110011001100110011001100110011010
 *
 *      0.3 in decimal is represented as 0.0100110011001... in binary.
 *      Sign bit: 0 (positive)
 *      Exponent: 01111111101 (1021 in decimal, biased by 1023)
 *      Mantissa: 0011001100110011001100110011001100110011001100110011 (52 bits)
 *      Full 64-bit representation:
 *          0011111111010011001100110011001100110011001100110011001100110011
 *
 *      The binary representation of 0.1 + 0.2 is not exactly 0.3:
 *      Sign bit: 0 (positive)
 *      Exponent: 01111111011 (1020 in decimal, biased by 1023)
 *      Mantissa: 1001100110011001100110011001100110011001100110011010 (52 bits)
 *      Full 64-bit representation:
 *          0011111110111001100110011001100110011001100110011001100110011010
 *      Floating point representation: 0.30000000000000004
 *
 * When these numbers are added together, the result is also an infinite
 * repeating fraction in binary. However, due to the limited number of bits
 * available for the mantissa, the result is rounded to the nearest
 * representable value, which is not exactly 0.3.
 *
 * Representation of Numbers in JavaScript:
 *
 * In JavaScript, numbers are typically represented using 64 bits (8 bytes)
 * following the IEEE 754 standard for double-precision floating-point format.
 * This applies to all numbers, including 0.1.
 *
 * The 64 bits are divided into three parts:
 *      1) Sign bit (1 bit): Indicates whether the number is positive (0) or
 *      negative (1).
 *      2) Exponent (11 bits): Represents the exponent of the number in binary
 *      format, with an offset of 1023.
 *      3) Mantissa (52 bits): Represents the fractional part of the number.
 *
 * So, the number 0.1 is stored using 64 bits (8 bytes) in memory, even though
 * its binary representation is an infinite repeating fraction.
 *
 * It's important to note that this is not specific to the number 0.1 but
 * applies to all numbers in JavaScript, as they are all represented using the
 * same 64-bit floating-point format.
 */

console.log(0.1 + 0.2) // Output: 0.30000000000000004

function addNumbers(a, b) {
	const sum = a + b
	console.log(`${a} + ${b} = ${sum}`)
	return sum
}

console.log(addNumbers(0.1, 0.2)) // Output: 0.1 + 0.2 = 0.30000000000000004
