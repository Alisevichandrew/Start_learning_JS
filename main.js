// 1. Connecting in browser console
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/
// enter in console
// console.log('My first example on JS!')

// 2. Variables
// let userName = 'Andrew';
// console.log(userName);
// 2.1 Type of variables
// let - может менять значение во время работы
/*let userName = 'Andrew';
console.log(userName);
userName = 'Vadim';
console.log(userName);

// const - константа
const yearofbirth = 1980;
yearofbirth = 2000; // ошибка !
*/
/*
{
    let userName = "Andrew";
    console.log(userName);
    }
    
    console.log(userName);
    */
   
// 2.2 string
//    let userName = "Andrew";
//    число
// let age = 30;
// console.log(age);

// логический
// let isContent = true; //логическое значение

// // динамическая типизация
// let someVariable = 'Some value'; //строка
// someVariable = 50; // сейчас тип number
// someVariable = true; // сейчас тип boolean

// значение null
// let age = 32;
// age = null;
// console.log(age);

// значение undefined
// let userName;
// locsole.log(userName);

// let someName = 'James';
// someName = undefined; //так не делают
// someName = null; // делают так

// оператор typeof - позволяет определить тип переменной

// const someName = 44;
// console.log(typeof someName);

// BigInt - позволяет создавать большие числа
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(7894163132654687867213213); //7.894163132654688e+24
// console.log(7894163132654687867213213n); //дописываем 'n' в конце
 
// 3. Операторы сравнения и условия
/*
// >, <, >= , <=
// == 
== нестрогое сравнение
=== строгое сравнение
!= нестрогое равенство
!== строгое неравенство

*/

/*
console.log(10 > 5); // true
console.log(20 > 80); // false

let result = 10 !== 5;
console.log(result); //true
*/

/*
console.log('5' == 5); //true (сравнивает значение)
console.log('5' === 5); //false (сравнивает значение и типы)

console.log('10' = 10); //Uncaught SyntaxError
*/

// Условие
/*
if (условие) {
// код, к-рый будет выполняться, если условие верно
} else {
//  код, к-рый будет выполняться, если условие не верно
}
*/

/*const time =16;
if (time < 12) {
    console.log('Доброе утро');
    } else {
        console.log('Добрый день')
    }
*/

/*const time = 20;

if (time < 12) {
    console.log('Доброе утро');
    } else if (
        time >= 12 && time < 18
    ) {
        console.log('Добрый день');
    } else {
        console.log('Добрый вечер')
    }
        */

/*
логические операторы
&& логичесое и
|| логическое или
!true логичесое НЕ
*/

/* 4. Тернарный оператор

*/
/*if (10 < 12) {
    console.log('Условие верно');
} else { 
    console.log('Условие не верно');
}
    */
// запишем условие сверху с помощью тернарного оператора
// (условие) ? (условие верно) : (условие не верно);
// 100 < 12 ? console.log("Условие верно") : console.log("Условие не верно");

// ещё на if else
/*let greeting;
let time = 10;
 if (time < 12) {
    greeting = 'Доброе утро';
 } else {greeting = 'Добрый день';

 }
 console.log(greeting);
*/
// Сделаем это на тернарном рператоре
/*let time = 20;
let greeting = time < 12 ? 'Good morning' : 'Good afternoon';
console.log(greeting);
*/

// 5. Конкатенация строк и шаблонные строки
/*let greeting = 'Hi, Andrew!';
let howAreYou = ' What are your doing ?';

let sayHi = greeting + howAreYou;
console.log(sayHi);
*/
/*
// конкатенация строка + строка
const userName = 'Andrew';
// console.log('Hi,' + userName + '! How are you ?'); так не делают
// шаблонные строки и интерполяция
console.log(`Hi, ${userName}! How are you?`);
*/

