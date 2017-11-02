//1

function getName (){
    var name = prompt('Ведите имя', );
    alert ('Hello, ' + name);
}
getName();

//2

function double(x) {
    x *= 2;
    console.log(x);
}
double(6);

//3

var sum = 0;
function range(x, y) {
    for (var i = x; i<=y; i++){
        sum = sum + i;
    }
    console.log (sum);
}
range(1,3);

//4

var sum1 = 0;
function getPrimesSumBelow() {
    nextPrime: for (var j = 2; j<10; j++){
         for (var k = 2; k<j; k++) {
             if (j % k === 0) continue nextPrime;
         }
         sum1 = sum1 + j;
    }
    console.log (sum1);
}
getPrimesSumBelow(10); // 2 + 3 + 5 + 7 = 17

//5

function getNumber (a){
    if (a%2===0){
       var b = false;
    } else {
        b = true;
    }
    console.log (b);
}
getNumber (5);

//6

function range1 (x1, y1) {
    for (var p = x1; p <= y1; p++) {
        if (p % 2 !== 0) {
            console.log(p);
        }
    }
}
range1 (5, 10);

//7

function onlyNine () {
    do {
        var k = prompt('Ведите число');
    } while (k !== '9');
}
onlyNine();