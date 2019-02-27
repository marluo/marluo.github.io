//1. Setup a new status for peoperty with initial value of playing
//Create a new method for recalculating status to "playing", "finished", or "failed"
// call that method after a guess is processed
// use console log to print the status





const Hangman = function (word, remaningGueses) {
    this.word = word.toLowerCase().split('')
    this.remaningGueses = remaningGueses
    this.guessedWords = []
    this.status = 'Playing'
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

Hangman.prototype.gameStatus = function () {
    if (!guessedLetterOne.getPuzzle().includes('*') && this.remaningGueses>0) {
        this.status = 'Finished'

    }else if(this.remaningGueses === 0) {
        this.status = 'Failed'
    }
    console.log(this.status)

    
}








