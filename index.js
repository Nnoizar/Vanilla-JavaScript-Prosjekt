//const mtgListElement = document.querySelector("#card-list")
//console.log(mtgListElement)
//const mtgCardList = await getCard(murder)





//object with header information
const defaultHeader = {
    "User-Agent": "MyApp/1.0 (contact@example.com)", // Replace with your app details
    "Accept": "application/json"
}

//fertching a card from userinput
async function getCard(aCard) {

    fetch(`https://api.scryfall.com/cards/named?fuzzy=${aCard}`, {
        method: "GET",
        headers: defaultHeader
    })
        //error handling
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error("Fetch error:", error));
}
getCard("cancel")

