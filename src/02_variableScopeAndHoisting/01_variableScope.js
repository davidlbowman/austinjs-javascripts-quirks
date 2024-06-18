function functionScopeVar() {
	if (true) {
		var x = 5
	}
	console.log(x) // Output: 5
}

/*
 * The functionScopeVar function demonstrates the function scope of
 * variables declared with var.
 *
 * Even though x is declared inside an if block, it is still accessible
 * within the entire function.
 *
 * This is because var variables are function-scoped.
 */

functionScopeVar() // Output: 5

function blockScopeLet() {
	if (true) {
		const y = 10
	}
	console.log(y) // ReferenceError: y is not defined
}

/*
 * The blockScopeLet function demonstrates the block scope of
 * variables declared with let.
 *
 * The variable y is only accessible within the if block and is not
 * available outside of it.
 *
 * Attempting to access y outside the block results in a ReferenceError.
 *
 * This is because let variables are block-scoped.
 */

blockScopeLet() // Throws a ReferenceError

function blockScopeConst() {
	if (true) {
		const z = 15
	}
	console.log(z) // ReferenceError: z is not defined
}

/*
 * The blockScopeConst function demonstrates the block scope of
 * variables declared with const.
 *
 * Similar to let, the variable z is only accessible within the if block
 * and is not available outside of it.
 *
 * Attempting to access z outside the block results in a ReferenceError.
 *
 * This is because const variables are also block-scoped.
 */

blockScopeConst() // Throws a ReferenceError
