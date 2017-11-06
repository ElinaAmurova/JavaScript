//1


    for (var i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            console.log (i + ' is even');
        } else {
            console.log (i + ' is odd');
    }
}

//2

for (var j = 0; j <= 100; j++) {
    // значения j % 3 === 0 и j % 5 === 0 можно было сохранить в переменных и потом уже ими пользоватся
    if ((j % 3 === 0) && (j % 5 === 0))  {
        console.log (j + ' - FizzBuzz');
    } else if (j % 3 === 0){
        console.log (j + ' - Fizz');
    } else if (j % 5 === 0) {
        console.log (j + ' - Buzz');
    }
}

//3

var a = 19, b = 20;  // а всегда число меньше

for (var k = a; k >= 1; k--) {
    if ((a % k === 0) && (b % k === 0)) {
        console.log('Самый большой общий делитель: ' + k);
        break;
    }
}

//4

var m = 0;
for (var j1 = 0; j1 <= 1000; j1++) {
    if ((j1 % 3 === 0) && (j1 % 5 === 0))  {
       m += j1;
    }
}
console.log('Сумма: ' + m);

//5

for (var j2 = 10; j2 <= 90; j2++) {
    if ((j2 % 3 === 0) && (j2 % 5 === 0)) {
        console.log(j2);
    }
}

//6

for (var j3 = 70; j3 >= 11; j3--) {
    if (j3 % 2 !== 0) {
        console.log(j3);
    }
}

//7

for (var j4 = 78; j4 >= 13; j4--) {
    if ((j4 % 2 === 0) && (j4 % 3 === 0)) {
        console.log(j4);
    }
}

