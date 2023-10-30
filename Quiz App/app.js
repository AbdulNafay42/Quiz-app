// Array of quiz questions
var questions = [
  {
    question: "What does HTML stand for?",
    options1: "A) Hyper Text Markup Language",
    options2: "B) High Tech Modern Language",
    options3: "C) Hyperlink and Text Markup Language",
    options4: "D) Hyper Transfer Markup Language",
    correctAnswer: "A) Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used for creating a hyperlink?",
    options1: "A) link",
    options2: "B) a",
    options3: "C) href",
    options4: "D) url",
    correctAnswer: "B) a",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options1: "A) br",
    options2: "B) lb",
    options3: "C) break",
    options4: "D) newline",
    correctAnswer: "A) br",
  },
  {
    question:
      "Which HTML element is used to define the structure of an HTML document?",
    options1: "A) header",
    options2: "B) body",
    options3: "C) article",
    options4: "D) doctype",
    correctAnswer: "D) doctype",
  },
  {
    question: "What does the HTML element <em> represent?",
    options1: "A) Emphasis",
    options2: "B) Email",
    options3: "C) Embedded",
    options4: "D) End",
    correctAnswer: "A) Emphasis",
  },
];
var index = 0;
var score = 0;
var totalQuestions = questions.length; // Store the total number of questions
 var question = document.getElementById("question-div");
  var options = document.getElementsByName("option");
  


  var timeLeft = 20; // Set the initial time in seconds
  var countdownElement = document.getElementById('countdown');

  function updateTimer() {
    var percentage = (score / totalQuestions ) * 100

    countdownElement.textContent = timeLeft;
    
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timer); // Stop the timer when it reaches zero
 
          Swal.fire({
            title: 'Your Score',
            html: 'Out Of '+ totalQuestions  + " Your Score is " + score + "<br/>" + ' Percentage ' + percentage + "%",
          });
          setTimeout(function() {
            location.href = "quiz.html";
          }, 1500); 
        
    }
}


// Start the countdown timer
var timer = setInterval(updateTimer, 1000);

  // function start

function renderQuestion() {

  
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      btn.disabled = true;
        if (options[i].value === questions[index - 1].correctAnswer) {
          score++;
      }
      }
    }


    var percentage = (score / totalQuestions ) * 100
    if (!questions[index]) {
      Swal.fire({
        icon: 'success',
        title: 'Your Score',
        html: 'Out Of '+ totalQuestions  + " Your Score is " + score + "<br/>" + ' Percentage ' + percentage + "%",
      });
      setTimeout(function() {
        location.href = "quiz.html";
      }, 5000);    }
    
  question.innerHTML = `
<h2>HTML / CSS Quiz</h2>
<h6>${questions[index].question}</h6>
<div class="options">
    <label  ><input type="radio" name="option" id="option1" onclick="btnEnabled()" value= "${questions[index].options1}">${questions[index].options1}</label>
</div>
<div class="options">
    <label  ><input type="radio" name="option" id="option2" onclick="btnEnabled()"  value= "${questions[index].options2}">${questions[index].options2}</label>
</div>
<div class="options">
    <label  ><input type="radio" name="option" id="option3" onclick="btnEnabled()"  value=" ${questions[index].options3}">${questions[index].options3}</label>
</div>
<div class="options">
    <label><input type="radio" name="option" id="option4" onclick="btnEnabled()"  value= "${questions[index].options4}">${questions[index].options4}</label>
</div>

`;
index++


}

renderQuestion();

// not move without clicking on the option
var btn = document.getElementById("nxt-btn")
function btnEnabled() {
  btn.disabled = false ;
}

// login data
function data() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  

  if (email === "abdulnafay@gmail.com" && password === "12345678") {
      Swal.fire({
        icon: 'success',
        text: 'Login Succsessfully !',

      })   

          
    setTimeout(function() {
      location.href = "quiz.html";
    }, 1000);     

    console.log(
      "Login successful. Email: " + email + ", Password: " + password
    );
  }
   else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })  
}

}