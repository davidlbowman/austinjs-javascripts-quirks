// Parent class
class Animal {
	constructor(name) {
		this.name = name
	}

	speak() {
		console.log(`${this.name} makes a sound.`)
	}
}

// Child class
class Dog extends Animal {
	constructor(name) {
		super(name) // Calling the parent constructor
	}

	bark() {
		console.log(`${this.name} barks.`)
	}
}

// Creating instances
const animal = new Animal("Buddy")
const dog = new Dog("Rufus")

animal.speak() // Output: 'Buddy makes a sound.'
dog.speak() // Output: 'Rufus makes a sound.'
dog.bark() // Output: 'Rufus barks.'

/*
 * In this example, we define a parent 'Animal' class and a child 'Dog' class that extends 'Animal'.
 * The 'Dog' class inherits the properties and methods from the 'Animal' class using the 'extends' keyword.
 * The 'super' method is used in the 'Dog' constructor to call the parent constructor and initialize the 'name' property.
 * The 'Dog' class also has its own 'bark' method in addition to the inherited 'speak' method.
 * Instances of the 'Dog' class can access both the inherited 'speak' method and the class-specific 'bark' method.
 */
