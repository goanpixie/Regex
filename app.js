'use strict'

const output = (string, regex, target)=>{
target.innerHTML =
string.replace(regex, string=>`<span>${string}</span>`);
}

var string= "Is this This his"
// var regex = new RegExp("it")
var regex = /is/gi

output(string, regex, document.querySelector('pre'))
// console.log(regex.exec(string));
// console.log(string.match(regex))
// console.log(string.search(regex))
// console.log(string.replace(regex, str=>"EE"))




