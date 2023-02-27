var randomNumber1 = Math.floor(Math.random()*6) + 1
var randomNumber2 = Math.floor(Math.random()*6) + 1
var dice1 = "images/dice"+randomNumber1+".png"
var dice2 = "images/dice"+randomNumber2+".png"

document.querySelector('.dice1').setAttribute('src',dice1)
document.querySelector('.dice2').setAttribute('src',dice2)

if (randomNumber1 > randomNumber2) {
    document.querySelector('.title').firstElementChild.innerHTML = '🏆 PLAYER 1 WINS'
}else if (randomNumber1 < randomNumber2) {
    document.querySelector('.title').firstElementChild.innerHTML = '🏆 PLAYER 2 WINS'
}else {
    document.querySelector('.title').firstElementChild.innerHTML = 'NOBODY WINS'
}