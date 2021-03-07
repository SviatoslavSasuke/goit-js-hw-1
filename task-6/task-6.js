'use strict'
console.log('/////////////////////6///////////////////////')
let total = 0;
let input = Number(prompt('Введіть число'));
while(input){
	total += input;
	console.log('Загальна сума чисел дорівнює ' + total);
	input = Number(prompt('Введіть число'));
};

alert('Загальна сума чисел дорівнює ' + total);
console.log('Загальна сума чисел дорівнює ' + total);