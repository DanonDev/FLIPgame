const cards = document.querySelectorAll('.card')
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
refreshBtn = document.querySelector(".details button");

let maxTime = 50;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let firstCard, secondCard, timer;
let isPlaying = false;
let thirdflip = false;

refreshBtn.addEventListener("click", shuffleCard);

cards.forEach(card => { // adding clik ivents for all cards
    card.addEventListener("click", flipCard);
});


function initTimer() {
    if(timeLeft <= 0) {
        return clearInterval(timer);
    }
    timeLeft--;
    timeTag.innerText = timeLeft;
}


function flipCard({target: clickedCard}) {
    if(!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }
    if(clickedCard !== firstCard && !thirdflip && timeLeft > 0) {
        flips++;
        flipsTag.innerText = flips;
        clickedCard.classList.add("flip");
        if(!firstCard) {
            //return firstCard value to clickedCard
            return firstCard = clickedCard;
        }
        secondCard = clickedCard;
        thirdflip = true;
        let firstCardImg = firstCard.querySelector(".back-side img").src,
        secondCardImg = secondCard.querySelector(".back-side img").src;
        matchCards(firstCardImg, secondCardImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) { // if  two catds img are matched
        matchedCard++; // increment matched value by 1
        // if matched value is 8 that means user have matched all the cards
        if(matchedCard == 8 && timeLeft > 0) {
            return clearInterval(timer);
            // setTimeout(() => {
            //     return shuffleCard();
            // }, 1000); 
        }
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        firstCard = secondCard = "";
        return thirdflip = false;
    }
    // if two card not matched
    setTimeout(() => { // adding bombom class to both card after 400ms
        firstCard.classList.add("bombom");
        secondCard.classList.add("bombom")
    }, 400);

    setTimeout(() => { // removing both bombom and flip classes from both cards after 1200ms
        firstCard.classList.remove("bombom", "flip");
        secondCard.classList.remove("bombom", "flip");
        firstCard = secondCard = ""; // setting borh card  value blank
        thirdflip = false;
    }, 1200);
}

function shuffleCard() {
    timeLeft = maxTime;
    flips = matchedCard = 0;
    firstCard = secondCard = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    disableDeck = false;

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-side img");
        setTimeout (() => {
            imgTag.src = `assets/cards/halloween${arr[index]}.jpg`;
        }, 500);
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();
