// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.getElementsByClassName('like-glyph')
  console.log (likeButtons)
  for(const button of likeButtons){
    button.addEventListener('click', (e) => {
    mimicServerCall()
    .then (() =>{
      if (button.innerText === EMPTY_HEART){
        button.innerText = FULL_HEART
      }
      else if (button.innerText === FULL_HEART){
        button.innerText = EMPTY_HEART
      }
    })
    .catch(() => {
      const error = document.querySelector('#modal')
      error.className = 'show'

      setTimeout(() => {
        error.className = 'hidden'}, 3000)
      })
    })
  }
})




/*const likeHeart = document.querySelectorAll('span.like-glyph')
likeHeart.addEventListener('click', updateHeart)

function updateHeart(like){
  mimicServerCall
}*/



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
