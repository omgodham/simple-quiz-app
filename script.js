const quizData = [
    {
        question:'Which is the most popular programming language?',
        a:'Python',
        b:'Java-Script',
        c:'C++',
        d:'Java',
        correct:'b'
    },
    {
        question:'What is the API?',
        a:'Application Programming Interface',
        b:'App Protect Integration',
        c:'Another Portal Identification',
        d:'none of above',
        correct:'a'
    },
    {
        question:'Which language commonly used for game development?',
        a:'Python',
        b:'Java-Script',
        c:'C++',
        d:'Java',
        correct:'c'
    },
    {
        question:'DSA works very slow in?',
        a:'Python',
        b:'Java-Script',
        c:'Java',
        d:'C++',
        correct:'a'
    },
    {
        question:'Machine Learning can be achieved by?',
        a:'Java',
        b:'Java-Script',
        c:'Python',
        d:'C++',
        correct:'c'
    }
];

const aLabel = document.getElementById('a-label');
const bLabel = document.getElementById('b-label');
const cLabel = document.getElementById('c-label');
const dLabel = document.getElementById('d-label');
const question = document.getElementById('question');
const nextBtn = document.getElementsByClassName('next-btn')[0];
const timer = document.getElementById('timer');
const score = document.getElementById('score');

let currentQuestion = 0;
let currentData = quizData[currentQuestion];
//:TO-DO: 
//1.Load new question after every 10 seconds
//2.Record on which second answer is clicked
//3.Add that time to main score

let temproryScore = 0;
let finalScore = 0;

//load quiz
function loadQuiz(){
 
   score.innerText = finalScore; 
   temproryScore = 0;
   let count = 10;
   const reduceTimer = () => {
    timer.innerText = count;
    temproryScore = count*1000;
    count--;
    if(count == 0) clearInterval(seconds);
   }
   reduceTimer();

  var seconds = setInterval(reduceTimer , 1000);

question.innerText = currentData.question;
aLabel.innerText = currentData.a;
bLabel.innerText = currentData.b;
cLabel.innerText = currentData.c;
dLabel.innerText = currentData.d;

const btnsEls = document.querySelectorAll('.radio-btn');
 btnsEls.forEach(btnsEl => btnsEl.checked = false);

 currentQuestion++;
 if(currentQuestion !== quizData.length)
   currentData = quizData[currentQuestion];

 if(currentQuestion == quizData.length){
    clearInterval(quiz);
    timer.style.display = 'none';
}
}

loadQuiz();
var quiz = setInterval(loadQuiz , 10000);


function handleChange(answer){
console.log(quizData[currentQuestion-1]);
   if(answer === quizData[currentQuestion-1].correct) 
        finalScore = (finalScore + temproryScore);
        if(currentQuestion === quizData.length)
            score.innerText = finalScore;
    }

