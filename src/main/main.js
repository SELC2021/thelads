/*
Author: Jackson Joblinske,
Class: SE186X
Group: TheLads
*/

/////////////////////////////////////////////////////////////////////////////////////

/*
@TODO
*/

/////////////////////////////////////////////////////////////////////////////////////



//question object that stores info about the question and answers generated
let Question = {
   question : "",
   code : "",
   answer1 : "",
   answer2 : "",
   answer3 : "",
   answer4 : "",
   correct : "",
};

//used to choose question
let i = 0;

//position of correct answer
let ANS;

//position clicked by user
let CHECK;

//poistion of clicked button
let position;

//has the user already answered this question
let answered = true;

//number of correct answers
let points = 0;

//array of question numbers answered
let answeredBank = [];

/*
@METHOD
@DESCRIPTION - update the screen and display the new question and answers
*/
function update(){
  setInterval(function(){
    document.getElementById('question').innerHTML = Question.question;
    document.getElementById('code').innerHTML = Question.code;
    document.getElementById('ans1').innerHTML = Question.answer1;
    document.getElementById('ans2').innerHTML = Question.answer2;
    document.getElementById('ans3').innerHTML = Question.answer3;
    document.getElementById('ans4').innerHTML =  Question.answer4;
  });
}


/*
@METHOD
@DESCRIPTION - add 1 to points
*/
function addPoint(){
  points++;
}




/*
@METHOD
@DESCRIPTION - generates a random question from question bank
*/
function generateQuestion(){
  //check if the user has answered the question
  if(answered && answeredBank.length != questionBank.length){
    answered = false;
    document.getElementById('newQuestion').innerHTML = "Click to see score or click an answer";
    console.log("generating question...");
    document.getElementById('result').innerHTML = "";

  //generate a random number and set i = to it
    console.log("Generating random number...");
    i = (Math.floor(Math.random() * questionBank.length));


    if(isAnswered()){
      answered = true;
      console.log("QUESTION ALREADY ANSWERED: " + i);
      generateQuestion();
    }else{
      console.log("ADDING QUESTION: " + i + " TO THE ANSWERED BANK");
      answeredBank.push(i);

      //---------debug case for i
        console.log("number: " + (i + 1) + "/" + questionBank.length);

      //set the question field in Question object
        Question.question = questionBank[i];
        Question.code = codeBank[i];

        //set the answers to their positions
        setAnswer(i);

        //update the screen to show questions and answers
         update();

         //----------debug case for question
         console.log(Question.question);
         console.log(Question.code);
    }


  }else{
    document.getElementById('result').innerHTML = points + " / " + questionBank.length;
  }


}

/*
@METHOD
@DESCRIPTION - sets the answers positions
@PARAM - i = index of questions and answers
@RETURNS - ANS = position of correct answer
*/
function setAnswer(i){
//generate random number to decide where correct answer goes
  console.log("Generating answers...");
  console.log("Generating random number...");
   ANS = Math.floor(Math.random() * 4);

//---------debug case for ANS
  console.log("number: " + (ANS + 1));

  //randomize which answer goes where and keep track of where it is
  switch(ANS){
    case 0:
      Question.answer1 = correctAns[i];
      Question.answer2 = answersOne[i];
      Question.answer3 = answersTwo[i];
      Question.answer4 = answersThree[i];
      Question.correct = correctAns[i];
      console.log("case : 0");
      break;
    case 1:
      Question.answer1 = answersOne[i];
      Question.answer2 = correctAns[i];
      Question.answer3 = answersTwo[i];
      Question.answer4 = answersThree[i];
      Question.correct = correctAns[i];
      console.log("case : 1");
      break;
    case 2:
      Question.answer1 = answersTwo[i];
      Question.answer2 = answersOne[i];
      Question.answer3 = correctAns[i];
      Question.answer4 = answersThree[i];
      Question.correct = correctAns[i];
      console.log("case : 2");
      break;
    case 3:
      Question.answer1 = answersThree[i];
      Question.answer2 = answersTwo[i];
      Question.answer3 = answersOne[i];
      Question.answer4 = correctAns[i];
      Question.correct = correctAns[i];
      console.log("case : 3");
      break;
    default:
      (console.log("ERROR"));
      break;
  }

  //return correct answer location
  return ANS;
}




/*
@METHOD
@DESCRIPTION - validate the users answer and check it against the correct positions
@PARAM - pos = button clicked by user
*/
function validateAnswer(pos){
  //if the user hasn't answered already
  if(answered == false){
    document.getElementById('newQuestion').innerHTML = "Click for next question";
    answered = true;
    //check = button pressed or -1 for error
    CHECK = pos || -1;
    console.log(CHECK);

    //if the user clicked correct answer
    if(CHECK == ANS + 1){
      console.log("Correct Answer");
      document.getElementById('result').innerHTML = "Correct!";
      addPoint();
    }else{
      console.log("Wrong Answer\(" + CHECK + "\)");
      document.getElementById('result').innerHTML = "Wrong!";
    }
  }
}



/*
@METHOD
@DESCRIPTION - returns whether or not the question has already been answered
@RETURNS true or false
*/

function isAnswered(){
  if(answeredBank.includes(i)){
    return true;
  }else{
    return false;
  }
}
