'use strict'
console.log('/////////////////////3///////////////////////')
const ADMIN_PASSWORD = 'admin.hack';
let message;
 message = prompt('Введіть пароль: ');

 if(message==null){
   console.log('Скасовано користувачем!');
 }
 if(message=='admin.hack'){
    console.log('Ласкаво просимо!');
 }else{
   console.log('Доступ заборонений, невірний пароль!');
 }
 alert(message);
