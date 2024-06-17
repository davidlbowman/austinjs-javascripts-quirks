function arrayCoercion<T>(a: T[], b: T): T[] {
	return a.concat(b)
}

/*
 * In TypeScript, the arrayCoercion function uses a generic type parameter <T>
 * to ensure that the array and the value being concatenated have the same type.
 * The concat() method is used to concatenate the value to the array, returning a new array.
 */

arrayCoercion([1, 2, 3], 4) // [1, 2, 3, 4]
arrayCoercion([1, 2, 3], "4") // TypeScript error: Argument of type 'string' is not assignable to parameter of type 'number'.

/*
 * If the array is empty, the concat() method will return a new array with the value added to it.
 */

arrayCoercion([], 5) // [5]
arrayCoercion([], "hello") // ['hello']

/*
 * The generic type parameter <T> ensures type safety by enforcing that the array elements and the value have the same type.
 * Attempting to concatenate a value of a different type will result in a TypeScript error.
 */

arrayCoercion(["a", "b", "c"], "d") // ['a', 'b', 'c', 'd']
arrayCoercion(["a", "b", "c"], 4) // TypeScript error: Argument of type 'number' is not assignable to parameter of type 'string'.

/*
 * The arrayCoercion function works with arrays of any type, including arrays of objects.
 */

arrayCoercion([{ x: 1 }, { x: 2 }], { x: 3 }) // [{ x: 1 }, { x: 2 }, { x: 3 }]

/*
 * If the value being concatenated is of a different type than the array elements, a TypeScript error will be raised.
 */

arrayCoercion([true, false], "hello") // TypeScript error: Argument of type 'string' is not assignable to parameter of type 'boolean'.
arrayCoercion([1, 2, 3], { x: 4 }) // TypeScript error: Argument of type '{ x: number; }' is not assignable to parameter of type 'number'.
