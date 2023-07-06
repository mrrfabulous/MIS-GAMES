let questions = [
    {
        question: "Q1: Who was the first President of Nigeria?",
        choices: ['Nnamdi Azikiwe', 'Olusegun Obasanjo', 'Goodluck Jonathan', 'Muhammadu Buhari'],
        correctAnswer: 0
      },
      {
        question: "Q2: When did Nigeria gain independence from British colonial rule?",
        choices: ['1957', '1960', '1963', '1970'],
        correctAnswer: 1
      },
      {
        question: "Q3: Which Nigerian city was the capital before Abuja?",
        choices: ['Lagos', 'Kano', 'Ibadan', 'Port Harcourt'],
        correctAnswer: 0
      },
      {
        question: "Q4: Who was the first military Head of State of Nigeria?",
        choices: ['Yakubu Gowon', 'Muhammadu Buhari', 'Olusegun Obasanjo', 'Aguiyi Ironsi'],
        correctAnswer: 3
      },
      {
        question: "Q5: When was Nigeria officially declared a Republic?",
        choices: ['1960', '1963', '1979', '1999'],
        correctAnswer: 1
      },
      {
        question: "Q6: Which Nigerian musician released the album 'Zombie' that criticized the military regime in the 1970s?",
        choices: ['Fela Kuti', 'Sunny Ade', 'Ebenezer Obey', 'King Sunny Ade'],
        correctAnswer: 0
      },
      {
        question: "Q7: Who is the first female Chief Justice of Nigeria?",
        choices: ['Maryam Mukhtar', 'Folake Solanke', 'Aloma Mariam Mukhtar', 'Amina J. Mohammed'],
        correctAnswer: 2
      },
      {
        question: "Q8: Which Nigerian political party was founded by Obafemi Awolowo?",
        choices: ['All Progressives Congress (APC)', 'Peoples Democratic Party (PDP)', 'Action Group (AG)', 'Social Democratic Party (SDP)'],
        correctAnswer: 2
      },
      {
        question: "Q9: Which Nigerian city is known as the 'Centre of Excellence'?",
        choices: ['Abuja', 'Lagos', 'Kano', 'Port Harcourt'],
        correctAnswer: 1
      },
      {
        question: "Q10: Who is the Nigerian author of the novel 'Things Fall Apart'?",
        choices: ['Chinua Achebe', 'Wole Soyinka', 'Ben Okri', 'Chimamanda Ngozi Adichie'],
        correctAnswer: 0
      },
      {
        question: "Q11: Which Nigerian footballer won the African Footballer of the Year award the most times?",
        choices: ['Jay-Jay Okocha', 'Rashidi Yekini', 'Nwankwo Kanu', 'Samuel Eto\'o'],
        correctAnswer: 2
      },
      {
        question: "Q12: When was the Nigerian Civil War (also known as the Biafran War) fought?",
        choices: ['1960-1963', '1963-1966', '1967-1970', '1970-1973'],
        correctAnswer: 2
      },
      {
        question: "Q13: Which Nigerian city is home to the Aso Rock Presidential Villa?",
        choices: ['Abuja', 'Lagos', 'Enugu', 'Calabar'],
        correctAnswer: 0
      },
     {
        question: "Q14: Who was the first Prime Minister of Nigeria?",
        choices: ['Abubakar Tafawa Balewa', 'Ahmadu Bello', 'Obafemi Awolowo', 'Nnamdi Azikiwe'],
        correctAnswer: 0
      },
      {
        question: "Q15: When was the Nigerian flag first raised?",
        choices: ['October 1, 1960', 'May 29, 1999', 'July 1, 1963', 'January 1, 1970'],
        correctAnswer: 0
      },
      {
        question: "Q16: Which Nigerian city is famous for its annual cultural festival called 'Calabar Carnival'?",
        choices: ['Lagos', 'Abuja', 'Calabar', 'Enugu'],
        correctAnswer: 2
      },
      {
        question: "Q17: Who is the Nigerian environmental activist and Nobel laureate?",
        choices: ['Chinua Achebe', 'Wole Soyinka', 'Ben Okri', 'Ken Saro-Wiwa'],
        correctAnswer: 1
      },
      {
        question: "Q18: Which Nigerian city is known as the 'Giant of the North'?",
        choices: ['Kano', 'Lagos', 'Port Harcourt', 'Abuja'],
        correctAnswer: 0
      },
      {
        question: "Q19: Who is the first Nigerian to win an individual Olympic gold medal?",
        choices: ['Samuel Okwaraji', 'Segun Odegbami', 'Chioma Ajunwa', 'Blessing Okagbare'],
        correctAnswer: 2
      },
      {
        question: "Q20: When was the Nigerian Naira introduced as the official currency?",
        choices: ['1960', '1973', '1983', '1999'],
        correctAnswer: 1
      }
    
]

let currentQues = 0
let score = 0

const questionElement = document.getElementById('question')
const choicesElement = document.getElementById('choices')
const submitBtn = document.getElementById('submit-btn')
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

function displayResult() {
    resultElement.textContent = `your score is: ${score}/${questions.length}`
}

function checkAnswer() {
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
        displayResult()
    } else {
        displayQuestion()
    }
}




submitBtn.addEventListener("click", checkAnswer)

displayQuestion()