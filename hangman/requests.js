const getPuzzle = (wordCount) => {
    return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}



const getCountry = (countryCode) => new Promise ((resolve, reject) => {
    const countryRequest = new XMLHttpRequest()    

    countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        const country = data.find((country) => country.cca2 === countryCode)
        resolve(country)
    }else if (e.target.readyState === 4) {
        reject('We cannot get the country')
    }
})
    countryRequest.open('GET', 'https://restcountries.com/v3.1/all?fields=cca2,name')
    countryRequest.send()
})