// Функции
// DRY - don't repeat yourself
// console.log('Hi, dear user !');
// например, нам нужно заменить 'dear' на 'very dear' 
/*
function sayHi() {
    console.log('Hi, very dear user !');
};

sayHi(); //запускаем функцию
sayHi(); 
sayHi(); 
sayHi(); 
sayHi(); 
*/
// объявление ф-кции
// function declaration
/*function sayHi() {
    alert('Hi !');
}
sayHi();
*/
// function expression
/*const sayHi = function() {
    console.log('Hi, Andrew !');
}
sayHi();
*/

// 6.1 Параметры (описываем ф-кцию) и аргументы (вызываем) для функции

/*const userName = 'Andrew';
console.log(`Hi, ${ userName}! What are your doing ?`);
*/
/*
function sayHi(name) {
    
    console.log(`Hi, ${ name }! What are your doing ?`);
}

sayHi('Andrew');
sayHi('Inga');
sayHi('Lida');
*/

// Return (ф-ция возвращает значение)
 
/*
function summ(a, b) {
    const result = a +b;
    return result;
}
let res = summ(10, 15);
console.log(res);
*/
// Функция как аргумент
/*function summ(a, b) {
    return a + b;
}
console.log(summ(10, 15));
*/

/*
function summ(a, b) {
    return a + b;
}
console.log(summ(10, 15));
const result = summ(summ(15, 15), summ(20, 20));
console.log(result);
*/

/*
function summ(a, b) {
    return a + b;
};

function diff(a, b) {
    return a - b;
};


function doSonething(func) {
    let result = func(10, 15);
    console.log(result);
};

doSonething(summ); // 25 call back function
doSonething(diff); // -5 call back function
*/

// 6.4 самовызывающаяся ф-кция IIFE
/*
immedetly
involve
function expression
*/
/*
(function() {
console.log('Hi, dear user !');
})() // Hi, dear user !
 */
// функцию оборачиваем в круглые скобки и в конце ставим также 
// круглые скобки - вызываем ф-кцию

// ещё пример
/*
(function summ(a, b) {
    console.log(a);
    console.log(b);
    console.log(a + b);
})(10, 15);
*/
/*
let res = (function (a, b) {
    return a + b;
})(10, 15);

console.log(res);
*/

// 6.5 Стрелочные ф-кции
// это function expression
// const sayHi = function (name) {
//     console.log(`Hi, ${ name } ! How are you ?`);
// }
// sayHi('Andrew');
// как это выглядит в стрелочной ф-кции
// 1-ый вариант
// const arrowSayHi = (name) => {
//     console.log(`Hi, ${ name } ! How are you ?`);
// }
// arrowSayHi('Andrew');

// 2-ой вариант
/*const arrowSayHi = (name) => console.log(`Hi, ${ name } ! How are you ?`);

arrowSayHi('Andrew');
*/

// ещё пример
/*
function summ(a, b) {
 const result = a + b;    
}
 */

// теперь, в виде стрелочной ф-кции
/*
const summ = (a, b) => {
 return a + b;
};
*/
// сокращенный вариант
/*
const summ = (a, b) => a + b;
const res = summ(15, 10);
console.log(res);
*/

// 7. Массивы
// массив - структура (коллекция) данных
/*
const autoBrand1 = 'Audi';

const autoBrand2 = 'BMW';

const autoBrand3 = 'Mazda';

const autoBrand4 = 'Toyota';

const autoBrands = ['Audi', 5,  'BMW', true, ['Mazda', 'Toyota'], 70]; 
// массив может содержать любую структуру
// console.log(autoBrands);
// console.log(autoBrands[3]);

// console.log(autoBrands.length); // длина массива, к-во элементов
*/
// 7.1 Методы массивов
/*
arr.push(items)  - добавить элемент в конце масива
arr.pop() - удалить э-т из конца массива
arr.shift()  - удалить э-т из начала массива
arr.unshift(...items) - добавить э-т в начало массива
arr.splice([start], [deleteCount, newElements])
*/

