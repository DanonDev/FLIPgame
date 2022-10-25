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
        //Attaching Cards to the section
        gameboard.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
    });
};

 cardGenerator();








// for(let card of cardList) {
//     let div = document.createElement('div')
//     div.innerText = card.monster
//     gameboard.append(div)
// }


 