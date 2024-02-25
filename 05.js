/**
 * Напишите функцию, которая вычисляет текущее итоговое значение списка.
 */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function runningTotal(arr) {
	let sum = 0
	// console.log('sum before FOR cycle', sum)
	for (let i = 0; i < arr.length; i++) {
		// console.log(arr[i]);
		sum = arr[i] + sum
		// console.log(sum);
	}
	return sum
}

let result = runningTotal(nums)
console.log(result)

// Пользоваться консолью чтобы проверить что происходит на разных этапах разработки.