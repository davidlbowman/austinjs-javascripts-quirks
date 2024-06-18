functionExpression() // Throws a ReferenceError: Cannot access 'functionExpression' before initialization
functionDeclaration() // Output: "This is a function declaration."
arrowFunction() // Throws a ReferenceError: Cannot access 'arrowFunction' before initialization

// Function Declaration (hoisted)
function functionDeclaration() {
	console.log("This is a function declaration.")
}

// Function Expression (not hoisted)
const functionExpression = function () {
	console.log("This is a function expression.")
}

// Arrow Function (not hoisted)
const arrowFunction = () => {
	console.log("This is an arrow function.")
}

/*
 * In JavaScript, function declarations are hoisted to the top of their scope
 * (global or function scope), while function expressions and arrow functions
 * are not hoisted.
 *
 * Function declarations are hoisted entirely, meaning both the function name
 * and the function body are moved to the top of the scope during the
 * compilation phase.
 *
 * Function expressions and arrow functions are treated like variable
 * assignments, so they follow the same hoisting rules as variable declarations.
 * Only the variable name is hoisted, but its value (the function) is not
 * assigned until the code execution reaches that line.
 *
 * This behavior can lead to unexpected results if you try to call a function
 * expression or an arrow function before it is defined.
 *
 * It is generally recommended to declare functions at the top of their scope
 * or to use function expressions or arrow functions assigned to variables
 * declared at the top of their scope to avoid confusion and potential issues
 * related to hoisting.
 */