/*
const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota']; 
console.log(autoBrands);

autoBrands.push('Nissan');
console.log(autoBrands);
/*
// let array2 = autoBrands;
autoBrands.splice(2, 1);
console.log(autoBrands); // ['Audi', 'BMW', 'Toyota', 'Nissan']
*/
/*
autoBrands.splice(2, 2);
console.log(autoBrands); // ['Audi', 'BMW', 'Nissan']
*/

// 8.Циклы

/*
console.log('Start');

for(let i = 0; i < 10; i = i + 2) { //i++ это увеличивается на '1'
    console.log(i);
};

console.log('Finish');
*/

// 9. Обход массива циклом for

/*
const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota', 'Nissan']; 
console.log(autoBrands[0]); //выводим каждый элемент по отдельности
console.log(autoBrands[1]);
console.log(autoBrands[2]);
console.log(autoBrands[3]);
console.log(autoBrands[4]);
*/

// запишем это в цикле
/*
const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota', 'Nissan']; 

for (i = 0; i < autoBrands.length; i++) {
    
console.log(autoBrands[i]);

}
*/

// 9. Обход массива циклом for (of)
/*
const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota', 'Nissan']; 

for (let item of autoBrands) {
    
    console.log(item);
    
}
    */

// 10. Обход массива циклом forEach
/*
const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota', 'Nissan']; 

autoBrands.forEach(function(item, index) {

    console.log(`${item} => ${index}`);

});
*/
//тоже самое, только опишем функцию рядом
/*
const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota', 'Nissan']; 

autoBrands.forEach(printAutoBrand);

function printAutoBrand (brand, index) {
    console.log(`${brand} => ${index}`);
    }
    */
   // и, в виде стрелочной функции
   /*
   const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota', 'Nissan']; 

   autoBrands.forEach((brand, index) => {

       console.log(`${brand} => ${index}`);
       
});
*/

// 12.Объекты
// свойства объектов

// let userName = 'Andrew';
// let age = '30';
// let isEmployed = false;
// создадим объект
/*
const person = {
    userName: 'Andrew',
    age: 30,
    isEmployed: false,
    profession: 'WorkShop'
}

// как обратиться к свойствам объекта ?
console.log(person);
console.log(person.userName);
console.log(person['age']);

let propertyName = 'profession';
console.log(person[propertyName]);
// можно добавить свойство объекту
person.educated = true;
console.log(person);
// можно удалить свойство объекта
delete person.age;
console.log(person);
*/

// 13.Методы в объектах
/*
const person = {
    userName: 'Andrew',
    age: 30,
    isEmployed: false,
    profession: 'WorkShop',
    // ниже, добавим функцию, к-рая 
    // принадлежит свойствам объекта и является его методом (объекта)
    sayHi: function (name) {
        console.log(`Hi, ${name}!`);
    }
};
person.sayHi('Andrew');
*/

// 14.Ключевое слово this
/*
const person = {
    userName: 'Andrew',
    age: 30,
    isEmployed: false,
    profession: 'WorkShop',
    // ниже, добавим функцию, к-рая 
    // принадлежит свойствам объекта и является его методом (объекта)
    sayHi: function (name) {
        console.log(this);
        console.log(`Hi, ${name}! My name is ${this.userName}`);
    }
};
person.sayHi('Andrew');
*/

// 15. Объекты. Обход циклом for in
/*
const person = {
    userName: 'Andrew',
    age: 30,
    isEmployed: false,
        sayHi: function () {
        console.log(`Hi, ${this.userName}! My name is ${this.userName}`);
    }
};

for (let key in person) {
    console.log(key, ':', person[key]);
}
    */

