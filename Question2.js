//In how many ways can we loop in an array describe each with an example ?

  // Answer:   6 different ways to loop through an array in JavaScript (with examples)



//   1. for loop
//   2. while loop
//   3. do while 
//   4. Map
//   5. for each 
//   6. of loop


//  // 1. for Loop
// The basic for loop has the following syntax:

// for (initialization; condition; update statement) {
//     // code block to be executed
// }
// Example of using for loop:

var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13},
    {id: 4, name: 'Katie', age: 17},
    {id: 5, name: 'Louis', age: 11}
];

for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i].name);
}



// 2. for/of Loop
// The for/of loop has the following syntax:

// for (variable of iterator) {
//     // code block to be executed
// }

// Example of using for/of loop


var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13},
    {id: 4, name: 'Katie', age: 17},
    {id: 5, name: 'Louis', age: 11}
];

for (let profile of myArray) {
    console.log(profile.name)
}



// 3. while Loop
// The basic while loop has the following syntax:

// while (condition) {
//     // code block to be executed
// }

// Example of using while loop



var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13},
    {id: 4, name: 'Katie', age: 17},
    {id: 5, name: 'Louis', age: 11}
];

var i = 0;
while(i < myArray.length) {
    console.log(myArray[i].name)
    i++
}


// 4. do/while Loop


// exapmle prograam
var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13},
    {id: 4, name: 'Katie', age: 17},
    {id: 5, name: 'Louis', age: 11}
];

var i = 0;
do {
    console.log(myArray[i].name)
    i++
} while(i < myArray.length)


//by using this approach we can also example other method like Map(), etc.