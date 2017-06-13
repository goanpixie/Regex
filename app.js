'use strict'

const output = (string, regex, target)=>{
target.innerHTML =
string.replace(regex, string=>`<span>${string}</span>`);
}

var string= `it was the the thing`
// var regex = new RegExp("it")
var regex = /(the)\s?(?=\1)/g

console.log(string.replace(regex, ''))

output(string, regex, document.querySelector('pre'))
// console.log(regex.exec(string));
// console.log(string.match(regex))
// console.log(string.search(regex))
// console.log(string.replace(regex, str=>"EE"))




