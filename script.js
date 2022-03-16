
let score = 20;
let HighScore = 0;
let secratNumber = Math.trunc(Math.random() * 20) + 1
// this function build for messages  

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}
const Background_colorfunction = (containerstyle, boxStyel, bodycolor, Lastboxcolor, again_button_backgoundcolor, again_color) => {
    document.querySelector('#container').style.backgroundColor = containerstyle
    document.querySelector('#box').style.backgroundColor = boxStyel
    document.querySelector('body').style.color = bodycolor
    document.querySelector('#last-box').style.backgroundColor = Lastboxcolor
    const Again = document.querySelector('#Again')
    Again.style.backgroundColor = again_button_backgoundcolor
    Again.style.color = again_color
}

// this function for box style 

const box_style_Width = (boxwidth, boxborder) => {
    document.querySelector('#box').style.width = boxwidth
    document.querySelector('#box').style.border = boxborder
}

const check_buttonfunction = (backgroundColor, color) => {
    const Check_button = document.querySelector('#check')
    Check_button.style.backgroundColor = backgroundColor
    Check_button.style.color = color
}

const score_update = (score) => {
    document.querySelector('.score').textContent = score
}

const input = document.querySelector('.guess')
document.querySelector('#check').addEventListener('click', function () {
    if (!input.value) {
        displayMessage('⚠️ No Number')
    } else if (input.value == secratNumber) {
        let number = secratNumber
        document.querySelector('#box').textContent = number
        displayMessage('🥳 Correct  Number')
        box_style_Width('150px', '3px solid White')
        Background_colorfunction("rgba(252, 203, 113, 0.972)", '#D2691E', 'white', '#D2691E', '#D2691E', 'White')

        // this statement for highscore
        if (score > HighScore) {
            HighScore = score
            document.querySelector('.High-Score').textContent = HighScore
            console.log(HighScore)
        }

    } else if (input.value !== secratNumber) {
        if (score > 1) {
            displayMessage(input.value > secratNumber ? '📈 Too High!' : '📉 Too Low!')
            score--
            score_update(score)
        } else {
            score--
            score_update(" 💥you lost the game ")
            box_style_Width('150px', '3px solid White')
            check_buttonfunction('rgb(220,20,60)', 'white')
            Background_colorfunction("rgb(220,20,60)", 'black', 'white', 'black', 'black', 'white')
        }
    }
})
// this is for reset and play again  game 

const Reset_Button = document.querySelector('#Again')
Reset_Button.addEventListener('click', function () {
    score = 20
    displayMessage('Start Guessing...')
    score_update(score)
    secratNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    box_style_Width('100px', '3px solid')
    Background_colorfunction("antiquewhite", 'antiquewhite', 'black', 'aqua', 'aqua', 'black')
    check_buttonfunction('antiquewhite', 'black')
})