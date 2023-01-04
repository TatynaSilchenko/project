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



// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). 
// Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

function calculateVolumeAndArea(a) {
    if (isNaN(a) || typeof (a) == 'string' || a < 0 || !Number.isInteger(a)) {
        return 'При вычислении произошла ошибка';
    }
    let volume = a * a * a;
    let area = 6 * a * a;

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;

}

// console.log(calculateVolumeAndArea(5));
// console.log(calculateVolumeAndArea(15));
// console.log(calculateVolumeAndArea(15.5));
// console.log(calculateVolumeAndArea('15'));
// console.log(calculateVolumeAndArea(-15));

// 2) 
// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. 

// Место для второй задачи
function getCoupeNumber(placeNumber) {

    if (!Number.isInteger(placeNumber) || isNaN(placeNumber) || typeof (placeNumber) == 'string' || placeNumber < 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (placeNumber < 1 || placeNumber > 36) {
        return "Таких мест в вагоне не существует"
    }
    let number = placeNumber % 4;
    let floor = Math.floor(placeNumber / 4);
    if (!number) {
        return floor;
    } else {
        return floor + 1;
    }
}

// console.log(getCoupeNumber(33));
// console.log(getCoupeNumber(7));
// console.log(getCoupeNumber(300));
// console.log(getCoupeNumber(0));
// console.log(getCoupeNumber(7.7));
// console.log(getCoupeNumber(-10));
// console.log(getCoupeNumber('Hello'));

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). 
// Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
// Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"


// Место для первой задачи
function getTimeFromMinutes(minutes) {
    if (!Number.isInteger(minutes) || isNaN(minutes) || typeof (minutes) !== 'number' || minutes < 0) {
        return "Ошибка, проверьте данные";
    }

    let hours = Math.floor(minutes / 60);
    let hoursWord = hours % 10 == 1 ? `час`
        : (hours % 10 == 2 || hours % 10 == 3 || hours % 10 == 4)
            ? `часа`
            : `часов`;
    let newMinutes = minutes % 60;

    return `Это ${hours} ${hoursWord} и ${newMinutes} минут`

}

// console.log(getTimeFromMinutes(150));
// console.log(getTimeFromMinutes(50));
// console.log(getTimeFromMinutes(0));
// console.log(getTimeFromMinutes(-150));

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них.
// Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Место для второй задачи
function findMaxNumber() {
    if (arguments.length < 4) {
        return 0;
    }
    let maxNumber = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i]) || typeof (arguments[i]) !== 'number') return 0;
        if (arguments[i] > maxNumber) {
            maxNumber = arguments[i];
        }

    }
    return maxNumber;
}

// console.log(findMaxNumber(1, 5, 6.6, 11));
// console.log(findMaxNumber(1, 5, '6', '10'));



// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. 
// Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

// Пример:

// fib(4) => ''0 1 1 2"

// fib(7) => ''0 1 1 2 3 5 8"

function fib(count) {
    let fibStr = '';
    let first = 0;
    let second = 1;

    if (!Number.isInteger(count) || isNaN(count) || typeof (count) !== 'number' || count < 0) {
        return "";
    }

    for (let i = 0; i < count; i++) {

        switch (i) {
            case 0: {
                fibStr = first + ' ';
                break;
            }
            case 1: {
                fibStr += second + ' ';
                break;
            }
            default: {
                let sum = first + second;
                fibStr += sum + ' ';
                first = second;
                second = sum;
                break;
            }

        }
    }
    return fibStr.trim();
}
// console.log (fib(7));

// Задачи:

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно

// 2)  Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

function showExperience(plan) {
    let { exp } = plan.skills
    return exp
}

function showProgrammingLangs(plan) {
    let { programmingLangs } = plan.skills;
    let result = '';

    let languageArr = Object.keys(programmingLangs);
    languageArr && languageArr.forEach((el) => {
        result += `Язык ${el} изучен на ${programmingLangs[el]}\n`
    })
    return result;
}

const personalPlanPeter = {
    name: "Peter",
    age: "30",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs(plan) {
        let {languages} = plan.skills;
        return `Мне ${plan.age} и я владею языками: ${languages.join(' ').toUpperCase()}`
    }
};


// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter))
// console.log(showExperience(personalPlanPeter))
// console.log(showProgrammingLangs(personalPlanPeter))