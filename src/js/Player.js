import FinalBoard from './FinalBoard';
class Player {
    constructor() {
        this.pairs = 0;
        this.moves = 0;
        this.time = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.shouldTik = false;
    }
    renderPairs() {
        document.querySelector('.pairs').textContent = this.pairs;
    }
    renderMoves() {
        document.querySelector('.moves').textContent = this.moves;
    }
    
    checkIfWin(maxPoints, boardObj) {
        if (this.pairs === maxPoints) {
            setTimeout(() => {
                const finalBoard = new FinalBoard(this.timeToShow(), this.moves);
                finalBoard.render();
                boardObj.restartGame();
            }, 800);
            this.shouldTik = false;
        }
    }
    timeToShow() {
        return `${this.minutes > 9 ? this.minutes : '0' + this.minutes} : ${this.seconds > 9 ? this.seconds : '0' + this.seconds}`
    }
    timeTik() {
        const tik = setInterval(() => {
            if (!this.shouldTik) {
                clearInterval(tik);
                return;
            }
            this.time += 1;
            this.minutes = Math.floor(this.time / 60);
            this.seconds = this.time % 60;
            document.querySelector('.timer').textContent = this.timeToShow();
        }, 1000);
    }

    

    render(cardsQuantity) {
        return `
            <div class="player-div">
                <span class="statistics">
                    Points:
                    <span class="pairs">${this.pairs}</span>
                     / ${cardsQuantity / 2}
                    <br>
                    Moves:
                    <span class="moves">${this.moves}</span>
                </span>
                <span class="timer">
                    00 : 00
                </span>    
            </div>
        `;
        
    }
}
export default Player;