let openBtn = document.getElementById('open-btn');
let closeBtn = document.getElementById('close-btn');
let nav = document.getElementById('nav');
let navItems;
let items;
let currentQues = 0
let score = 0




let questions = [
    {
        question: " Who was the first President of Nigeria?",
        choices: ['Nnamdi Azikiwe', 'Olusegun Obasanjo', 'Goodluck Jonathan', 'Muhammadu Buhari'],
        correctAnswer: 0
      },
      {
        question: " When did Nigeria gain independence from British colonial rule?",
        choices: ['1957', '1960', '1963', '1970'],
        correctAnswer: 1
      },
      {
        question: " Which Nigerian city was the capital before Abuja?",
        choices: ['Lagos', 'Kano', 'Ibadan', 'Port Harcourt'],
        correctAnswer: 0
      },
      {
        question: " Who was the first military Head of State of Nigeria?",
        choices: ['Yakubu Gowon', 'Muhammadu Buhari', 'Olusegun Obasanjo', 'Aguiyi Ironsi'],
        correctAnswer: 3
      },
      {
        question: " When was Nigeria officially declared a Republic?",
        choices: ['1960', '1963', '1979', '1999'],
        correctAnswer: 1
      },
      {
        question: "Which Nigerian musician released the album 'Zombie' that criticized the military regime in the 1970s?",
        choices: ['Fela Kuti', 'Sunny Ade', 'Ebenezer Obey', 'King Sunny Ade'],
        correctAnswer: 0
      },
      {
        question: "Who is the first female Chief Justice of Nigeria?",
        choices: ['Maryam Mukhtar', 'Folake Solanke', 'Aloma Mariam Mukhtar', 'Amina J. Mohammed'],
        correctAnswer: 2
      },
      {
        question: "Which Nigerian political party was founded by Obafemi Awolowo?",
        choices: ['All Progressives Congress (APC)', 'Peoples Democratic Party (PDP)', 'Action Group (AG)', 'Social Democratic Party (SDP)'],
        correctAnswer: 2
      },
      {
        question: "Which Nigerian city is known as the 'Centre of Excellence'?",
        choices: ['Abuja', 'Lagos', 'Kano', 'Port Harcourt'],
        correctAnswer: 1
      },
      {
        question: " Who is the Nigerian author of the novel 'Things Fall Apart'?",
        choices: ['Chinua Achebe', 'Wole Soyinka', 'Ben Okri', 'Chimamanda Ngozi Adichie'],
        correctAnswer: 0
      },
      {
        question: "Which Nigerian footballer won the African Footballer of the Year award the most times?",
        choices: ['Jay-Jay Okocha', 'Rashidi Yekini', 'Nwankwo Kanu', 'Samuel Eto\'o'],
        correctAnswer: 2
      },
      {
        question: "When was the Nigerian Civil War (also known as the Biafran War) fought?",
        choices: ['1960-1963', '1963-1966', '1967-1970', '1970-1973'],
        correctAnswer: 2
      },
      {
        question: "Which Nigerian city is home to the Aso Rock Presidential Villa?",
        choices: ['Abuja', 'Lagos', 'Enugu', 'Calabar'],
        correctAnswer: 0
      },
     {
        question: "Who was the first Prime Minister of Nigeria?",
        choices: ['Abubakar Tafawa Balewa', 'Ahmadu Bello', 'Obafemi Awolowo', 'Nnamdi Azikiwe'],
        correctAnswer: 0
      },
      {
        question: "When was the Nigerian flag first raised?",
        choices: ['October 1, 1960', 'May 29, 1999', 'July 1, 1963', 'January 1, 1970'],
        correctAnswer: 0
      },
      {
        question: "Which Nigerian city is famous for its annual cultural festival called 'Calabar Carnival'?",
        choices: ['Lagos', 'Abuja', 'Calabar', 'Enugu'],
        correctAnswer: 2
      },
      {
        question: "Who is the Nigerian environmental activist and Nobel laureate?",
        choices: ['Chinua Achebe', 'Wole Soyinka', 'Ben Okri', 'Ken Saro-Wiwa'],
        correctAnswer: 1
      },
      {
        question: "Which Nigerian city is known as the 'Giant of the North'?",
        choices: ['Kano', 'Lagos', 'Port Harcourt', 'Abuja'],
        correctAnswer: 0
      },
      {
        question: "Who is the first Nigerian to win an individual Olympic gold medal?",
        choices: ['Samuel Okwaraji', 'Segun Odegbami', 'Chioma Ajunwa', 'Blessing Okagbare'],
        correctAnswer: 2
      },
      {
        question: "When was the Nigerian Naira introduced as the official currency?",
        choices: ['1960', '1973', '1983', '1999'],
        correctAnswer: 1
      }
    
]

const questionElement = document.getElementById('question')
const choicesElement = document.getElementById('choices')
const submitBtn = document.getElementById('submit-btn')
const startBtn = document.getElementById("start-btn")
const restart = document.getElementById("restart")
const resultElement = document.getElementById('result-container')
const result = document.getElementById('result')



displayQuestion = () => {
const question = questions[currentQues]
questionElement.textContent = question.question
choicesElement.innerHTML = "" 


question.choices.forEach((choice, index) => {
    const li = document.createElement("li")
    const radio = document.createElement("input")
    radio.type = 'radio'
    radio.name = 'choice'
    radio.value = index
    li.appendChild(radio)
    li.appendChild(document.createTextNode(choice))
    choicesElement.appendChild(li)
})

}

displayResult = () => {
    resultElement.textContent = `your score is: ${score}/${questions.length}`
}

checkAnswer = () => {
    const selectedAnswer = document.querySelector(`input[name="choice"]:checked`);
    if (!selectedAnswer) {
        alert('please select an answer')
        return;
    }
    
    const answer = parseInt(selectedAnswer.value);
    if (answer === questions[currentQues].correctAnswer) {
        score++
    }

    currentQues++
    if (currentQues === questions.length) {
        displayResult();
        restart.style.display = "block";
    } else {
        displayQuestion()
    }
}


toggleBtn = (x) => {
    // x.classList.toggle("toggle");
    nav.classList.toggle("toggle")
    
  }




toggleMode = (x) => {
    // x.classList.toggle("light_mode");
    var element = document.body;
    element.classList.toggle("light-mode");
    x.style.background= "none";
    x.style.border= "none";
    x.style.transition= "2s";
    x.style.transform= "scale(0.9)";
       
    if (x.innerHTML === "dark_mode") {
      x.innerHTML = "light_mode";
    } else {
      x.innerHTML = "dark_mode";
    }
  }


  start = () => {
    displayQuestion();
    startBtn.style.display = "none";
    submitBtn.style.display = "block";
  }


openBtn.addEventListener('click', toggleBtn)

closeBtn.addEventListener("click", toggleBtn)

submitBtn.addEventListener("click", checkAnswer)

startBtn.addEventListener("click", start)

// restart.addEventListener("click", function () {
//    resultElement.textContent = ``;
//    start();
// })

// displayQuestion()

 //  navItems = nav.children;
 // for (let i = 0; i <= navItems.length; i++) {
      
 //      items = navItems[i];
 //      items.addEventListener('click', toggleActive)
 //    }
