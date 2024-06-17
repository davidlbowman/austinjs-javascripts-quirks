function processValue(value) {
	if (typeof value === "undefined") {
		console.log("Value is undefined")
	} else if (typeof value === "string") {
		console.log("Value is a string:", value)
	} else if (typeof value === "number") {
		console.log("Value is a number:", value)
	} else if (typeof value === "boolean") {
		console.log("Value is a boolean:", value)
	} else {
		console.log("Value is an object or other type:", value)
	}
}

processValue() // Output: 'Value is undefined'
processValue("hello") // Output: 'Value is a string: hello'
processValue(42) // Output: 'Value is a number: 42'
processValue(true) // Output: 'Value is a boolean: true'
processValue(null) // Output: 'Value is an object or other type: null'
processValue({}) // Output: 'Value is an object or other type: [object Object]'

/*
 * The typeof operator can be used to check the type of a value
 * before performing operations or making decisions based on its type.
 *
 * However, it's important to be aware of the quirks related to null and
 * NaN values when using typeof.
 *
 * In general, it's recommended to use strict equality or inequality
 * operators when checking for null values, and the isNaN() function or
 * value !== value comparison when checking for NaN values.
 */