// 16.Нюанс const и изменением объекта и массива
/*
const person = {
    userName: 'Andrew',
    age: 30,
    isDeveloper: false,
};
// можем добавлять значения в объект
person.proff = 'Designer';
console.log(person);
// НО, не можем перенаправлять const на другой объект
person = {
    userName: 'Mark', // main.js:547 Uncaught TypeError: Assignment to constant variable
}
*/

// 17.Классы. Конструкторы объектов
// Нам надо описать несколько одинаковых объектов
/*const person1 = {
    userName: 'Andrew',
    age: 30,
    isDeveloper: false,
    sayHi: function () {
        console.log(`Hi, ${yourName} ! My name is ${userName}.`);
    },
};

const person2 = {
    userName: 'Pavel',
    age: 28,
    isDeveloper: true,
    sayHi: function () {
        console.log(`Hi, ${yourName} ! My name is ${userName}.`);
    },
};
*/

// Опишем класс
// передаём при помощи ключевого слова this в поля описания объекта
// опишем конструктор
/*
class Person {
    constructor (userName, age, isDeveloper) {
        this.userName = userName;
        this.age = age;
        this.isDeveloper = isDeveloper;

    };

    sayHi(name) {

        console.log(`Hi, ${name} ! My name is ${this.userName}.`);
};

};

// создадим объект person1
const person1 = new Person('Andrew', 30, false) ;

const person2 = new Person('Mark', 28, true) ;

console.log(person1);

person1.sayHi('Yuri');

person2.sayHi('Yuri');
*/


// Выбор DOM элементов

// Выбор одного элемента DOM по селектору

// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

// document.querySelector('selector');
// const header = document.querySelector('h2').classList.add('red');
// можно записать и так
/*
const heading2 = document.querySelector('h2');
heading2.classList.add('red'); //увидим красную рамку

document.querySelector('.heading-3').classList.add('green');
*/

/*
// Выбор КОЛЛЕКЦИИ ЭЛЕМЕНТОВ по DOM селектору
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
const headings = document.querySelectorAll('h2');
console.log(headings);

// покрасить все заголовки второго уровня в красный цвет
for (let item of headings) {

    item.classList.add('red-text');
}

// покрасим абзац в зелёный цвет
const paragraphs = document.querySelectorAll('p');

// for (let p of paragraphs) {

//      p.classList.add('green-text');
// }

paragraphs.forEach(function (item) {
    item.classList.add('green-text');
});


//Также, есть следующие методы
document.getElementsByClassName('link'); //выбор коллекции 
// элементов по CSS классу
document.getElementsByTagName('h2'); // выбор коллекции элементов по тегу

const tag = document.getElementsByTagName('p'); // выбор коллекции элеметнтов по тегу
console.log(tag);

document.getElementById('header'); // выбор одного элемента по ID

*/

// Работа с CSS классами

/*
element.claccList.add()
.add
.remove()
.toggle() //тумблер - смотрим в консоли: если класс добавил - true
если удалил - false
.contains - возвращает true или false в зависимости от того
есть ли такой класс у э-та или нет
*/

/*
const heading = document.querySelector('h2');

// console.log(heading);

// // добавим класс
// heading.classList.add('red-text');
// // удадение класса
// heading.classList.remove('red-text');

// метод 'toggle' добавляет либо убирает класс в зависимости от 
// того, есть он у элемента или нет
// heading.classList.toggle('green-text');

// heading.classList.toggle('green');
heading.classList.contains('green'); //запускаем в консоли
// true
*/

// Работа с атрибутами
// работа с изображениями
/*
const img = document.querySelector('#logo'); // нашли картинку html элемента по id
const srcValue = img.getAttribute('src');
console.log(srcValue);

img.setAttribute('src', './img/js.png');
// поменяем значение элемента атрибута
img.setAttribute('src', './img/php.png'); //видим в консоли логтип php
// поменяем размер логотипа, чтобы было без скролла
img.setAttribute('width', '200'); // видим уменьшение логитипа (без скролла)
// можем прописать новое значение
img.src = './img/js.png'; //вернули прежнее значение
*/

