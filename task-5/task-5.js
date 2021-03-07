'use strict'
console.log('/////////////////////5///////////////////////')
let countryPrice;
let countryName = (prompt('Введіть назву країни в яку хочете відправити товар: ')).toLowerCase();
console.log(countryName);

switch(countryName){

   case 'китай':
      countryPrice = 100;
      console.log('Доставка в', countryName, 'буде коштувати', countryPrice, 'кредитів');
      break
   case 'чилі':
      countryPrice = 250;
      console.log('Доставка в', countryName, 'буде коштувати', countryPrice, 'кредитів');
      break
   
   case 'австралія':
      countryPrice = 170;
      console.log('Доставка в', countryName, 'буде коштувати', countryPrice, 'кредитів');
      break

   case 'індія':
      countryPrice = 80;
      console.log('Доставка в', countryName, 'буде коштувати', countryPrice, 'кредитів');
      break

   case 'ямайка':
      countryPrice = 120;
      console.log('Доставка в', countryName, 'буде коштувати', countryPrice, 'кредитів');
      break

   default:
      alert('У вашій країні доставка недоступна');
}