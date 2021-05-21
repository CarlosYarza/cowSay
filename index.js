const myInfo = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hi! my name is ${myInfo.name}, from ${myInfo.campus}`,
    e : "xX",
    T : "U"
}));
