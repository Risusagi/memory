class FinalBoard {
    constructor(time, moves) {
        this.time = time;
        this.moves = moves;
    }
    render() {
        document.querySelector('.board').innerHTML = `
            <div class="final-board">
                <span class="congratulations">
                    Congratulations!
                </span>
                <span class="final-statistics">
                    Time: ${this.time}
                    <br>
                    Moves: ${this.moves}
                </span>
                <button type="button" class="btn btn-outline-info restart-btn">
                    New game
                </button>
            </div>
        `;
    }
};
export default FinalBoard;