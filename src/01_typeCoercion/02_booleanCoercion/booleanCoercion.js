function booleanCoercion(a, b) {
	return a && b
}

/*
 * In JavaScript, the && operator performs boolean coercion on the first operand.
 * If the first operand is truthy, it returns the second operand.
 * If the first operand is falsy, it returns the first operand.
 */

booleanCoercion(true, "hello") // 'hello'
booleanCoercion(false, "hello") // false

/*
 * The following values are considered falsy in JavaScript:
 * - false
 * - 0
 * - null
 * - undefined
 * - NaN
 * - "" (empty string)
 *
 * All other values, including objects and arrays, are considered truthy.
 */

booleanCoercion(1, "hello") // 'hello'
booleanCoercion(0, "hello") // 0
booleanCoercion(null, "hello") // null
booleanCoercion(undefined, "hello") // undefined
booleanCoercion(Number.NaN, "hello") // NaN
booleanCoercion("", "hello") // ''
booleanCoercion([], "hello") // 'hello'
booleanCoercion({}, "hello") // 'hello'
