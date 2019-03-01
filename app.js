// Primitive Value string, number, boolean, null, undefined

// Object: MyObject  --> Object.prototype --> null
// Array: myArray --> Array.prototype --> object.prototype --> null.
// Function: myFunc --> Function.prototpe --> Object.prototype --> null.
//String: MyString --> String.prototype --> Object.prototype -- > null.
//number: myNumber --> number.prototype --> Object.prototype --> null.
//Boolean: MyBoolean --> boolean.prototype --> Object.prototype --> null.



let hangmanWord = document.querySelector("#puzzleText")
let guessesLeft = document.querySelector('#guessesLeft')
const guessedLetterOne = new Hangman('Cat', 2)
hangmanWord.textContent = guessedLetterOne.puzzle
guessesLeft.textContent = guessedLetterOne.statusMessage


window.addEventListener('keypress', function (e) {

    const keypress = String.fromCharCode(e.charCode)
    guessedLetterOne.makeGuess(keypress)
    guessedLetterOne.statusMessage
    hangmanWord.textContent = guessedLetterOne.puzzle
    guessesLeft.textContent = guessedLetterOne.statusMessage
})





















/*const team = ['Luke', 'Madison']
//const array = new Array(['Luke', 'Madison'])
console.log(team.hasOwnProperty('length'))*/


/*const getScore = () => 1
console.log(getScore)

const product = 'Computer' //gets converted to a object if u use an method on it. Is an object wrapper
console.log(product.split(''))

const otherProduct = new String('Phone') //converts it to an object, and calls the method on it.
console.log(otherProduct)*/




/*const product = new Object({
    name:Marcus
})

product.name = 'Rest'

Object.prototype.someNewMethod = () => 'new function'


// hasOwnProperty - Vi kan kolla om objektet har en property, return true, annars false
console.log(product.hasOwnProperty('hasOwnProperty'))
console.log(product)*/