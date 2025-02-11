//object with header information
const defaultHeader = {
    "User-Agent": "MyApp/1.0 (contact@example.com)", // Replace with your app details
    "Accept": "application/json"
}

const searchButton = document.querySelector("#searchBtn")
const inputField = document.querySelector("#cardInput")
const cardNameInHtml = document.querySelector("#card")



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


//ved klick på knappen kaller på funksjon som kjører getCard med et kortnavn som argument fra inputfield
searchButton.addEventListener("click", async function () {
    //legger inn inputverdien i en variabel
    const cardName = inputField.value
    //sender den variabelen som et argument til funksjonene getCard
    //sitter med heledet aktuelle card objektet
    const myCard = await getCard(cardName)

    //kaller på funksjonen som lager elementer
    createCard(myCard)
})

//creating elements and appending it to the page
function createCard(newCard) {
    const h4Element = document.createElement("h4")
    const imgElement = document.createElement("img")
    h4Element.textContent = newCard.name

    imgElement.src = `${newCard.image_uris.normal}"`
    imgElement.style.maxWidth = "30%"
    imgElement.style.maxHeight = "30%"

    cardNameInHtml.append(h4Element)
    cardNameInHtml.append(imgElement)
}







