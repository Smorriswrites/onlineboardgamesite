import { buildDeck } from "deckShuffler"

const setup = ({ numPlayers }) => {
    const deck = buildDeck( numPlayers )

    return {
        deck: deck,
        players: numPlayers,
        winner: {name: "", id: "-1"},
        gameOver: {
            playAgain: [],
            left: [],
            newRoomId: "",
        },
        turnLog: {
            action: "",
            player: {},
            successful: false,
            target: {},
            blockedBy: {},
            challenge: {},
            responses: {},
            exchange: {},
        },
        statistics: [
            ["income", 0, "—", "—", "—"],
            ["foreign aid", 0, 0, 0, "—"],
            ["coup", 0, 0, "—", "—"],
            ["tax", 0, 0, "—", 0],
            ["assassinate", 0, 0, 0, 0],
            ["steal", 0, 0, 0, 0],
            ["exchange", 0, 0, "—", 0],
        ],
        chat: [],
    };
}

export const HateMail = {
    name: `${GAME_NAME}`,
    minPlayers: 2,
    maxPlayers: 4,
    setup: setup,
    turn: {
        
    }
}