const jokeArea = document.querySelector('#joke-area')
const jokeButton = document.querySelector('#joke-button')
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit'

jokeButton.addEventListener('click', (e) => {
  generateJokes()
})

async function generateJokes() {
  const res = await fetch(url)
  const data = await res.json()
  let joke = ''
  if (data.joke == undefined) {
    joke = `${data.setup} ${data.delivery}`
  } else {
    joke = data.joke
  }
  jokeArea.innerText = joke
}
