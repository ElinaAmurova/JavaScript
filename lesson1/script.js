//1
var str = 'Have a good day!';
console.log(str);

//2
var age = 25;
console.log(age);
age = undefined;
console.log(age);

//3
var info = {name:'Pedro', age:99};
console.log(info.name);
console.log(info.age);
var name = info.name;
console.log(name);
delete info.name;
console.log(name);

//4
var customArray = [3,5,7];
console.log(customArray);
//customArray = 0; - если значение массива именить на 0
customArray[0] = 0; //- если значение членов массива менять на 0
customArray[1] = 0;
customArray[2] = 0;
console.log(customArray);

//5
var student = 'Elina';
console.log(student);
student = 'Amurova ' + student;
console.log(student);

//6
var complex = [];
complex[0] = 'My name is:';
complex[1] = 7;
complex[2] = null;
complex[3] = info;
console.log(complex);

//7
var complexObj = {
	name: "Elina",
	age: 28,
	friends: ['Sasha','Nastya'],
	soc_links: {facebook: 'Elina_facebook', googlePlus: 'Elina_googlePlus'}
	
}
var template = `My name is ${complexObj.name}. I am ${complexObj.age} years old.
I have a lot of friends, but the best one is: ${complexObj.friends}.
You can find me on facebook: ${complexObj.soc_links.facebook}
or on goole groups: ${complexObj.soc_links.googlePlus}`

console.log (template);