const getPuzzle = (callback) => {
    /*callback('Some fake puzzle')*/
    const httpRequest = new XMLHttpRequest()

    httpRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
            //vi callar på funktionen vi passar in och
            //använder det vi vill printa ut då funktionen console loggar
            //vi använder funktion här eftersom att datan måste hämtas innan denna funktion körs
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }

    })

    httpRequest.open('GET', 'http://puzzle.mead.io/puzzle?wordCtount=3')
    httpRequest.send()
}