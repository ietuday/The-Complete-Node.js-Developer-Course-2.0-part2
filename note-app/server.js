console.log('Starting Server.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

var res = notes.addNote();
debugger;
console.log(res);

console.log('Result : ',notes.add(9,-2));


// var user = os.userInfo();

// fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}.`,(err) =>{
//     if(err){
//         console.log('Unable to write');
//         return;
//     }
// });
