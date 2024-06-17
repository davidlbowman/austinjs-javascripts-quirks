function arrayCoercion(a, b) {
	return a + b
}

/*
 * In JavaScript, when the + operator is used with an array and another value,
 * the array is coerced to a string by joining its elements with commas.
 * The resulting string is then concatenated with the other value.
 */

arrayCoercion([1, 2, 3], 4) // '1,2,34'
arrayCoercion([1, 2, 3], "hello") // '1,2,3hello'

/*
 * If the array is empty, it is coerced to an empty string.
 */

arrayCoercion([], 4) // '4'
arrayCoercion([], "hello") // 'hello'

/*
 * If the other value is also an array, both arrays are coerced to strings
 * and then concatenated.
 */

arrayCoercion([1, 2], [3, 4]) // '1,23,4'
arrayCoercion(["a", "b"], ["c", "d"]) // 'a,bc,d'

/*
 * The behavior is the same regardless of the data types of the elements inside the array.
 */

arrayCoercion([true, false], "hello") // 'true,falsehello'
arrayCoercion([null, undefined], "hello") // ',hello'
arrayCoercion([{ x: 1 }, { y: 2 }], "hello") // '[object Object],[object Object]hello'

/*
 * If the other value is not a string or a number, it is coerced to a string using its toString() method.
 */

arrayCoercion([1, 2, 3], true) // '1,2,3true'
arrayCoercion([1, 2, 3], false) // '1,2,3false'
arrayCoercion([1, 2, 3], null) // '1,2,3null'
arrayCoercion([1, 2, 3], undefined) // '1,2,3undefined'
arrayCoercion([1, 2, 3], { x: 1 }) // '1,2,3[object Object]'
