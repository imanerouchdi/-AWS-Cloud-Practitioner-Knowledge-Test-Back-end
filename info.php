<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="sass/main.css">
</head>
<body class="info-page">
   
        
            <div class="progress-bar">
                <div class="progress" id="progress"></div>
                 <div class="progress-step step1 active" id="info"  ></div>
                 <!-- quiz -->
                 <div class="progress-step step2" id="quiz" >
                    <span style="color: #fff ; display: none;">quiz</span>
                 </div>
                <!-- result -->
                 <div class="progress-step step3" id="result">
                    <span style="display: none; color: #fff;" >result</span>
                    
                 </div>
            </div>

        <div class="pageinfo " >
            <p class="info-text">
                Preparing for AWS Certified Cloud Practitioner Don't be stressed, take our AWS quiz questions and prepare yourself for the certified cloud With these AWS Quiz Questions, we are going to you build your confidence by providing tips and tricks to solve AWS questions . 
            </p>
            <h5>About the Quiz :</h5>
                <ol class="list-ordonner">
                    <li>There is 10 Questions in this Quiz .</li>
                    <li>You must answer each question in less than 30 seconds.</li>
                    <li> you run out of time you answers will automatically be submitted for scoring.</li>
                    <li>Read every question carefully and selected the correct answers.</li>
                    <li>Try to answers all the questions in the Quiz</li>
                </ol>
            <h5>Before  starting the Quiz :</h5>
                <ol class="list-ordonner">
                    <li>Make sure that you have a good internet connection .</li>
                    <li> We recommend that you maximize the browser window .</li>
                </ol>
        </div>
        <div class="quizPage" style="display: none; color: #fff;">
            <div class="quizForm">
            <!-- <div class="progress">
                <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div> -->
                <div class="quizTitle">
                    <div class="title"><span>Category:AWS Certified Cloud </span></div>
                    <div class="countQuestion" id="countQuestion">Count Question : <span id="countQST"></span></div>
                </div>
                <!-- <div class="progressQuestion" style="width: 0%; background-color: red;">ddd</div> -->
                
              <div class="questionCountDown" id="questionCountDown"></div>
                <div class="quizQuestion">
                    <button class="input"></botton>
                </div>
                <div class="quizAnswers">
                    <div class="answers1">
                        <button class="progressBar answer1" name="answers" type="button" id="btnAnswer1" ></button>
                        <button class="progressBar answer2" name="answers" type="button" id="btnAnswer2"></button>
                    </div>
                    <div class="answers2">
                        <button class="progressBar answer3" name="answers" type="button" id="btnAnswer3"></button>
                        <button class="progressBar answer4" name="answers" type="button" id="btnAnswer4"></button>
                    </div>
                    <button id="next" style="display: none;"></button>
                </div>
            </div>
        </div>
        <div class="pageresult " style="display: none; color: #fff;">
                <div class="result">
                    <div class="quizForm_result">
                        <div class="quizTitle_result">
                            <div class="title_result"><span>Category:AWS Certified Cloud </span></div>
                            <div class="countQuestion_result" id="countQuestion_result">Your Score: <span id="score"></span></div>
                        </div>     
                        <div class="quizQuestion_result">
                            <button class="input_result"></botton>
                        </div>
                        <div class="quizAnswers_result">
                            <div class="answers1">
                                <button class="ans answer1_result" name="answers" ></button>
                                <button class="ans answer2_result" name="answers" ></button>
                            </div>
                            <div class="answers2">
                                <button class="ans answer3_result" name="answers"></button>
                                <button class="ans answer4_result" name="answers"></button>
                            </div>
                            <button class="next" id="result-next">Next</button>
                        </div>
                    </div>
                    <div class="justify_answer">
                        <span class="justify"></span>
                        <span class="justif"></span>
                        <img src="asset/images/check-mark.png" alt="check-mark" srcset="">
                    </div>
                </div>
            
        </div>
        

        <button class="btn-start"  id="btn-start-quiz" >Start Quiz</button>
            





        <script src="asset/js/step-component.js"></script>
        <script src="asset/js/script.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>
</html>