//1

var name = "Vasya";
function getData(age) {
    return {
        name: name,
        age: age
    };
}
var newData = getData(20);
var newDataElse = getData();
console.log(newData, newDataElse); // { name: 'Vasya', age: 20 } { name: 'Vasya', age: undefined }

//2

function canGoToManGym(name1, age1, gender) {
    if (!name1) {
        console.log("Please pass your name to function");
    }

    if (!age1) {
        console.log("Please pass your age to function");
    }

    if (!gender) {
        console.log("Please pass your gender to function");
    }

    var normalAge = age1 > 90;  // false
    var isMan = gender === "man";  // false/true
    return normalAge && isMan;
}
console.log(canGoToManGym("Lily", 24, "woman")); // false
console.log(canGoToManGym("Vasya", 30, "man")); // false

//3

function getName( name2 ) {
    name2 = name2 || "Default name";
    return name2;
}
console.log(getName("Lily")); // Lily
console.log(getName()); // Default name