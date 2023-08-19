let readlineSync = require("readline-sync");
let kuler = require("kuler");
let userName = readlineSync.question(kuler("What's your name?- ","#115e59"));
let score = 0;
console.log(kuler(`\nHello, ${userName} Welcome to Quizify`,"#0284c7"));
console.log(kuler("\nPlease select any options by typing either a/b/c/d \n","#10b981"));



const database={
  data: [
    {
    question: "Who was the first President of Independent India? ",
  
    options:{
      a:"Dr.Rajendra Prasad",
      b:"Indira Gandhi",
      c:"Jawaharlal Nehru",
      d:"Mahatma Gandhi"
    },
    correctAnswer: "a"
  },
  {
   question: "When did India first win the cricket world cup?",
  
    options:{
      a: 1947,
      b: 1983,
      c: 2011,
      d: 2007
  },
  correctAnswer: "b"
},
{
    question: "Which of the following is an inert gas?",
    options:{
      a: "C02",
      b: "O2",
      c: "Ar",
      d: "O3"
  },
  correctAnswer: "c"
    },
  ]
}

const leaderBoard={
  data:[
  {
    name: "Ajju",
    score:1
  },
  {
    name: "Yash",
    score:2
  },
  {
    name: "Zakir",
    score:1
  },
]
}


function playGame(userAnswer,correctAnswer){
  if(userAnswer === correctAnswer){
    console.log(kuler("Correct Answer","#10b981"));
    score++;
  }
  else{
    console.log(kuler("Incorrect Answer","#be123c"));
    console.log(kuler(`Correct Answer is: ${correctAnswer}`,"#047857"));
  }
}



function showQuestionsAndAnswer(database){
  for(let i=0;i<database.data.length;i++){
    console.log(kuler(`\nQ${i+1} - ${database.data[i].question} \n`,"#2563eb"));
      for(let key in database.data[i].options){
        console.log(kuler(`${key}-${database.data[i].options[key]}`,"#ca8a04"));
      }
    let userAnswer = readlineSync.question(kuler("Enter your answer-(a/b/c/d) ","#65a30d")).toLowerCase();
     playGame(userAnswer,database.data[i].correctAnswer);
  }
 
}

function highScorer(leaderBoard){
  leaderBoard.data.push({name: userName, score: score})
  let scoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(kuler("\nCheck your position.","#4f46e5"));
  for(let leader of scoreList){
    console.log(kuler(`${leader.name}-Score: ${leader.score}`,"#fbbf24"));
  }
}

showQuestionsAndAnswer(database);
console.log(`Your Score-  ${score}`);
highScorer(leaderBoard);
