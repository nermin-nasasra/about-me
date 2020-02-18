'use strict';

var userName = prompt('whats your name?');
alert('welcome ' + userName);

document.write('welcome ');
document.write(userName);

confirm('I will ask you som question about me please answer it yes/y or no/n');

var know =prompt('I am studded a computer engineering?');//.toLowerCas();
console.log(know);

switch (know.toLowerCase()) {
case 'yes':
case 'y':
  alert('your answer is true');
  break;
case 'no':
case 'n':
  alert('your answer is false');
  break;
default:
  alert('wrong answer');

}

var study =prompt('I am studded at university of jordan?');//.toLowerCase();
console.log(study);

switch (study.toLowerCase()) {
case 'yes':
case 'y':
  alert('your answer is true');
  break;
case 'no':
case 'n':
  alert('your answer is false');
  break;

default:
  alert('wrong answer');

}

var age =prompt('I am 23 years old?');//.toLowerCase();
console.log(age);

switch (age.toLowerCase()) {
case 'yes':
case 'y':
  alert('your answer is true');
  break;
case 'no':
case 'n':
  alert('your answer is false');
  break;
default:
  alert('wrong answer');


}
var sleep =prompt('l love sleeping?');//.toLowerCase();
console.log(sleep);

switch (sleep.toLowerCase()) {
case 'yes':
case 'y':
  alert('your answer is true');
  break;
case 'no':
case 'n':
  alert('your answer is false');
  break;
default:
  alert('wrong answer');


}

var mum =prompt('my mum call me narmena?');//.toLowerCase();
console.log(mum);

switch (mum.toLowerCase()) {
case 'yes':
case 'y':
  alert('your answer is true');
  break;
case 'no':
case 'n':
  alert('your answer is false');
  break;
default:
  alert('wrong answer');
}
