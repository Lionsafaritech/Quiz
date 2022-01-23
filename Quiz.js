const quizDB=[
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hypertext Markup Language",
        d: "HyperText Makeup Language ",
        ans: "ans3"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        c:"Cascading Super Sheet",
        d:"Cartoon Style Sheet ",
        ans:"ans1" 
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a:"Hypertext Transfer Product",
        b:"Hypertext Test Protocol",
        c:"Hey Transfer Protocol",
        d:"HyperText Transfer Protocol ",
        ans:"ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a:"JavaScript ",
        b:"JavaSuper",
        c:"JustScript",
        d:"JordenShoes ",
        ans:"ans1"
    }
];

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector('#showscore');

let questionCount=0;
let score=0;

const loadQuestion=()=>{
        const questionList=quizDB[questionCount]
        question.innerText=questionList.question;
        option1.innerText=questionList.a;
        option2.innerText=questionList.b;
        option3.innerText=questionList.c;
        option4.innerText=questionList.d;

}

loadQuestion();
const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;

        }
       

    });
    return answer;

};
const deselectAll=()=> {
    answers.forEach((curAnsElem) => curAnsElem.checked= false) ;
}
submit.addEventListener('click',()=>{
    const checkeAnswer=getCheckAnswer();
    console.log(checkeAnswer);
    if(checkeAnswer===quizDB[questionCount].ans){
    score++;};

    questionCount++;
    deselectAll();

    if(questionCount<quizDB.length){
        loadQuestion();
    }else{
        showscore.innerHTML=`<h3> You Scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">Play Again!</button>`;
        showscore.classList.remove('scoreArea');
    }

});