/* Status Request :
    [0]:request not initialized 
    [1]: server connection succeful response
    [2]:request received 
    [3]:processing request  
    [4]: request is finished & response is ready
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
let currentIndex = 0;
let index = 0;

let score = 0;
let array = [];
let choiseAnswer;
var second = 30;
let countDown;
const btnAnswers = document.querySelectorAll(".progressBar");
const quizQuestion = document.querySelector(".input");
const answear1 = document.querySelector(".answer1");
const answear2 = document.querySelector(".answer2");
const answear3 = document.querySelector(".answer3");
const answear4 = document.querySelector(".answer4");
const quizQuestion_result = document.querySelector(".input_result");
const answear1_result = document.querySelector(".answer1_result");
const answear2_result = document.querySelector(".answer2_result");
const answear3_result = document.querySelector(".answer3_result");
const answear4_result = document.querySelector(".answer4_result");
let btnNext = document.querySelector(".next");
const answers = document.getElementsByName("answers");
let countDiv = document.getElementById("questionCountDown");
var min, restsecond;
let questionJsArray;
const justif = document.querySelector(".justif");
let cmp = 0,
  point = 0;

/********************* Start CountDown -Questions *******************/

function timer() {
  countDown = setInterval(function () {
    min = Math.floor(second / 60);
    restsecond = second % 60;
    if (restsecond < 10) restsecond = "0" + restsecond;
    countDiv.innerHTML = " Qestion Count [ " + min + ": " + restsecond + "]";
    if (second > 0) {
      second -= 1;
      countDiv.style.color = "#fff";
    } else {
      clearInterval(countDown);
      countDiv.innerHTML = "Time Done";
      countDiv.style.color = "red";
      document.getElementById("next").click();
    }
  }, 1000);
}
function getResponse() {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "php/class/question.php", true);
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      questionJsArray = JSON.parse(this.responseText);

      quizlength = questionJsArray.length;

      countQuestions(quizlength);

      getQuestion(questionJsArray, quizlength);
    }
  };
  // trus:async not/Yes sync
  xhttp.send();
}
getResponse();
actionQuiz();
function actionQuiz() {
  for (let i = 0; i < btnAnswers.length; i++) {
    btnAnswers[i].addEventListener("click", function (e) {
      rightAnswer = questionJsArray[currentIndex].rigthAnswers;
      currentIndex++;
      checkRightAnswer(
        rightAnswer,
        e.target.innerHTML,
        questionJsArray[index - 1]
      );
      getQuestion(questionJsArray, quizlength);
    });
  }
}
actionNext();
function actionNext() {
  document.getElementById("next").addEventListener("click", function (e) {
    rightAnswer = questionJsArray[currentIndex]["rigthAnswers"];
    currentIndex++;
    checkRightAnswer(
      rightAnswer,
      e.target.innerHTML,
      questionJsArray[index - 1]
    );
    getQuestion(questionJsArray, quizlength);
  });
}
function getQuestion(obj, arrayLength) {
  clearInterval(countDown);
  timer();
  if (index < arrayLength) {
    quizQuestion.innerHTML = obj[index].question;
    answear1.innerHTML = obj[index].answer_1;
    answear2.innerHTML = obj[index].answer_2;
    answear3.innerHTML = obj[index].answer_3;
    answear4.innerHTML = obj[index].answer_4;
    index++;
  } else {
    document.querySelector("#btn-start-quiz").click();
    getResult();
    document.querySelector("#score").textContent = point;

    // local storage
    // let history = JSON.parse(localStorage.getItem('name_Storage'));
    // history.push({
    //     'score': point,
    //     'date': Date(Date.now())
    // });
    // localStorage.setItem("name_Storage", JSON.stringify(history));
    // }
  }
}
  /* PRogress Bar*/
  function countQuestions(count) {
    document.querySelector("#countQST").innerHTML = count;
  }

  function checkRightAnswer(rightAnswer, chosenAnswer, question) {
    question["user_check"] = chosenAnswer;
    array.push(question);
    if (rightAnswer == chosenAnswer) {
      point++;
    }
    console.log(point);
  }
  function getResult() {
    if (cmp < array.length) {
      quizQuestion_result.innerHTML = array[cmp].question;
      answear1_result.innerHTML = array[cmp].answer_1;
      answear2_result.innerHTML = array[cmp].answer_2;
      answear3_result.innerHTML = array[cmp].answer_3;
      answear4_result.innerHTML = array[cmp].answer_4;
      justif.innerHTML = array[cmp].justification;
      let answers = document.querySelectorAll(".ans");
      for (let i = 0; i < answers.length; i++) {
        answers[i].style.color="white";
        if (array[cmp].user_check == answers[i].textContent) {
          answers[i].style.color = "red";
        }
        if (array[cmp].rigthAnswers == answers[i].textContent) {
          answers[i].style.color = "green";
        }
      }
      cmp++;
    }
  }

  document.querySelector("#result-next").addEventListener("click", () => {
    getResult();
  });

