// Modifying the prototype of a built-in object (not recommended)
Array.prototype.myCustomMethod = () => {
	console.log("This is a custom method added to the Array prototype.")
}

const myArray = [1, 2, 3]
myArray.myCustomMethod() // Output: 'This is a custom method added to the Array prototype.'

/*
 * In JavaScript, it is possible to modify the prototypes of built-in objects like Array or Object. 
 * However, this is generally considered a bad practice as it can lead to unexpected behavior
 * and make your code harder to reason about.
 *
 * In this example, we add a custom method 'myCustomMethod' to the Array prototype.
 * While this demonstrates the ability to modify built-in prototypes, it is not recommended
 * unless you have a specific and well-justified reason to do so.
 */
