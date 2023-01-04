/* Status Request :
    [1]:request not initialized 
    [2]: server connection succeful response
    [3]:request received 
    [4]:processing request  
    [5]: request is finished & response is ready
*/
/* resquest status code
100-199 :info response 
200-299 : ok
300-399 :redirect
400-499:error client
500-599:server error
*/
/************************ Variables ******************************  */
let rightAnswer;
let quizlength;
let currentIndex=0 ;let index=0;
let btnAnswers = document.querySelectorAll(".progressBar");
const quizQuestion = document.querySelector(".input");
let answear1=document.querySelector(".answer1");
let answear2=document.querySelector(".answer2");
let answear3=document.querySelector(".answer3");
let answear4=document.querySelector(".answer4");

const quizQuestion_result = document.querySelector(".input_result");
let answear1_result=document.querySelector(".answer1_result");
let answear2_result=document.querySelector(".answer2_result");
let answear3_result=document.querySelector(".answer3_result");
let answear4_result=document.querySelector(".answer4_result");
let btnNext=document.querySelector(".next");
let score=0;
    let array=[];
    let  answers=document.getElementsByName("answers");
    let choiseAnswer ;

 
/********************* Start CountDown -Questions *******************/
    var second = 30, // nombre de second
    countDiv   = document.getElementById("questionCountDown"),
  
    countDown;
    
    function timer(){
        countDown = setInterval(function(){
            var min=Math.floor(second/60),
            restsecond =second % 60;
            if(restsecond < 10) 
            restsecond= "0" + restsecond;
            countDiv.innerHTML=" Qestion Count [ " +min + ": " + restsecond +"]";
            if(second > 0)  second -= 1;
            else {
                clearInterval(countDown); // stop count
                countDiv.innerHTML = "Time Done";
                countDiv.style.color="red";
                countDiv.style.color="#fff";
                document.getElementById('next').click();
            }
        },1000);

    }
/************ End CountDown -Questions *******************/
let questionJsArray;   
function getResponse()
   {
    // var ajax=new XMLHttpRequest();
    // var method = ""
        let xhttp = new XMLHttpRequest();// xhr:object change data with server  
        xhttp.open('GET',"php/class/question.php", true);
        
        xhttp.onreadystatechange = function(){
    
            if (this.readyState == 4 && this.status == 200) { 
                 questionJsArray   = JSON.parse(this.responseText);
                
                 quizlength=questionJsArray.length;
               
                countQuestions(quizlength);
               
                getQuestion(questionJsArray,quizlength);
               
                //  for(let i=0;i<btnAnswers.length;i++){
                //     btnAnswers[i].addEventListener('click',function(e){
                //         let rightAnswer=questionJsArray[currentIndex].rigthAnswers;
                    
                //         currentIndex++;
                //         checkRightAnswer(rightAnswer,e.target.innerHTML,questionJsArray[index -1]);
                      
                //         getQuestion(questionJsArray,quizlength);
                //     });
                //  }

                //  document.getElementById('next').addEventListener('click', function(e){
                //      rightAnswer=questionJsArray[currentIndex].rigthAnswers;
                //     currentIndex++;
                //     checkRightAnswer(rightAnswer,e.target.innerHTML,questionJsArray[index -1]);
                //     getQuestion(questionJsArray,quizlength);
                //  });   
            }
        };
         // trus:async not/Yes sync
        xhttp.send();
    } 
    getResponse();
    actionQuiz();
    function actionQuiz(){
        for(let i=0;i<btnAnswers.length;i++){
            btnAnswers[i].addEventListener('click',function(e){
                 rightAnswer=questionJsArray[currentIndex].rigthAnswers;
            
                currentIndex++;
                checkRightAnswer(rightAnswer,e.target.innerHTML,questionJsArray[index -1]);
              
                getQuestion(questionJsArray,quizlength);
            });
         }
    }
    actionNext();
    function actionNext(){
        document.getElementById('next').addEventListener('click', function(e){
            rightAnswer=questionJsArray[currentIndex]['rigthAnswers'];
           currentIndex++;
           checkRightAnswer(rightAnswer,e.target.innerHTML,questionJsArray[index -1]);
           getQuestion(questionJsArray,quizlength);
        });   
    }
    /* Afficher la Question*/
    function getQuestion(obj,lengthe){
        second = 30;
        clearInterval(countDown)
        timer();
        if(index<lengthe){
            quizQuestion.innerHTML=obj[index].question;
            answear1.innerHTML=obj[index].answer_1;
            answear2.innerHTML=obj[index].answer_2;
            answear3.innerHTML=obj[index].answer_3;
            answear4.innerHTML=obj[index].answer_4;
            index++;
        }else{
        document.querySelector("#btn-start-quiz").click(); 
        getResult(); 
        document.querySelector('#score').textContent = k;

        let history = JSON.parse(localStorage.getItem('mp'));
        history.push({
            'score': k,
            'date': Date(Date.now())
        });
        localStorage.setItem("mp", JSON.stringify(history));
        }
     }
    /* PRogress Bar*/
    function countQuestions(count){
        document.querySelector('#countQST').innerHTML=count;
    }
    
    function checkRightAnswer(rightAnswer,chosenAnswer,question){

        question["user_check"] = chosenAnswer;
        console.log(question["user_check"]);// jwab user
        array.push(question);
        console.log(array);
        if(rightAnswer===chosenAnswer){      
            k++;
            console.log("good");

            }console.log(rightAnswer);
            
    } 
/**************** PAge Result *****************************/  
let cmp=0,k = 0; 
justif=document.querySelector(".justif");  
/*function Result*/  
function getResult(){
    
    if(cmp<array.length){
        quizQuestion_result.innerHTML=array[cmp].question;
        answear1_result.innerHTML=array[cmp].answer_1;
        answear2_result.innerHTML=array[cmp].answer_2;
        answear3_result.innerHTML=array[cmp].answer_3;
        answear4_result.innerHTML=array[cmp].answer_4;
        justif.innerHTML=array[cmp].justification;
        let answers = document.querySelectorAll('.ans');
        for(let i = 0; i < answers.length; i++){
            answers[i].style.color="white";
            if(array[cmp].user_check== answers[i].textContent){
                answers[i].style.color="red";
            }
            if(array[cmp].rigthAnswers== answers[i].textContent){
                answers[i].style.color="green";
            }
        }
        cmp++;
        
    }

    
}

document.querySelector('#result-next').addEventListener('click', ()=>{
    getResult();
});

// ProgressQuestion 
const progressQuestion = document.getElementById("progressQuestion");
        
   
