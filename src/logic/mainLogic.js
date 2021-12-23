const numPlayersAlive = (G) => {
    return (G.players.filter((e) => !e.isOut)).length
}