'use strict';
let userName = prompt('Hey i am the web owner Marah and you?');
console.log(userName);
alert('It\'s a pleasure to see you here' + userName);
alert('ok we well play a nice game after you read my bigrapgy I\'ll ask you qustions to make sure your fully understanding who i am');
let correct = 0;
function Q1() {

  let firstQ = prompt('Can i give you a health consltant session?').toLowerCase();
  switch (firstQ) {
  case 'yes': case 'y':
    //console.log('Absolutly thats one of the services i could afford it');
    alert('Absolutly thats one of the services i could afford it');
    correct++;
    break;
  case 'no': case 'n':
    //console.log("Read the biography carfully");
    alert('Read the biography carfully');
    break;
  default:
    //console.log('you can make a tour your in our web');
    alert('you can make a your in our web');
    break;
  }
}
Q1();

function Q2() {
  let SecQ = prompt('Can i write you a diet plan?').toUpperCase();
  switch (SecQ) {
  case 'YES': case 'Y':
    //console.log('Thats one of my strong skills');
    alert('Thats one of my strong skills');
    correct++;
    break;
  case 'NO': case 'N':
    //console.log('the first words were i am a dietitian');
    alert('the first words were i am a dietitian');
    break;
  default:
    //console.log('you can make a your in our web');
    alert('you can make a your in our web');
    break;
  }
}
Q2();

function Q3() {
  let ThirdQ = prompt('I\'ve graduted from certified credentials Unevisity?').toLowerCase();
  switch (ThirdQ) {
  case 'yes': case 'y':
    //console.log("It's UOP(Unevisity Of Petra)");
    alert('It\'s UOP(Unevisity Of Petra)');
    correct++;
    break;
  case 'no': case 'n':
    //console.log('You need to be more focused');
    alert('You need to be more focused');
    break;
  default:
    //console.log('you can make a your in our web');
    alert('you can make a your in our web');
    break;
  }
}
Q3();

function Q4() {
  let FourthQ = prompt('My passion is in health awarness & media?').toUpperCase();
  switch (FourthQ) {
  case 'YES': case 'Y':
    console.log('yes');
    alert('Thats why i am learned how to deal with social media platforms');
    correct++;
    break;
  case 'NO': case 'N':
    //console.log('I think you dont like the idea of reading');
    alert('I think you dont like the idea of reading');
    break;
  default:
    //console.log('you can make a your in our web');
    alert('you can make a your in our web');
    break;
  }
}
Q4();

function Q5() {
  let FifthQ = prompt('Do you think i love sport?').toLowerCase();
  switch (FifthQ) {
  case 'yes': case 'y':
    //console.log('Kickboxing is my favorit one');
    alert('Kickboxing is my favorit one');
    correct++;
    break;
  case 'no': case 'n':
    //console.log('You should answer it logically');
    alert('You should answer it logically');
    break;
  default:
    //console.log('you can make a your in our web');
    alert('you can make a your in our web');
    break;
  }
  alert('Since i had tell you a lot information about me with mentioning histories i think you can answer the next qustion');
}
Q5();

function Q6() {
  let SixthQ = prompt('How old i am?');
  let SQ = Number(SixthQ);
  let answer6 = 24;

  for (let i = 0; i < 3; i++)
    if (SQ === answer6) {
      alert('Correct');
      correct++;
      break;
    }
    else if (SQ < answer6) {
      SQ = parseInt(prompt('Too low, you have 4 attempts only'));
    }
    else if (SQ > answer6) {
      SQ = parseInt(prompt('Too high, you have 4 attempts only'));
    }
  alert('I am 24 years old');
}
Q6();

function Q7() {
  let info = ['WHO', 'MOH', 'FAO', 'UNHR', 'NHCS', 'Academy of nutrition and dietetics', 'USDA', 'FDA'];
  for (let x = 0; x < 6; x++) {
    let guessinfo = prompt('What is the writer information source?');
    guessinfo = guessinfo.toUpperCase();
    if (info[0] == guessinfo || info[1] == guessinfo || info[2] == guessinfo || info[3] == guessinfo || info[4] == guessinfo || info[5] == guessinfo || info[6] == guessinfo || info[7] == guessinfo) {
      alert('You are correct!');
      correct++;
      break;
    } else {
      alert('Review my following list again');
    }
    alert('The right answers were \'WHO\', \'MOH\', \'FAO\', \'UNHR\', \'NHCS\', \'Academy of nutrition and dietetics\', \'USDA\', \'FDA\'')
    alert('Youre score is ' + correct + '/7');
  }
}
Q7();
let conf = confirm('Are you sure you want to make appointment');
console.log(conf);
