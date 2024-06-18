/*
 * In JavaScript, it is possible to modify the prototypes of built-in objects
 * like Array or Object.
 *
 * In this example, we add a custom method 'myCustomMethod' to the Array
 * prototype.
 *
 * While this demonstrates the ability to modify built-in prototypes, it is not
 * recommended unless you have a specific and well-justified reason to do so.
 */

// Modifying the prototype of a built-in object (not recommended)
Array.prototype.myCustomMethod = () => {
	console.log("This is a custom method added to the Array prototype.")
}

const myArray = [1, 2, 3]
myArray.myCustomMethod() // Output: 'This is a custom method added to the Array prototype.'

/*
 * Modifying the prototypes of built-in objects like Array, Object, or String
 * is generally not recommended for several reasons:
 *
 * Unexpected Behavior: When you modify the prototype of a built-in object, you
 * are essentially changing the behavior of that object for the entire
 * codebase. This can lead to unexpected behavior and bugs, especially if other
 * parts of your code or third-party libraries rely on the original behavior of
 * the built-in object.
 *
 * Naming Conflicts: If you add a custom method or property to a built-in
 * prototype, there is a risk of naming conflicts. If a future version of
 * JavaScript introduces a method or property with the same name, or if another
 * library you use defines a method with the same name, it can lead to
 * conflicts and cause your code to break or behave unexpectedly.
 *
 * Maintenance and Debugging: When you modify built-in prototypes, it can make
 * your code harder to maintain and debug. Other developers working on the
 * codebase may not expect the modified behavior and may struggle to understand
 * the custom methods or properties added to the prototypes. It can also make
 * it more challenging to track down bugs related to the modified behavior.
 *
 * Compatibility Issues: Modifying built-in prototypes can cause compatibility
 * issues, especially if your code is intended to run in different environments
 * or browsers. Different JavaScript engines may have different implementations
 * of built-in objects, and modifying the prototypes can lead to inconsistent
 * behavior across different platforms.
 *
 * Violation of Encapsulation: Built-in objects in JavaScript are designed to
 * encapsulate certain functionality and maintain a specific interface. By
 * modifying their prototypes, you are essentially breaking that encapsulation
 * and potentially violating the intended design and behavior of those objects.
 *
 * Instead of modifying built-in prototypes, it is generally recommended to:
 *
 * Use utility functions or helper methods that operate on the built-in objects
 * without modifying their prototypes.
 *
 * Create custom objects or classes that encapsulate the desired behavior and
 * functionality, rather than modifying existing built-in objects.
 *
 * Use well-established libraries or frameworks that provide additional
 * functionality through their own APIs, rather than modifying built-in
 * prototypes directly.
 */
