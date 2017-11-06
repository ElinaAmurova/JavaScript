//1

var a=0;
if (a===0){
    console.log ('Верно!');
} else {
    console.log ('Неверно!');
}
// ?? Проверьте работу скрипта при a, равном 1, 0, -3.

//2

var b ='test';
if (b === 'test') {
    console.log('Верно!');
} else {
    console.log('Неверно!');
}

// ?? Проверьте работу скрипта при a, равном 'test', 'тест', 3.

//3 (1)

var test =true;
if (test === true) {
    console.log('Верно!');
} else {
    console.log('Неверно!');
}
//3 (2)
var test1 = true;
(test1===true) ? (console.log('Верно!')) : (console.log ('Неверно!'));

//4
var a1=2, a2=5;
var result = a1+a2;
if (result > 5) {
    result = 5;
} else {
    result *= 10;
}
console.log(result);

// ?? Проверьте работу скрипта при a и b, равных 2 и 5, 3 и 1.

//5

var c =-3;
if ((c === 0) || (c === 2)) {
    c /= 10;
} else {
    c += 7;
}
console.log(c);

// ?? Проверьте работу скрипта при a, равном 5, 0, -3, 2.

//6

var
    d1 = 1,
    d2 = 3;
if ((d1 <= 1) && (d2>=3)){
    var sum = d1+d2;
    console.log(sum);
} else {
    console.log('Неверно!');
}

// ?? Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.


//7

var
    c1 = 3,
    c2 = 4;
if (((c1 > 2) && (c1 < 11)) || ((c2 >= 6) && (c2 < 14))){
    c1 += 2;
} else {
    c1 += 5;
}
console.log(c1);

//8

var num = 4;

switch (num) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Весна');
        break;
    case 3:
        console.log('Лето');
        break;
    case 4:
        console.log('Осень');
        break;
}

//9

//через switch-case
var lang = 'en';
switch (lang) {
    case 'ru':
        var arr = ['Понедельник', 'Вторник', '...'];
        break;
    case 'en':
        var arr = ['Monday', 'Tuesday', '...'];
        break;
    case 'de':
        var arr = ['Montag', 'Dienstag', '...'];
        break;
}
console.log(arr);

//через if
var lang1 = 'de';
if (lang1 === 'ru'){
    var arr1 = ['Понедельник', 'Вторник', '...'];
} else if (lang1 === 'en'){
    var arr1 = ['Monday', 'Tuesday', '...'];
} else if (lang1 === 'de') {
    var arr1 = ['Montag', 'Dienstag', '...'];
}
console.log(arr1);


//через многомерный массив
var lang123 = 'ru';
var arr123 = [
    ['Понедельник', 'Вторник', '...'],
    ['Monday', 'Tuesday', '...'],
    ['Montag', 'Dienstag', '...']
];
if (lang123 === 'ru'){
    console.log(arr123[0]);
} else if (lang123 === 'en'){
    console.log(arr123[1]);
} else if (lang123 === 'de') {
    console.log(arr123[2]);
}


