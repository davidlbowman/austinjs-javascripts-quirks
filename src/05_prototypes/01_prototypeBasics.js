// Class definition
class Person {
	constructor(name) {
		this.name = name
	}

	greet() {
		console.log(`Hello, my name is ${this.name}`)
	}
}

// Creating an instance
const john = new Person("John")
john.greet() // Output: 'Hello, my name is John'

/*
 * In JavaScript, classes provide a more straightforward and familiar syntax
 * for defining objects and their methods.
 *
 * The 'Person' class has a constructor that initializes the 'name' property,
 * and a 'greet' method that logs a greeting message.
 *
 * Instances of the 'Person' class can be created using the 'new' keyword,
 * and they will have access to the properties and methods defined in the class.
 */
