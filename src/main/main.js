let question;
let answer1;
let answer2;
let answer3;
let answer4;

question = "How would you print \"\Hello World\"?";

setInterval(function update(){
  document.getElementById('question').innerHTML = question;
  document.getElementById('ans1').innerHTML = answer1;
  document.getElementById('ans2').innerHTML = answer2;
  document.getElementById('ans3').innerHTML = answer3;
  document.getElementById('ans4').innerHTML = answer4;
});

setInterval(function update(){
  document.getElementById('button').innerHTML = button;
});