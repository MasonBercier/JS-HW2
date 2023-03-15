//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let food in person3){
    console.log(person3[food])
    if(food == 'shakes'){
        for(flavors in person3['shakes']){
            console.log(person3[flavors])
        }
    }
};


//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
// Use an arrow to create the printInfo method
    printInfo = () => (`Wow, ${this.name} is ${this.age} and they just keeps getting older`);
    addAge = () => (this.age += 3);


// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
};

const joe = new Person ('joe momma', 63);
const ben = new Person ('ben dover', 42);
console.log(ben.printInfo());
console.log(joe.printInfo());
joe.addAge()
console.log(joe.printInfo());

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const stringLength = async () => {
    try{
        if(string.stringLength() > 10){
            console.log('Big Word')
        }
        else {
            console.log('Small Word')
        }
    }
    catch (error){
        console.log(error)
    }
}

stringLength('Okie dokie alci we keep it low key like Thor lil bro')


// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// var min = function(list){
//     list.sort(function(a, b){
//         return a - b
//     })
//     return list[0];
// }

// var max = function(list){
//     list.sort(function(a, b){
//         return a - b
//     })
//     list.reverse()
//     return list[0];
// }


// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// function abbrevName(name){
  
//     const arr = name.split(" ");
//     return arr[0][0].toUpperCase() + '.' + arr[1][0].toUpperCase()

// }
