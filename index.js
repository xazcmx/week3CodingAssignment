//1a
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

let func1;
function arrayLength() {
   func1 = ages.length - 1;
}

arrayLength();
console.log(ages[func1] - ages[0]);

//1b
ages.push(59);

arrayLength();
console.log(ages[func1] - ages[0]);

//1c
let total = 0;
let average;
for (let i = 0; i < ages.length; i++){
    total += ages[i];
}
average = total / ages.length;
console.log(average);

//2a
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let totalNames = 0;
let namesAverage;
for (i = 0; i < names.length; i++) {
    totalNames += names[i].length;
}
namesAverage = totalNames / names.length;

   console.log(namesAverage);

//2b
let namesPrint = "";
for (i = 0; i < names.length; i++) {
   namesPrint += names[i] + " ";
}

console.log(namesPrint);
 
//3 
/*
 acessing the last element of an array is done by
 subtracting 1 from the array length = array.length - 1;
 */

 //4
 /*
 to access the first element of an array you always refer to 
 0, because of the 0 based indexing sytstem javascript uses
 = names[0];
 */

 //5
 let nameLengths = [];

 for (i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
 }

 //6
 let sumNameLengths = 0;
 for (i = 0; i < nameLengths.length; i++) {
 sumNameLengths += nameLengths[i];
 }
 console.log(sumNameLengths);

 //7
 function newFunc(word, n) {
     let x = "";
     for (i =0; i < n; i++){
        x += word; }
    return x; 
 }
 //console.log(newFunc("Hello", 3));

 //8
 function createFullName(firstName, lastName) {
    return firstName + " " + lastName;
 }
 //console.log(createFullName("Jada", "Pinket-Smith"));

 //9
 function isAbove100(array) {
     let x = 0;
    for (i = 0; i < array.length; i++){
        x += array[i];
    }
    return x > 100;
 }
 //console.log(isAbove100(ages));

 //10
 function averageOfArray(array) {
    let x = 0;
for (i = 0; i < array.length; i ++) {
    x += array[i];
}
    return x / array.length;
 }
//console.log(averageOfArray(ages));

//11

let testArray = [5, 6, 8, 9];
function biggerAverage(array1, array2) {
    let x = 0;
    let y = 0;
    for (i = 0; i < array1.length; i ++) {
        x += array1[i];
    }
    for (i = 0; i < array2.length; i ++) {
        y += array2[i];
    }
    return x / array1.length > y / array2.length;    
}
console.log(biggerAverage(ages, testArray));

//12
function willBuyDrink(isHotOutside, moneyInPocket) {
   if (isHotOutside === true && moneyInPocket > 10.5) {
       return true;
   } else { 
       return false;
   }
   
}
//console.log(willBuyDrink(true, 16));

//13
function willWaterPlants(wateredYesterday, temperature) {
    if (wateredYesterday === "Yes"){
        return "Not Today";
    } else if (wateredYesterday === "No" && temperature > 80) {
        return "Water Today";
    } else (wateredYesterday === "No" && temperature < 80); {
        return "Not Today";
    }
}
//console.log(willWaterPlants("No", 85));

/* My function determines whether or not I should water my plants.
If I watered them yesterday, no mater the temperature, I don't
need to water them. If I didn't water yesterday, and it was over 
85, I will need to water them. If I didn't water them yesterday, 
but it was under 85 I don't need to water them today.

This is a bit of a simplistic way of looking at a watering
schedule, that ignores the nuances of gardening, but I could
spend weeks trying to write that out as a function, haha!
*/