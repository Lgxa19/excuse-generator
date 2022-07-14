let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

const randomExcuse = () => {
  let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'the keys', 'the car'];
  let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
  
  var being = who[Math.floor(Math.random()*who.length)];
  var problem = action[Math.floor(Math.random()*action.length)];
  var object = what[Math.floor(Math.random()*what.length)];
  var time = when[Math.floor(Math.random()*when.length)];
  var fullExcuse = being+" "+problem+" "+object+" "+time;

  return document.getElementById('excuse').innerHTML = fullExcuse;
}

randomExcuse();