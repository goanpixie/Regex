'use strict'

const output = (string, regex, target)=>{
target.innerHTML =
string.replace(regex, string=>`<span>${string}</span>`);
}

var string= `12/1/16 
12-16-13
11/12/16
12-12-1216`
// var regex = new RegExp("it")
var regex = /^12.+16$/gm

console.log(regex.exec(string))

output(string, regex, document.querySelector('pre'))
// console.log(regex.exec(string));
// console.log(string.match(regex))
// console.log(string.search(regex))
// console.log(string.replace(regex, str=>"EE"))