// поменяем атрибуты кнопки
/*
const button = document.querySelector('#button');
button.setAttribute('value', 'отправить')
// или
button.value = 'Текст для кнопки';
*/

// Работа с прослушкой событий
// найдём кнопку
/*
const button = document.querySelector('#button');
// найдем логотип
const img = document.querySelector('#logo');

// сделаем так, чтобы при нажатии на кнопку картинка удалилась
button.value = 'Удалить';
/*
// начинаем работать с событиями
button.addEventListener('click', function() {
    console.log('Click!');
    img.remove();
}) 
// обновим страницу, что изображение появилось снова
*/

// ещё это можно записать и таким образом
// (удаление картинки)
/*
button.onclick = function() {
    console.log('Click');
    img.remove();
}
*/
// добавим прослушку по кликам
/*
button.addEventListener('click', function() {
    console.log('Click 1');
    img.remove();
}) 

button.addEventListener('click', function() {
    console.log('Click 2');
    img.remove();
}) 

button.addEventListener('click', function() {
    console.log('Click 3');
    img.remove();
}) 
*/
// Работа с прослушкой событий (ввод текста в блок)

// const inputText = document.querySelector('#input-text');
// const textBlock = document.querySelector('#text-block');
/*
inputText.addEventListener('input', function() {
    // console.log('input');
    console.log(inputText.value);
    textBlock.innerText = inputText.value;
});
*/

// то же самое, в виде стрелочной функции
/*inputText.addEventListener('input', () => {
    // console.log('input');
    console.log(inputText.value);
    textBlock.innerText = inputText.value;
    });
    */
//    запишем с Handler
/*
   inputText.addEventListener('input', inputHandler);
       
    function inputHandler() {

    console.log(inputText.value);

    textBlock.innerText = inputText.value;

   };
*/
//  Объект event
// найдем объект по id list (this ссылается на list)
/*
const list = document.querySelector('#list');

list.addEventListener ('click', function (event) {
    console.log(this); //ссылается на тот элемент, у к-рого мы слушаем EventListener 
    console.log(event); //говорит о произошедшем событии
    console.log(event.target); //ссылается на тот элемент, к-рый спровоцировал событие
})
*/
// Работа с элементами
// выбор контейнера
/*const container = document.querySelector('#elementsContainer');

// создание заголовка
const newHeader = document.createElement('h1');
// дополним заголовок содержимым
newHeader.innerText = 'Новый заголовок';

container.append(newHeader); //передали на страницу браузера в консоли

// клонирование элементов на примере копирования шапки
// шапка на ходится внутри тэга <header>
/*
const mainHeader = document.querySelector('header');
const headerCopy = mainHeader.cloneNode(true); // копирование с внуренним содержимым 
// указали true
container.append(headerCopy); 
//вверху скопировали эл-т без внутреннего содержимого.
// это если не указано 'true'
*/

// вставка разметки через строки
/*const htmlExample = '<h2>Ещё один заголовок</h2>';
container.insertAdjacentHTML('beforeend', htmlExample); 
// в скобках куда вставляем и что вставляем
// таким образом, увидим в консоли на странице браузера 
// Ещё один заголовок
*/
/*
// вставка разметки через шаблонные строки
const title = 'Текст этого заголовка';

const htmlExample = `<h2>${title}</h2>`;

container.insertAdjacentHTML('beforeend', htmlExample);
*/

// ======================= ToDo список задач ============================
/*
//  находим элементы:
const todoList = document.querySelector('#todo-list'); //можно распечатать в консоли todoList

const todoForm = document.querySelector('#todo-form');

const todoInput = document.querySelector('#todo-input');
// вешаем события submit

todoForm.addEventListener('submit', formHandler );

function formHandler(event) {
        event.preventDefault();
    // получаем название задачи из поля ввода (инпута)
    const taskText = todoInput.value;
   */

    /*
    // создаём тэг Li через разметку
    const li = `<li>${taskText}</li>`;
    console.log(li); //создалась строка, к-рая будет добавлена потом в разметку
    // добавляем разметку на страницу
    todoList.insertAdjacentHTML('beforeend', li);
    */
