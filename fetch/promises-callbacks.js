const pastaAglioEOlio = [
	"1- Make the water boil, big bubbles!",
	"2- Add Salt",
	"3- Cook roughly half the required time",
	"4- Fry the garlic",
	"5- Add the pasta to the Pan, do like a Risotto for the rest of the cooking time",
]

function getInstruction(indexOfInstruction, successCallback, errorCallback) {
	if (!pastaAglioEOlio[indexOfInstruction]) {
		return errorCallback("No instruction at this index")
	}
	successCallback(pastaAglioEOlio[indexOfInstruction])
}

// getInstruction(
// 	0,
// 	(instruction) => {
// 		console.log(instruction)
// 		setTimeout(() => {
// 			getInstruction(
// 				1,
// 				(instruction) => {
// 					console.log(instruction)
// 					setTimeout(() => {
// 						getInstruction(
// 							2,
// 							(data) => {
// 								console.log(data)
// 								setTimeout(() => {
// 									getInstruction(
// 										3,
// 										(data) => {
// 											console.log(data)
// 											setTimeout(() => {
// 												getInstruction(
// 													4,
// 													(data) => {
// 														console.log(data)
// 													},
// 													console.log
// 												)
// 											}, 1000)
// 										},
// 										console.log
// 									)
// 								}, 1000)
// 							},
// 							(e) => {
// 								console.log(e)
// 							}
// 						)
// 					}, 1000)
// 				},
// 				(error) => {
// 					console.log(error)
// 				}
// 			)
// 		}, 1000)
// 	},
// 	(error) => {
// 		console.log(error)
// 	}
// )

const pendingPromise = new Promise((resolve, reject) =>
	Math.random() > 0.5 ? resolve("Greater than .5") : reject("Less than .5")
)
pendingPromise
	.then((result) => console.log("Then block: ", result))
	.catch((error) => console.log("Catch block: ", error))

function getInstructionWithPromises(indexOfInstruction) {
	const myPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!pastaAglioEOlio[indexOfInstruction]) {
				return reject("No instructions")
			}
			return resolve(pastaAglioEOlio[indexOfInstruction])
		}, 1000)
	})
	return myPromise
}

/**
 * Chaining then blocks
 */

// getInstructionWithPromises(0)
// 	.then((instruction) => {
// 		console.log(instruction)
// 		return getInstructionWithPromises(1)
// 	})
// 	.then((instruction) => {
// 		console.log(instruction)
// 		return getInstructionWithPromises(2)
// 	})
// 	.then((instruction) => {
// 		console.log(instruction)
// 		return getInstructionWithPromises(3)
// 	})
// 	.then((instruction) => {
// 		console.log(instruction)
// 		return getInstructionWithPromises(4)
// 	})
// 	.then((instruction) => {
// 		console.log(instruction)
// 		// return getInstructionWithPromises(5)
// 	})
// 	.catch((e) => console.log(e))

async function makePasta() {
	try {
		let instruction = await getInstructionWithPromises(0)
		console.log(instruction)
		instruction = await getInstructionWithPromises(1)
		console.log(instruction)
		instruction = await getInstructionWithPromises(2)
		console.log(instruction)
		instruction = await getInstructionWithPromises(3)
		console.log(instruction)
		instruction = await getInstructionWithPromises(4)
		console.log(instruction)
	} catch (error) {
		console.log(error)
	}
}

// makePasta()

// const allOfTheInstructions = Promise.all([
// 	getInstructionWithPromises(0),
// 	getInstructionWithPromises(1),
// 	getInstructionWithPromises(2),
// 	getInstructionWithPromises(3),
// 	getInstructionWithPromises(4),
// ])
const allOfTheInstructions = Promise.all(
	pastaAglioEOlio.map((el, i) => getInstructionWithPromises(i))
)

const aPendingPromise = new Promise(() => {})
console.log("Pending promise: ", aPendingPromise)
const aSettledPromise = Promise.resolve("All good in the hood")
console.log(aSettledPromise)
const aRejectedPromise = Promise.reject("Nop")
console.log(aRejectedPromise)

allOfTheInstructions
	.then((dataAsArray) => {
		console.log(dataAsArray)
	})
	.catch((e) => console.log(e))
