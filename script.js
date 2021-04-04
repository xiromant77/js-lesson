
"use strict";





// Урок 10. Условия





// if (num < 49) {
//     console.log ('Error');
// }
//     else if (num > 100) {
//         console.log("To much");
//     }
//     else {
//         console.log("Ok");
//     }
//  (num === 50) ? console.log("Ok!") : console.log('Error!');

//  const num = 49;

//  switch(num) {
//      case 49:
//          console.log("Wrong");
//          break;
//     case 100:
//          console.log("Wrong");
//          break;
//     case 50:
//          console.log("YES");
//          break;      
//     default:
//         console.log("Not in this time");
//         break;         
//  }

//Урок 7. Git 

// Працюючи з файлом - 

//  git add -A - добавити весь файл для вигрузки
// git push original main  - вигрузити файли в репозиторій в папку (main)
// git status -  перевірка змін в файлах
// git commit -a -m"Назва комміта" - 

// Если вы хотите клонировать ветку master, то напечатайте git clone и вставьте ссылку, как это показано ниже:

// git clone https://github.com/JamesOkunlade/old-apple.git

// Для клонирования определенной ветки репозитория сделайте следующее:

// git clone https://github.com/JamesOkunlade/old-apple.git -b branch-name

// Если ветка уже создана:

// git checkout branch-name

// Если вы создаете новую ветку опций:

// git checkout -b branch-name

// git add -A  Захват текущего состояния файлов

// Сообщение в коммите должно пояснить специфику сохраняемых снимков. Например:

// git add index.html

// git commit -m ‘создание кнопки формы опции’

// Две команды можно объединить через оператор&&:

// git add index.html && git commit -m ‘создание html структуры футера’

// git push отправляет локальный репозиторий на сервер, доступный другим пользователям.

// git push -u origin branch-name


// Урок 6. Операторы в JS

// let incr = 10,
//     decr = 10;

//     // ++incr;
//     // --decr;

// console.log (incr++);
// console.log(decr--);

// const isChecked = true,
//       isClosed = true;  

// console.log(isChecked && !isClosed);

// console.log( 2 + 2 * 2 === 8);






//////////////////////////////////////////////////////////////

// Урок 5. Интерполяция (ES6)

// const category = 'toys';

// console.log(`http://example.com/${category}`/5);

// const user = "Ivan";

// alert(`Hello, ${user}`);



//////////////////////////////////////////////////////////////

 // урок 4. Простое общение с пользователем

 // alert ("hello");

 // const result = confirm("Are you here ?");

 // console.log(result);

 //const answer = +prompt("Вам есть 18?", "18")
 //console.log(answer + 5);

//  const answers = [];

//  answers[0] = prompt('Как ваше имя?', '');
//  answers[1] = prompt('Как ваша фамилия?', '');
//  answers[2] = prompt('Сколько вам лет?', '');

//  console.log(typeof(answers));



//////////////////////////////////////////////////////////////




// Урок 3 - лассификация типов данных в JavaScript


// let number = 4.6;

// console.log(4/0);

// const person = "Alex";

// const bool = false;


// const object = {
//     name:"John",
//     age: 25,
//     isMarried: false
// }

// console.log(object["name"]);

// let arr = ["pum.png", "orange.jpg", 6, "apple,bmp", {}, []]
// console.log(arr[2]);




// Урок 2 - перемінні
// let number = 5;
// const leftBorderWidth = 1;


// let numbER = 10;
// console.log (number);
// console.log (numbER);