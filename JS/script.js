import {Monsters} from "./cards.js"

const gameboard = document.getElementById('gameboard')
const numCards = 8;
let cardList = Monsters()
cardList.sort(() => Math.random() - 0.5);
cardList = cardList.slice(0, numCards)
cardList = cardList.concat(cardList)

// for(let card of cardList) {
//     let div = document.createElement('div')
//     div.innerText = card.monster
//     gameboard.append(div)
// }

for (let card of cardList) {
    let image = document.createElement('img')
    image.src = card.image
    gameboard.append(image)
}
 