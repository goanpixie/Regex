'use strict'

const output = (string, regex, target)=>{
target.innerHTML =
string.replace(regex, string=>`<span>${string}</span>`);
}

var string= `800-545-0990
(555) 777-9000
4564567456`
// var regex = new RegExp("it")
var regex = /\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g

console.log(string.replace(regex, 'area code: $1'))

output(string, regex, document.querySelector('pre'))
// console.log(regex.exec(string));
// console.log(string.match(regex))
// console.log(string.search(regex))
// console.log(string.replace(regex, str=>"EE"))




