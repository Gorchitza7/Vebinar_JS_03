let myNum = 15
let myString = 'symbols'
let myBool = true

const myArray = [1, 'adf', true, [1.44, 'sdf sdf sdf']] // вложенный массив

const myObj = {
	key: 'string',
	num: 3.14,
	bool: false,
	arr: ['qwe', 234, true],
	obj: {
		name: 'John',
		age: 25
	},
}

// console.log(myNum);
// console.log(myString);
// console.log(myBool);
// console.log(myArray[3][0]);
// console.log(myObj);

console.log('myObj', myObj);
console.log('myObj[num]', myObj['num']);
console.log('myObj.num', myObj.num);