/*
    // создаём тэг Li с помощью создания элемента
    const newTask = document.createElement('li');
    newTask.innerText = taskText;
    
    
    // создаём кнопку удалить
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'Удалить';
    // добавим стиль кнопки в 15-ть пикселей
    deleteBtn.style['margin-left'] = '15px';
    // 'margin-left' - название свойства
    newTask.append(deleteBtn);
    
    // повесим событие на кнопку "Удалить"
    deleteBtn.addEventListener('click', function () { 
        this.closest('li').remove()
    });
        // console.log(this); 
        // this ссылается на элемент, у к-рого слушаем событие
        // то есть на delleteBtn
        // далее, удалим задачу


    // добавялем элемент на страницу
    todoList.append(newTask);

    // очищаем поле ввода автоматически перед добавлением новой задачи 
    todoInput.value = '';
    // перенесём фокус на поле ввода после нажания на кнопку
    todoInput.focus();

};
*/

// ================== setInterval =================================
// позволяет запускать код через определённый промежуток времени постоянно
/*
const timeIntervalId = setInterval(function () {
    console.log('Learning');
    }, 1000);  //через каждую 1000 мили секунд
    // как остановить работу setInterval 
    clearInterval(timeIntervalId);
    */
   
// ================== setTimeout =================================
// выполняет код через определеённый таймер и останавливается
/*const timerId = setTimeout(function () {
    console.log('Learning');
    }, 2000);
clearInterval(timerId);// отменили код и он дальше не будет срабатывать
*/

// ========== Объединим setInterval и setTimeout =====================
/*
const timerId = setInterval(() => {
    console.log('learning');
}, 1000);

setTimeout(() => {
    clearInterval(timerId)
}, 10000);
*/
// ============================ секундомер ==========================
// создаём счётчик

/*
const counterElement = document.querySelector('#counter');
let counter = 0;
let timerID;


// start
const btnStart = document.querySelector('#start');
btnStart.onclick = function () {
        console.log('btnstart');
        timerID = setInterval(function() {
        // counter = counter + 1; //либо
        // counter += 1; //либо
            counter++; //либо
    
        // console.log(counter); //вывод в консоль можно удалить
        counterElement.innerText = counter;
    }, 1000);
    console.log('timerID', timerID);
}

// Пауза
const btnPause = document.querySelector('#pause');
btnPause.onclick = function () {
    console.log('btnpause');
    clearInterval(timerID);
}

// сброс
const btnReset = document.querySelector('#reset');
btnReset.onclick = function () {
    counter = 0;
    counterElement.innerText = counter;
    clearInterval(timerID);
};
*/

// ========================== асинхронность программирования ===========
// ========================== Callback =================================
/*
setTimeout(function () {
    console.log('Step 1');
    setTimeout(function () {
        console.log('Step 2');
        setTimeout(function () {
            console.log('Step 3');
        }, 1000);
    }, 1500);   
}, 2000);
*/
// Проверяем наличие билетов на автобус

// едем на рыбалку
// рыбалка отменяется

