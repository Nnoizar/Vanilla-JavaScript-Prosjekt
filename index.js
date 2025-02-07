//object with header information
const defaultHeader = {
    "User-Agent": "MyApp/1.0 (contact@example.com)", // Replace with your app details
    "Accept": "application/json"
}

const searchButton = document.querySelector("#searchBtn")
const inputField = document.querySelector("#cardInput")



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



//kaller på funksjon getCard med et kortnavn fra inputfield
searchButton.addEventListener("click", async function () {
    //legger inn inputverdien i en variabel
    const cardName = inputField.value
    console.log(cardName)
    //sender den variabelen som et argument til funksjonene getCard
    const myCard = await getCard(cardName)
    console.log(myCard)
})


