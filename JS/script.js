import {Monsters} from "./cards.js"

const gameboard = document.getElementById('gameboard')
const numCards = 8;
let cardList = Monsters()
cardList.sort(() => Math.random() - 0.5);
cardList = cardList.slice(0, numCards)
cardList = cardList.concat(cardList)

const cardGenerator = () => {
    cardList.forEach((item) => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        //Link images
        face.src = item.image
        card.setAttribute('name', item.title)
        //Attaching Cards to the section
        gameboard.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        //cardk click funk
        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkedCards(e)
        })
    });
};

//Cheking cards
const checkedCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');

    console.log(flippedCards);

//Logic process
    if(flippedCards.length === 2) {
        if(
            flippedCards[0].getAttribute("name") === 
            flippedCards[1].getAttribute("name")
        )   {
            console.log("match");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            });
        } else {
            console.log("wrong");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1200)
            });
        } 
    }

};

 cardGenerator();





 