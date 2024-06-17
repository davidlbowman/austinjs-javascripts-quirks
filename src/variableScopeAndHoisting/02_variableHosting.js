function varHoisting() {
	console.log(a) // Output: undefined
	var a = 20
	console.log(a) // Output: 20
}

/*
 * The varHoisting function demonstrates the hoisting behavior of variables declared with var.
 * Even though a is used before it is declared, the code runs without an error.
 * The declaration of a is hoisted to the top of the function scope, but the initialization remains where it is.
 * This results in undefined being logged first, followed by the assigned value of 20.
 */

varHoisting() // Output: undefined, 20

function letHoisting() {
	console.log(b) // ReferenceError: Cannot access 'b' before initialization
	const b = 25
}

/*
 * The letHoisting function demonstrates that let declarations are also hoisted but are not initialized.
 * Accessing a let variable before its declaration results in a ReferenceError.
 * This is known as the "Temporal Dead Zone" (TDZ) for let variables.
 */

letHoisting() // Throws a ReferenceError

function constHoisting() {
	console.log(c) // ReferenceError: Cannot access 'c' before initialization
	const c = 30
}

/*
 * The constHoisting function demonstrates that const declarations are also hoisted but are not initialized.
 * Similar to let, accessing a const variable before its declaration results in a ReferenceError.
 * This is also due to the "Temporal Dead Zone" (TDZ) for const variables.
 */

constHoisting() // Throws a ReferenceError

/*
 * In JavaScript, variables declared with var are function-scoped and are hoisted to the top of their scope.
 * Variables declared with let and const are block-scoped and are also hoisted but are not initialized.
 * It is generally recommended to use let and const instead of var to avoid confusion related to variable scope and hoisting.
 * Declaring variables with let and const at the top of their scope improves code clarity and helps prevent accidental re-declarations or accessing variables before initialization.
 */