/*function checkTickets() {
    setTimeout(function() {
        console.log('Проверяем наличие билетов на автобус');
        const availableTickets = false;
        
        if (availableTickets) {
            console.log('Билеты есть');
            console.log('Едем на рыбалку');

        } 
        
        else {
            console.log('Билетов нет');
            console.log('Не едем на рыбалку');
        }

    }, 1000);
    
}

checkTickets();*/
// ==============================================================
// Ещё вариант записи
// call back Hell (не удобно смотреть на код)
/*
function checkTickets(success, failed) {
    setTimeout(function() {
        console.log('Проверяем наличие билетов на автобус');
        const availableTickets = true;

        if (availableTickets) {
            let message = 'Билеты есть';
            success(message);
        }

        else {
            let message = 'Билетов нет';
            failed(message)
        }

    }, 1000)
}

// ф-кция по проверке погоды
function checkWeather(message, success, failed) {
    setTimeout(function() {
        console.log('---function checkWeather---');
        console.log('Ответ на предыдущем шаге:', message);
        console.log('Проверяем погоду...');
        const availableTickets = true;

        if (availableTickets) {
            let message = 'Билеты есть';
            success(message);
        } else {
            let message = 'Билетов нет';
            failed(message);
        }
    }, 500)
}

function cancelFishing(message) {
    console.log('---cancelFishing---');
    console.log('Ответ на предыдущем шаге:', message);
    console.log('Рыбалка отменяется');
};

function submitFishing(message) {
    console.log('---submitFishing---');
    console.log('Ответ на предыдущем шаге:', message);
    console.log('Едем на рыбалку');
};

checkTickets(function(messageFromCheckTickets) {
    checkWeather(messageFromCheckTickets, 
        function(messageFromCheckTickets) {
        submitFishing(messageFromCheckTickets)
    }, 
        function(messageFromCheckTickets) {
            cancelFishing(messageFromCheckTickets)

        })
}, 
    function(messageFromCheckTickets) {
        cancelFishing(messageFromCheckTickets)
    });
*/

// ==================== Создание промиса =========================
/*позволяет избежать call back Hell
промисы позволяют обернуть асинхронный код,
выполнение которого нужно подождать 
и после него выполнять следующие действия
*/ 
/*
const myPromise = new Promise(function(resolve, reject) {
    console.log('Promise created');
    setTimeout(function() {
        // -- запрос на сервер и получили ответ, записали в 'response'
        const response = true;

        if (response) {
            let message = 'success'
            resolve(message);
        } else {
            let message = 'failed'
            reject(message);
        }
    }, 1500);
});

myPromise.then(function(data) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('Then 1');
            console.log(data);

            const response = false;
            if (response) {
                resolve('Data from then 1');
            } else {
                reject('Data from then 1')
            }
        }, 1000)
        
    })

}).then(function(data) {



    setTimeout(() => {
        console.log('Then 2');
        console.log(data);
    },500)
}).catch(function(data) {
    console.log('Catch');
    console.log(data);
});
*/

// =============================== Цепочка промисов. Несколько 
// промисов с setTime out =====================================
/*
const checkRooms = new Promise(function(resolve, reject) {
// для эмуляции запроса
    setTimeout(function() {
        console.log('Проверяем номера в отеле...');
        const availableRooms = true;
        console.log(availableRooms);

        if (availableRooms) {
            resolve('Номера есть !');
        } else {
            reject('Номеров нет.');
        };

    }, 1500);
});

checkRooms.then(function(data) {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        console.log('======= then 1 ======= '); // отработал then 1
        console.log('Ответ на предыдущем шаге', data);
        console.log('Проверяем авиабилеты...');
        const availableTickets = true;

        if (availableTickets) {
            let message = 'Билеты есть';
            resolve(message);
        } else {
            let message = 'Билетов нет';
            reject (message);             
        }

      }, 1000);
    });

}).then(function(data) {
    console.log('--- then 2 ---');
    console.log('Ответ на предыдущем шаге', data);
    console.log('Едем в отпуск');
}).catch(function (data) {
    console.log('=== catch === ');
    console.log('Ответ на предыдущем шаге:', data);
    console.log('Отпуск отменяется');
});
*/

