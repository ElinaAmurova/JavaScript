//1

for(var a = 1; a <= 50; a ++){
  //  console.log(a);
}

//2

var arr = [1, 2, 3, 4, 5];
for(var i = 0; i <= arr.length-1; i++){
    console.log(arr[i]);
}

//3
var b = 1;
var arr1 = [2, 3, 4, 5];
for(var j = 0; j <= arr1.length-1; j++){
    b *=  arr1[j];
}
console.log(b);

//4

var obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина'
};
for (var p in obj) {
    console.log(p + ' - это ' + obj[p]);
}

//5

var n = 1000;
var num = 0;
while (n >50) {
    n = n/2;
    num++;
}
console.log('Конечное число: ' + n + '. Кол-во итераций: ' + num);

//6

var arr2 = [2, 5, 9, 15, 0, 4];
for (k = 0; k <= arr2.length-1; k++) {
    if ((arr2[k] > 3) && (arr2[k] < 10)) {
        console.log(arr2[k]);
    }
}

//7
var arrayOfMonths = [1,2,3,4,5,6,7,8,9,10,11,12];
var thisMonth = new Date().getMonth();
for (m = 0; m <= arrayOfMonths.length-1; m++) {
    if (arrayOfMonths[m] === thisMonth){
        console.log("%c" + arrayOfMonths[m], 'font-weight: bold;');
    } else {
        console.log(arrayOfMonths[m]);
    }
}




