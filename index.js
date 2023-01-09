const myObject = require('./information');
const cowsay = require("cowsay")
console.log(cowsay.say({
    text: "hello i'm " + myObject.name + " from " + myObject.campus + " campus."
}));