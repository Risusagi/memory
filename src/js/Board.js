import Card from './Card';
import StartPage from './StartPage';
import Player from './Player';

class Board {
    constructor() {
        this.cardsQuantity = null;
        this.cards = [];
        this.choisenCards = [];
        this.player = new Player();
    }
    
    createAverses() {
        let averses = [];
        //to not use only first 12, 24 or 36 pictures
        let multiplier;
        switch (this.cardsQuantity) {
            case 12:
                multiplier = 6;
                break;
            case 24:
                multiplier = 3;
                break;
            case 36:
                multiplier = 2;
                break;
        };
        let factor = Math.floor(Math.random() * multiplier + 1);
        // creates averses and mixes them
        for (let i = 0; i < this.cardsQuantity; i++) {
            let number = Math.ceil((i + 1) / 2) * factor;
            averses.push(`<img class="avers" src="../img/cats-${number}.jpg">`);
        }
        averses.map((el, ind) => {
            let index = Math.floor(Math.random() * averses.length);
            let elToChange = averses[index];
            averses[index] = el;
            averses[ind] = elToChange;

        });
        return averses;
    }
    renderCards() {
        const averses = this.createAverses();
        const cardsDiv = document.querySelector('.cards');
        for (let i = 0; i < averses.length; i++) {
            let card = new Card(i, averses[i]);
            this.cards.push(card);
            cardsDiv.innerHTML += card.render(i);
        }
    }
    
    handleCardClick(e, index) {
        if (!e.currentTarget.classList.contains('done') && !e.currentTarget.classList.contains('clicked')) {
            if (this.choisenCards.length < 2) {
                e.currentTarget.classList.add('clicked');
                const clickedCard = this.cards[index];
                e.currentTarget.innerHTML = clickedCard.avers;
                this.choisenCards.push(clickedCard);

                if (this.choisenCards.length === 2) {
                    //if cards are equal add class 'done' and clear their div's content
                    if (this.choisenCards[0].avers === this.choisenCards[1].avers) {
                        for (let card of this.choisenCards) {
                            const needCard = document.querySelector(`.card-${card.index}`);
                            setTimeout(() => {
                                needCard.classList.add('done');
                                needCard.innerHTML = '';
                            }, 700);
                            this.choisenCards = [];
                            
                        }
                        this.player.pairs += 1;
                        this.player.renderPairs();
                        this.player.checkIfWin(this.cardsQuantity / 2, this);
                    } else {
                        setTimeout(() => {
                            for (let card of this.choisenCards) {
                                const choisenCard = document.querySelector(`.card-${card.index}`);
                                choisenCard.innerHTML = card.revers;
                                choisenCard.classList.remove('clicked');
                            }
                            this.choisenCards = [];
                            this.player.moves += 1;
                            this.player.renderMoves();
                        }, 700)
                    }
                }
            }
        }
    }
    
    openAvers() {
        document.querySelectorAll('.card')
            .forEach(
                (el, index) => el.addEventListener('click', (e) => this.handleCardClick(e, index))
            );
            
    }

    restartGame() {
        document.querySelector('.restart-btn').addEventListener('click', () => {
            const startPage = new StartPage();
            startPage.render();
            //clear player's statistics
            this.player.shouldTik = false;
            this.player.timeTik();
        });
    }

    manageTime(e) {
        e.currentTarget.innerHTML = this.player.shouldTik ? `Play` : `Pause`;
        this.player.shouldTik = !this.player.shouldTik;
        //continue time counting
        this.player.timeTik();
    }

    render() {
        document.querySelector('#root').innerHTML = `
            <div class="board">
                <h1>Memory game</h1>
                ${this.player.render(this.cardsQuantity)}
                <div class="playing-btns">
                    <button type="button" class="btn btn-outline-info pause-btn">Pause</button>
                    <button type="button" class="btn btn-outline-info restart-btn">Restart</button>
               </div>
               <div class="cards"></div>
            </div>
        `;
        this.renderCards();
        this.openAvers();
        this.player.timeTik();
        this.restartGame();
        document.querySelector('.pause-btn').addEventListener('click', (e) => this.manageTime(e));
    }
};
export default Board;