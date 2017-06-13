'use strict'

const output = (string, regex, target)=>{
target.innerHTML =
string.replace(regex, string=>`<span>${string}</span>`);
}

var string= `This island is his, it is`
// var regex = new RegExp("it")
var regex = /\bis\B/g

console.log(string.replace(regex, 'area code: $1'))

output(string, regex, document.querySelector('pre'))
// console.log(regex.exec(string));
// console.log(string.match(regex))
// console.log(string.search(regex))
// console.log(string.replace(regex, str=>"EE"))




