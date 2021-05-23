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
let currentQuestion = 0;
let score = 0;
let currentData = quizData[currentQuestion];

//load quiz
function loadQuiz(){


question.innerText = currentData.question;
aLabel.innerText = currentData.a;
bLabel.innerText = currentData.b;
cLabel.innerText = currentData.c;
dLabel.innerText = currentData.d;

const btnsEls = document.querySelectorAll('.radio-btn');
 btnsEls.forEach(btnsEl => btnsEl.checked = false);

} 

loadQuiz();

//onclick next

nextBtn.addEventListener('click',()=>{
    
    checkAnswer(); // check the answer before procedding

    if(currentQuestion == quizData.length)
    {
        console.log(score);
       return alert("Quiz Finished");
    }
     currentData = quizData[currentQuestion];
    loadQuiz();
});


//check for answer 
function checkAnswer() {
    const btnsEls = document.querySelectorAll('.radio-btn');
    let flag=false;
  
 btnsEls.forEach(btnsEl => {
       if(btnsEl.checked) flag=true;
       if(btnsEl.checked && btnsEl.id == currentData.correct){
        score++;
        console.log("correct");
    }  
});
if(!flag) return alert("Slect one option for next question");
currentQuestion++;
}