// ===== Цепочка промисов. Отдельные функции. Несколько промисов с 
// setTimeout
/*
checkRooms()
    .then(checkTickets)
    .then(success)
    .catch(failed);

function checkRooms() {
    return new Promise(function(resolve, reject) {
        
            setTimeout(function() {
                console.log('Проверяем номера в отеле...');
                const availableRooms = false;
                console.log(availableRooms);
        
                if (availableRooms) {
                    resolve('Номера есть !');
                } else {
                    reject('Номеров нет.');
                };
        
            }, 1500);
        });
    }

    function checkTickets(data) {
        
        return new Promise(function(resolve, reject) {
          setTimeout(() => {
            console.log('======= then 1 ======= '); // отработал then 1
            console.log('Ответ на предыдущем шаге', data);
            console.log('Проверяем авиабилеты...');
            const availableTickets = true;
    
            if (availableTickets) {
                let message = 'Билеты есть';
                resolve(message);
            } else {
                let message = 'Билетов нет';
                reject (message);             
            }
    
          }, 1000);
        });
    }
    
    function success (data) {
        console.log('--- then 2 ---');
        console.log('Ответ на предыдущем шаге', data);
        console.log('Едем в отпуск');
    }

    function failed (data) {
    console.log('=== catch === ');
    console.log('Ответ на предыдущем шаге:', data);
    console.log('Отпуск отменяется');
}
*/

// == Async functions. Асинхронные функции. Потребление промиса ==
/*
function promiseFunction() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const result = false;
            if (result) {
                resolve('Done !');
            } else {
                reject('Fail !');
            }
        }, 500);
    });
}

async function startPromise() {
    try {
        const result = await promiseFunction();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

startPromise();
*/

// === Несколько апинхронных операций. Серия промисов ===
/*
function checkRooms() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            console.log('Проверяем номер в отеле...');
            // ---код, который оправляет запрос в отель ---
            let availableRooms = true;

            if (availableRooms) {
                resolve('Номера есть!');
            } else {
                reject('Номеров нет.');
            } 
        },1500);
        });
};

function checkTickets(data) {
        return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(' --- checkTickets ---');
            console.log('Ответ на предыдущем шаге:', data);
            
            console.log('Проверяем авиабилеты...');
            // код, который отправляет запрос в авиакомпанию
            const availableTickets = true;

            if (availableTickets) {
                let message = 'Билеты есть';
                resolve(message);
            } else {
                let message = 'Билетов нет';
                reject(message);
            }

        }, 1000);
    });
};

function submitVacation(data) {
    console.log('---submitVacation---');
    console.log('Ответ на предыдущем шаге:', data);    
    console.log('Едем в отпуск');    
};

function cancelVacation(data) {
    console.log('---cancelVacation---');
    console.log('Ответ на предыдущем шаге:', data);    
    console.log('Отпуск отменяется');    
};

async function checkVacation() {

    try {
        const roomsResult = await checkRooms();
        const ticketsResult = await checkTickets(roomsResult);
        submitVacation(ticketsResult)

    } catch(err) {
        cancelVacation(err)

    }
};

checkVacation();
*/

// ====== Использование промисов ======
// === Пример fetch с промисами, получение данных по API ===
// Например, актуальные курсы валют на сегодняшний день
// получать данные будем с сайта 
// https://www.cbr-xml-daily.ru/

// 1. Получить данные с сервера
// использование fetch через цепочку then

/*
const responce = fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(function(data){
        return data.json()
    }).then(function(data) {
        console.log(data);
    })
*/
// 2-ой вариант чтения данных:
// использование fetch через асинхронную функцию
async function getCurrencies () {
    // получить данные с сервера
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
    const response = await fetch (url);
    const data = await response.json();

    const usdRate = data.Valute.USD.Value.toFixed(2);
    const eurRate = data.Valute.EUR.Value.toFixed(2);
    
    // отобразить эти данные на странице
    const usdElement = document.querySelector('#usd');
    const eurElement = document.querySelector('#eur');
    
    usdElement.innerText = usdRate;
    eurElement.innerText = eurRate;

}

getCurrencies();
