/**
 * Напишите функцию, которая принимает список строк и печатает их, по одной на cтроку, в прямоугольной рамке. Например, список ['Hello', 'World', 'In', 'a', 'frame'] печатается как:
	*********
	* Hello *
	* World *
	* in    *
	* a     *
	* frame *
	*********

 */

const words = ['Hello', 'World', 'in', 'a', 'frame']

function frame(arg) {
	let output = ''

	let longest = 0

	// 1. создаем список с помощью for of.
	// 2. цикл со сравнением чтобы узнать какое слово самое длинное
	for (const el of arg) {
		// console.log(el.length);
		if (el.length > longest) {
			longest = el.length
		}
	}

	let border = ''
	for (let i = 0; i < longest + 4; i++) {
		border += '*'
	}
	output += border
	output += '\n'

	let spaces = ''

	for (const el of arg) {
		for (let i = 0; i < longest - el.length; i++) spaces += ' '
		output += `* ${el}${spaces} *\n`
		spaces = ''
	}

	output += border
	return output
}

let result = frame(words)

console.log(result)
