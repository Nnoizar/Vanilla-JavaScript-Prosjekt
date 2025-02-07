//object with header information
const defaultHeader = {
    "User-Agent": "MyApp/1.0 (contact@example.com)", // Replace with your app details
    "Accept": "application/json"
}

const searchButton = document.querySelector("#searchBtn")
const inputField = document.querySelector("#cardInput")
const cardName = inputField.value


//fetching a card from userinput
async function getCard(aCard) {
    //sender en request til API, og venter på at jeg får lov til å koble meg til API
    const request = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${aCard}`, {
        method: "GET",
        headers: defaultHeader
    })
    //etter å ha fått lov til å koble meg opp, så venter jeg på en fullstendig informasjon og resolver med å parse det komplette resultatet til JSON og putter resultatet i en variabel.
    const response = await request.json()

    return response
}
//legger json objektet inni en variabel
const myCard = await getCard(cardName)


//kaller på funksjon getCard med et kortnavn fra inputfield
searchButton.addEventListener("click", function () {
    const cardElement = document.querySelector("#card")
    console.log(cardElement)
    console.log(myCard)
})


