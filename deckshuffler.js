import {cards} from "./card"

export const shuffleDeckAndTurnOrder = (numPlayers) => {
    const deck = []
    const players = []
    for (let i = 0; i < 5; i++) {
        deck.push(cards[0])
    }
    for (let i = 1; i < 5; i++) {
        for (let j = 0; j < 2; j++) {
            deck.push(cards[i])
        }
    }
    for (let i = 5; i < 8; i++) {
        deck.push(cards[i])
    }
    shuffleDeck(deck)
}


export const shuffleDeck = (array) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i + 1)
        [array[i], array[j]] = [array[j], array[i]]
    }
}