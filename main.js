



// //оператор if

// if(10 > 11) {
// 	console.log('Hello world');
// } 

// else {
// 	console.log('false')
// }


// let color = 'red';

// switch (color) {
// 	case 'blue':
// 		console.log ('This is blue');
// 		break;
// 	case 'red':
// 		console.log ('This is red');
// 		break;	
// 	case 'green':
// 		console.log ('This is green');
// 		break;	
// 	default :
// 		console.log ('This is default');

// 	}	

/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/
 let city = 'Novovolynsk';
 let country = 'Ukraine';
 let people = '47'
 let stadium = true;

 console.log (city);
 console.log (country);
 console.log (people);
 console.log (stadium);




/* 
    Задание 2:
    
    Напишите скрипт, который находит площадь прямоугольника

    - высота 40см
    - ширина 70см

    ps: каждая сущность должна находиться в отдельной переменной
*/

let height = 40;
let width = 70;
let area = height * width;

console.log (area);



/* 
    Задание 3:
    
    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.

    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;

*/

	let time = 2;
    let speedOfFirst = 95;
    let speedOfSecond = 114;
    let destination = time * speedOfFirst + time * speedOfSecond;

    console.log(destination);


/* 
    Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/
	const randomNumber = Math.floor(Math.random() * 100);
	console.log (randomNumber);
	if (randomNumber < 20) {
		console.log ('randomNumber меньше 20');
	}  else if (randomNumber > 50) {
		console.log ('randomNumber больше 50');
	} else {
		console.log ('randomNumber больше 20, и меньше 50');
	}
/* 
    Задание 5:
    
    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/
	let notrandom = 1;
	console.log (notrandom);

	switch (notrandom) {
		case 5: 
			console.log ('notrandom меньше 20');
		break;
		case(notrandom > 50): 
			console.log ('notrandom больше 50');
		break;
		default:
			console.log ('notrandom больше 20, и меньше 50');
			break;
	}


 















// let number1 = 100;
// let number2 = 10;

// let result = number1 + number2;

// console.log (result);


// const firstName = 'Ivan';
// 	  lastName = 'Ivanov';

// let result2 = firstName + ' ' + lastName;

// console.log(result2);

// let fullName = `${firstName} ${lastName}`;

// console.log(fullName)

// //boolean 

// let variable1 = true;
// let variable2 = false;

// //null 

// let empty = null;

// //undefined 

// let test;

// //object 

// let user = {
// 	id:1,
// 	firstName:'Alex',
// 	age:22
// };


// //symbol 

// let sym = Symbol();
// console.log(sym) ;



// console.log(typeof number1);
// console.log(typeof user)
