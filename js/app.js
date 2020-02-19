'use strict';

var score = 0;

var userName = prompt('whats your name?');
alert('welcome ' + userName);
confirm('I will ask you som question about me please answer it yes/y or no/n');
me();
friends();
favourit();
function me(){
var know = prompt('I am studded a computer engineering?');
console.log(know);

switch (know.toLowerCase()) {
case 'yes':
case 'y':
  score = score + 1;
  alert('your answer is true');
  break;
case 'no':
case 'n':
  alert('your answer is false');
  break;
default:
  alert('wrong answer');

}

var study = prompt('I am studded at university of jordan?');
console.log(study);

switch (study.toLowerCase()) {
case 'yes':
case 'y':
  score = score + 1;
  alert('your answer is true');
  break;
case 'no':
case 'n':
  alert('your answer is false');
  break;

default:
  alert('wrong answer');

}

var age = prompt('I am 23 years old?');
console.log(age);

switch (age.toLowerCase()) {
case 'yes':
case 'y':
  score = score + 1;
  alert('your answer is true');
  break;
case 'no':
case 'n':
  alert('your answer is false');
  break;
default:
  alert('wrong answer');


}
var sleep = prompt('l love sleeping?');
console.log(sleep);

switch (sleep.toLowerCase()) {
case 'yes':
case 'y':
  score = score + 1;
  alert('your answer is true');
  break;
case 'no':
case 'n':
  alert('your answer is false');
  break;
default:
  alert('wrong answer');


}

var mum = prompt('my mum call me narmena?');
console.log(mum);

switch (mum.toLowerCase()) {
case 'yes':
case 'y':
  score = score + 1;
  alert('your answer is true');
  break;
case 'no':
case 'n':
  alert('your answer is false');
  break;
default:
  alert('wrong answer');
}
}




function friends (){
for (var i = 0; i < 4; i++) {
  var meet = prompt('How many tiems a week did i meet my friends?');
  console.log(meet);
  if (meet == 2) {
    alert('Yes, i meet them 2 times ber week ');
    score = score + 1;

    break;

  }
  else if (meet > 2) {
    alert('too high ');

  }
  else if (meet < 2) {
    alert('too low ');

  }
}
}


function favourit(){
for (var i2 = 0; i2 < 6; i2++) {
  var arry = ['red', 'black', 'green', 'yallow', 'blue', 'brown'];
  var color = prompt('choose my favourit color ');
  console.log(color);

  if (color==arry[0] ||color==arry[1] || color==arry[2] ||color==arry[3] || color==arry[4] ||color==arry[5]) {
    alert('Yes, this is my favourit color ');
    score = score + 1;
    break;

  } else 
  {
    alert('Nooo, this is not my favourit color ');


  }

}
alert('my favourit colors :red, black, green, yallow, blue and brown');
}
alert('your score is ' + score);
document.write('welcome ' + name + 'your score ' + score);

