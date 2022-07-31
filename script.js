////q1
// const cat = {
// 	color: 'blue',
// 	name: 'lucky',
// 	sayMewo: function () {
// 		console.log('miauuuu');
// 	},
// };
// const cat2 = {
// 	Series: 'Predators',
// 	Subspecies: 'the domestic cat',
// 	Family: 'Feline',
// };

//q2
// const obj = () => {
// 	let prop = prompt('enter new property');
// 	let val = prompt('enter value for the proprty');
// 	cat[prop] = val;
// 	console.log(cat);
// };
// obj();

////q3
// const catF = (obj, name) => {
// 	if (obj.name === name) {
// 		return true;
// 	} else return false;
// };
// console.log(catF(cat, 'mizti'));

////q4
// const bigCat = (cat1, cat2) => {
// 	const newCat = {};
// 	for (const prop in cat1) {
// 		newCat[prop] = cat1[prop];
// 	}
// 	for (const prop in cat2) {
// 		newCat[prop] = cat2[prop];
// 	}
// 	console.log(newCat);
// };
// bigCat(cat, cat2);

////q5
// const cat3 = { name: 'cat3' };
// const cat4 = { name: 'cat4' };
// const cat5 = { name: 'cat5' };
// const cat6 = { name: 'cat6' };
// const cat7 = { name: 'cat7' };
// const colorEye = (obj) => {
// 	for (let prop in obj) {
// 		obj[prop].eye = prompt('enter color eye for the cat');
// 	}
// 	console.log(obj);
// };
// colorEye({ cat3, cat4, cat5, cat6, cat7 });

////q6
// const catF = () => {
// 	debugger;
// 	const obj = {};
// 	for (let i = 0; i < 3; i++) {
// 		let j = `cat${i}`;
// 		console.log(j);
// 		obj[j] = { name: prompt('enter name for the cat') };
// 	}
// 	let name = prompt('enter name for the cat');
// 	for (let i = 0; i < 3; i++) {
// 		if (obj.name === name) {
// 		}
// 		if (obj['cat' + i].name === name) {
// 			console.log(true);
// 		} else return false;
// 	}
// 	console.log(catF());
// };
// catF();

//15.1
// const arr = (num) => {
// 	let newArr = [];
// 	for (let i = 0; i < num; i++) {
// 		newArr[i] = i;
// 	}
// 	return newArr;
// };
// console.log(arr(5));

// //15.2
// const doubled = (arr) => {
// 	debugger;
// 	let newArr = [];
// 	let j = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		newArr[j] = arr[i];
// 		newArr[j + 1] = arr[i];
// 		j += 2;
// 	}
// 	return newArr;
// };
// console.log(doubled([3, 'a', 'aba']));

////15.3
// const revers = (arr) => {
// 	debugger;
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		newArr[i] = arr[arr.length - i - 1];
// 	}
// 	return newArr;
// };
// console.log(revers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

////15.4
// const follow = (num) => {
// 	let newArr = [];
// 	for (let i = 0; i < 10; i++) {
// 		newArr[i] = num + i;
// 	}
// 	return newArr;
// };
// console.log(follow(5));

////15.4
// const dogs = () => {
// 	let newArr = [];
// 	for (let i = 0; i < 3; i++) {
// 		let colorEye = prompt('enter color eye');
// 		let age = prompt('enter age');
// 		let Weight = prompt('enter Weight');
// 		newArr[i] = { colorEye, age, Weight };
// 	}
// 	return newArr;
// };
// console.log(dogs());
