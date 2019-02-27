//Create a method for making a guess
//1. Should accept a character for guessing
//2 Should add unique guesses to list of guesses
//3. should decrement the guesses left if a unique guess isnt a amtch



const Hangman = function (word, remaningGueses) {
    this.word = word.toLowerCase().split('')
    this.remaningGueses = remaningGueses
    this.guessedWords = []
}

Hangman.prototype.getPuzzle = function () {
    let asterixWord = ''
    //deklaerar asterixword så att den går att fåm tag i hela funktionen
    this.word.forEach((letter) => {
        //forEachar varje "bokstav" i arrayen eftersom den är splittad.
        if(this.guessedWords.includes(letter) || letter === ' ') {
            //Om guessedLetters har bokstaven som foreachas i word(varje index är letter)... gör något [HAR DEN A? GÖR NÅGOT, HAR DEN B? GÖR NÅGOT]
            asterixWord = asterixWord+letter
        }
        else {
            asterixWord = asterixWord + '*'
        }

    })
    return asterixWord
}


Hangman.prototype.makeGuess = function (letter) {
    letter = letter.toLowerCase()
    const isUnqiue = !this.guessedWords.includes(letter)
    const badGuess = !this.word.includes(letter)

    if (isUnqiue) {
        this.guessedWords.push(letter)
        console.log('Not In Guessed Letter, and in word', letter)
    } if (isUnqiue && badGuess) {
        console.log('bad guess', letter)
        this.remaningGueses--
    }
}



const guessedLetterOne = new Hangman('Cat', 2)

window.addEventListener('keypress', function (e) {
    const keypress = String.fromCharCode(e.charCode)
    guessedLetterOne.makeGuess(keypress)
    console.log(guessedLetterOne.getPuzzle())
    console.log(guessedLetterOne.remaningGueses)
})

