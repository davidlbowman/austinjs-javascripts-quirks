function addNumbers(a, b) {
	return a + b
}

/*
 * The addNumbers function performs addition between two values.
 * If both values are numbers, it returns their sum as a number.
 * If one or both values are strings, it concatenates them as strings.
 */

addNumbers(1, 2) // 3
addNumbers(1, "2") // '12'
addNumbers("1", 2) // '12'
addNumbers(1, "abc") // '1abc'
addNumbers("def", "abc") // 'defabc'

function subtractNumbers(a, b) {
	return a - b
}

/*
 * The subtractNumbers function performs subtraction between two values.
 * If both values are numbers or can be converted to numbers, it returns their difference as a number.
 * If one or both values cannot be converted to numbers, it returns NaN (Not-a-Number).
 */

subtractNumbers(1, 2) // -1
subtractNumbers(1, "2") // -1
subtractNumbers("3", 2) // 1
subtractNumbers(1, "abc") // NaN (because "abc" cannot be converted to a number)
subtractNumbers("def", "abc") // NaN (because neither "def" nor "abc" can be converted to numbers)

function looselyCompareNumbers(a, b) {
	return a == b // performs type coercion
}

/*
 * The looselyCompareNumbers function compares two values using the == operator.
 * The == operator performs type coercion if the values have different types.
 * It returns true if the values are equal after type coercion, otherwise false.
 */

looselyCompareNumbers(1, 1) // true
looselyCompareNumbers(1, "1") // true
looselyCompareNumbers(1, true) // true (because true is coerced to 1)
looselyCompareNumbers(0, false) // true (because false is coerced to 0)
looselyCompareNumbers(null, undefined) // true (because both null and undefined are coerced to false)

function strictlyCompareNumbers(a, b) {
	return a === b // does not perform type coercion
}

/*
 * The strictlyCompareNumbers function compares two values using the === operator.
 * The === operator does not perform type coercion and returns true only if the values have the same type and value.
 * It returns false if the values have different types or different values.
 */

strictlyCompareNumbers(1, 1) // true
strictlyCompareNumbers(1, "1") // false
strictlyCompareNumbers(1, true) // false
strictlyCompareNumbers(0, false) // false
strictlyCompareNumbers(null, undefined) // false

/*
 * In JavaScript, the + operator is overloaded to perform addition for numbers and concatenation for strings.
 * The - operator always attempts to convert its operands to numbers before performing subtraction.
 * The == operator performs type coercion when comparing values of different types, which can lead to unexpected results.
 * The === operator does not perform type coercion and provides a stricter equality comparison based on both value and type.
 */
