'use strict'
let userName = prompt("Hey i am the web owner Marah and you?")
console.log(userName);
alert("It's a pleasure to see you here"+ userName )
alert("ok we well play a nice game after you read my bigrapgy I'll ask you qustions to make sure your fully understanding who i am")

let firstQ = prompt('Can i give you a health consltant session?').toLowerCase();
switch(firstQ) {
case 'yes':
  //console.log('Absolutly thats one of the services i could afford it');
  alert('Absolutly thats one of the services i could afford it');
  break;
case 'no':
  //console.log("Read the biography carfully");
  alert("Read the biography carfully")
  break;
default:
  //console.log('you can make a tour your in our web');
  alert ("you can make a your in our web")
  break;
}
let SecQ = prompt('Can i write you a diet plan?') .toUpperCase()
switch(SecQ) {
case 'YES':
  //console.log('Thats one of my strong skills');
  alert('Thats one of my strong skills');
  break;
case 'NO':
  //console.log('the first words were i am a dietitian');
  alert('the first words were i am a dietitian')
  break;
default:
  //console.log('you can make a your in our web');
  alert("you can make a your in our web")
  break;
}
let ThirdQ = prompt("I've graduted from certified credentials Unevisity?").toLowerCase();
switch(ThirdQ) {
case 'yes':
  //console.log("It's UOP(Unevisity Of Petra)");
  alert("It's UOP(Unevisity Of Petra)");
  break;
case 'no':
  //console.log('You need to be more focused');
  alert('You need to be more focused')
  break;
default:
  //console.log('you can make a your in our web');
  alert("you can make a your in our web")
  break;
}
let FourthQ = prompt('My passion is in health awarness & media?') .toUpperCase()
switch(FourthQ) {
case 'YES':
  console.log('yes');
  alert('Thats why i am learned how to deal with social media platforms');
  break;
case 'NO':
  //console.log('I think you dont like the idea of reading');
  alert('I think you dont like the idea of reading')
  break;
default:
  //console.log('you can make a your in our web');
  alert("you can make a your in our web")
  break;
}
let FifthQ= prompt('Do you think i love sport?').toLowerCase();
switch(FifthQ) {
case 'yes':
  //console.log('Kickboxing is my favorit one');
  alert("Kickboxing is my favorit one");
  break;
case 'no':
  //console.log('You should answer it logically');
  alert('You should answer it logically')
  break;
default:
  //console.log('you can make a your in our web');
  alert("you can make a your in our web")
  break;
}
let conf = confirm('Are you sure you want to make appointment');
console.log(conf);
