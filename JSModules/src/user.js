
/**
 * This JavaScript File contains the user class and exports data to other files
 */

 //one way to export
/*
class User{
     constructor(name, age){
         this.name = name;
         this.age = age;
     }
}

function printName(user){
     console.log(`User name is: ${user.name}`);
}

function printAge(user){
    console.log(`User is ${user.age} years old`);
}

export default User
export{printName, printAge}
*/

// simpler way to export
export default class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

export function printName(user){
    console.log(`User name is: ${user.name}`);
}

export function printAge(user){
   console.log(`User is ${user.age} years old`);
}
