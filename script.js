console.log("hello")

const play = document.querySelector('.play')
const body = document.querySelector('body')
const audio = document.querySelector('audio')
const video = document.querySelector('video')

play.addEventListener('click',start)

function start() {
    body.setAttribute('class','inGame')
    audio.setAttribute('autoplay','true')
    audio.volume = 0.2;
    audio.load()
    
}