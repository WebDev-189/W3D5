const chuckButton = document.getElementById("chuck-btn")
const jokeContainer = document.getElementById("chuck-joke")
const chuckURL = "https://api.chucknorris.io/jokes/random"
const pokeElement = document.querySelector(".pokemon")

chuckButton.addEventListener("click", fetchJoke)
/**
 * SYNTAX
 *
 * Promise.then(callback).catch(callback)
 *
 */
function fetchJoke() {
	fetch(chuckURL)
		.then((rawResponse) => {
			console.log(rawResponse)
			// Important, here we return a Promise ! which send us to the
			// next then block once the Promise is fullfilled
			return rawResponse.json()
		})
		.then((data) => {
			// We have the data :)
			console.log(data)
			jokeContainer.textContent = data.value
		})
		.catch((error) => {
			console.log(error)
		}) // .finally()
}

const pokeURL = "https://pokeapi.co/api/v2/pokemon"

// A more modern approach: Async await
const pokeName = pokeElement.querySelector("h3")
const pokeImage = pokeElement.querySelector("img")
const pokeList = pokeElement.querySelector("ul")
const fetchAPoke = document.getElementById("poke-fetch")
fetchAPoke.addEventListener("click", randomPoke)

async function randomPoke() {
	try {
		pokeList.innerHTML = ""

		const rawResponse = await fetch(
			`${pokeURL}/${Math.floor(Math.random() * 500)}`
		)

		const data = await rawResponse.json()

		pokeName.textContent = data.name
		pokeImage.src = data.sprites.front_shiny
		data.types.forEach((element) => {
			const li = document.createElement("li")
			li.textContent = element.type.name
			pokeList.append(li)
		})
	} catch (error) {
		console.log(error)
	}
}

function wakeUp(callback) {
	console.log("Drrrrrring")
	callback()
}

function snoozeAlarm() {
	console.log("Snoozing the alarm")
}

// wakeUp((cb) => {
// 	console.log("Snoozing the alarm")
// 	cb((nestedCallback) => {
// 		console.log("Going to the shower")
// 		nestedCallback(() => {
// 			console.log("Eating something")
// 		})
// 	})
// })
