const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    /*callback('Some fake puzzle')*/
    const httpRequest = new XMLHttpRequest()
    httpRequest.addEventListener('readystatechange', (e) => {
    //har access till callback, wordCount pga closures
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        resolve(data.puzzle)
        //vi callar på funktionen vi passar in och
        //använder det vi vill printa ut då funktionen console loggar
        //vi använder funktion här eftersom att innan funktionen körs måste kod ovan köras "klart"
    } else if (e.target.readyState === 4) {
        reject('An error has taken place')
    }

})

httpRequest.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
httpRequest.send()
})
    





getCountry = (countryCode) => new Promise((resolve, reject) => {
    //funtkion som har landskod och en 
    const requestCountries = new XMLHttpRequest()

    requestCountries.addEventListener('readystatechange', (e) => {
        //körs om det sker en request
        if (e.target.readyState === 4 && e.target.status === 200) {
            //kollar så att den har gått igenom alla request steg och är klar
            const countries = JSON.parse(e.target.responseText)
            //sparar den "stringifyade versionen av ett objekt i ett objekt"
            const country = countries.find((index) => index.alpha2Code === countryCode)
            //returnerar array där countrycode är stämmer överrens med argumentet som vi har 'passat' in
            resolve(country.name)
            //vi kör callback-funktionen här och passar in landet så att koden vi printar inte körs innan den är klar där uppe
        } else if (e.target.readyState === 4) {
            //om error, annars samma där uppe
            reject('Something went wrong')

        }


    })

    requestCountries.open('GET', 'http://restcountries.eu/rest/v2e/all')
    requestCountries.send()
})

















/*const getPuzzleSync = () => {
    callback('Some fake puzzle')
    const httpRequest = new XMLHttpRequest()

    httpRequest.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=3', false)
    httpRequest.send()

    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        const data = JSON.parse(httpRequest.responseText)
        return data.puzzle
        //vi callar på funktionen vi passar in och
        //använder det vi vill printa ut då funktionen console loggar
        //vi använder funktion här eftersom att datan måste hämtas innan denna funktion körs
    } else if (httpRequest.readyState === 4) {
        throw new error('things did not go well')
    }
}*/