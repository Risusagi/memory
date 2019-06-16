class Player {
    constructor() {
        this.pairs = 0;
        this.moves = 0;
    }
    renderPairs() {
        document.querySelector('.pairs').textContent = this.pairs;
    }
    renderMoves() {
        document.querySelector('.moves').textContent = this.moves;
    }
    render(cardsQuantity) {
        console.log(this)
        return `
            <div class="player-div">
                <span>
                    Points:
                    <span class="pairs">${this.pairs}</span>
                     / ${cardsQuantity / 2}
                </span>
                <span>
                    Moves:
                    <span class="moves">${this.moves}</span>
                </span>
            </div>
        `;
    }
}
export default Player;