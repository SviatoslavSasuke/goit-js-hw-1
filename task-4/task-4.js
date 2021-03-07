'use strict'
console.log('/////////////////////4///////////////////////')
let credits = 23580;
let pricePerDroid = 3000;
let droids = Number(prompt('Введіть кількість дроідів'));
let totalPrice;

if(droids==0 || droids==null){
   console.log('Скасовано користувачем!');
}else{
   totalPrice = Number(pricePerDroid * droids);
   if(totalPrice>credits){
      console.log('Недостатньо коштів на рахунку!');
   }else{
      console.log('Ви купили', droids, 'дроїдів, на рахунку залишилося', credits-totalPrice, 'кредитів')
   }
}