const questionsData = [
    {
        "title": "#1",
        "question": '"Quando o poder vem da ______ do povo, torna-se legítimo; pois só na verdadeira união há liberdade."',
        "password": 'VONTADE 216',
        "color": "#AD76D9",
        "title": '#1'
    },
    {
        "title": "#2",
        "question": '"A verdadeira ________ só é alcançada quando o indivíduo abre mão de interesses próprios em prol do bem comum."',
        "password": 'LIBERDADE 213',
        "color": "#76D978",
        "title": '#2'
    },
    {
        "title": "#3",
        "question": '"Para Rousseau, o ________ é essencial para que os indivíduos vivam em harmonia e igualdade"',
        "password": 'PACTO SOCIAL 219',
        "color": "#fffc47",
        "title": '#3'
    },
    {
        "title": "#4",
        "question": '"O verdadeiro poder não reside em força ou dominação, mas no ______ social que une os cidadãos em igualdade."',
        "password": 'CONTRATO 220',
        "color": "#EC8ECE",
        "title": '#4'
    }
]

let counter = 0
let background = document.getElementById('questions')
let text_enigma = document.getElementById('enigma') 
let input = document.getElementById('password')
let title = document.getElementById('title')
let returnButton = document.getElementById('return')

function changeQuestion () {
    const changes = questionsData[counter]
    text_enigma.textContent = changes['question']
    input.value = ""
    background.style.backgroundColor = changes['color']
    title.textContent = changes['title']
}

input.addEventListener('input', function makeQuestion() {
    let input = document.getElementById('password')
    let password = questionsData[counter]['password']
    if (input.value.toUpperCase() == password) {
        counter += 1
        if (counter < 4) {
            changeQuestion()
            console.log('Change')
        } else {
            background.style.display = 'none'
            document.getElementById('congratulations').style.display = 'flex'
        }
    } else {
        console.log('False word')
    }
})

// returnButton.addEventListener('click', function returnFirstFrame () {
//     counter = 0
//     background.style.display = 'flex'
//     changeQuestion()
//     document.getElementById('congratulations').style.display = 'none'
// })
