'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
}



const { border, bg } = options.colors;
// console.log(border, bg);

// console.log(options.name);
// delete options.name;
// console.log(options);

let counter = 0;

function countElementsObject(obj) {
    for (let key in obj) {
        if (typeof (obj[key]) !== 'object') return counter++;
        countElementsObject(obj[key])
    }

}

// console.log(countElementsObject(options))

// for (let key in options) {
//     counter++;

//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`)
//     }

// }

// console.log(Object.keys(options).length)

// console.log('counter', counter)

//*
//**
//***
//****
//*****
//******

//array
//  for (let i = 1; i < 7; i++) {
//     let a = [];
//     for (let j = 0; j < i ; j ++) {
        
//         a = [...a, '*']
//     }
//     console.log(a)
//  }

 //string
//  let result = '';
//  let length = 7; 
//  for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i ; j ++) {
        
//         result += '*';
//     }
//     result += '\n'
//  }

//  console.log(result)


//При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// for ( let i = 5; i <= 10; i++) {
//     console.log(i);
// }

//При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
// for ( let i = 20; i >= 10; i--) {
//     if (i === 13) break;
//     console.log(i);
// }

//При помощи цикла for выведите чётные числа от 2 до 10 включительно
// for ( let i = 2; i <= 10; i++) {
//  if (i % 2 === 0) {
//     console.log(i);
//  }  
// }

//Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;

// while (i < 16) {

//         if (i % 2 === 0) {
//             i++;
//         continue;

//     } else {
//         console.log(i);
//     }
//     // console.log(i);
//     i++;
// }   

// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }

//Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
// let a = [];
// for (let i = 5; i <= 10; i++) {
//  a = [...a, i];
// }
// console.log(a);

//Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.

// // Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
// console.log(result);   // Пишем решение вот тут
    
    
//     // Не трогаем
//     return result;
// }

// firstTask();

//Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
//Для определения типа данных используйте typeof();
//Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]


// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

// const result1 = [];

// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     } else {
//         data[i] = data[i]*2;
//     }
// }
// console.log(data);    // Пишем решение вот тут
    
    
//     // Не трогаем
//     return data;
// }

// secondTask();

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 0; i < data.length; i++) {
        
//         result[i] = data[data.length -1 -i];
//     }
// console.log(result);  // Пишем решение вот тут
    
    
//     // Не трогаем
//     return result;
// }

// thirdTask();


// Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// const lines = 5;
// let result = '';

// function christmasTreeTask() {
//     for (let i = 0; i <= lines; i++){

//         for (let k = 0; k < lines - i; k++) {
//             result +=' ' ;
//         }

//         for (let j = 0; j < i*2 + 1; j++) {
//             result +='*' 
//         }

         
//         result += '\n'
//     }
// return result;
// }


// christmasTreeTask();

// const lines = 5;

// let countStars = 11;
// function christmasTreeTask() {
   
//     for (let i = 0; i <= lines; i++){
//         let result = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
//         let countStarsInRow = i*2 + 1;
//         let position = lines - i;
//         for (let j = 0; j < countStarsInRow; j++) {
           
//             result[position] ='*';
//             position++;
//         }
        
//         console.log(result)
//     }
    
// }


// Место для первой задачи ) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
function sayHello(name) {
return `Привет, ${name}!`
}

// console.log(sayHello('Ira'));

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

// Место для второй задачи
function returnNeighboringNumbers(number) {
 return [number - 1, number, number + 1];
}

// console.log(returnNeighboringNumbers(5));

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа.
//  Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже).
// Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". 
// После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Место для третьей задачи
// function getMathResult(a,b) {
//     let result = '';
//     if (typeof(b) !== 'number' || b <=0) {
//         return a;
//     }
//     for (let i = 1; i <= b; i++) {
//         let currentNumber = a*i;
//          result = i === b ? result + currentNumber : result  + currentNumber + '---';
//     }
//     return result;
// }

// console.log( getMathResult(5, 3));
// console.log( getMathResult(3, 10));
// console.log( getMathResult(10, 5));
// console.log(  getMathResult(20, -5));
// console.log(  getMathResult(20, -5));
// console.log(  getMathResult(20, -5));