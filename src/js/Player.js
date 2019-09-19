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
    renderPoints() {
        const progress = document.querySelector('progress');
        const val = Number(progress.getAttribute('value'));
        console.log(val);
        progress.setAttribute('value', `${val + 1}`);
    }
    renderMoves() {
        document.querySelector('.moves').textContent = `${this.moves}`;
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
            <div class="player-container">
                <div class="statistics">
                    <div class="points">
                        <img src="img/logo-img.png" style="height: 35px">
                        <progress value="0" max="${cardsQuantity / 2}"></progress>
                    </div>
                    <div class="timer-container">
                        <img src="img/clock.png" style="height: 25px">
                        <span class="timer">
                            00 : 00
                        </span>
                    </div>
                    <div class="moves-container">
                        <img src="img/moves-icon.png" style="height: 25px">
                        <span class="moves">${this.moves}</span>
                    </div>
                </div>
                <div class="playing-btns">
                    <button type="button" class="btn btn-outline-info pause-btn">Pause</button>
                    <button type="button" class="btn btn-outline-info restart-btn">Restart</button>
               </div>
               
            </div>
        `;
        
    }
}
export default Player;