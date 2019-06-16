import Card from './Card';
import StartPage from './StartPage';
import Player from './Player';

const player = new Player();

class Board {
    constructor() {
        this.cardsQuantity = null;
        this.cards = [];
        this.choisenCards = [];
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
            averses.push(`<img src="../../public/img/cats-${number}.jpg">`);
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
        const boardDiv = document.querySelector('.board');
        for (let i = 0; i < averses.length; i++) {
            let card = new Card(i, averses[i]);
            this.cards.push(card);
            boardDiv.innerHTML += card.render(i);
        }
    }

    handleCardClick(e, index) {
        if (!e.currentTarget.classList.contains('done') && !e.currentTarget.classList.contains('clicked')) {
            e.currentTarget.classList.add('clicked');
            if (this.choisenCards.length < 2) {
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
                        player.pairs += 1;
                        player.renderPairs();
                        console.log(player);
                    } else {
                        setTimeout(() => {
                            for (let card of this.choisenCards) {
                                const choisenCard = document.querySelector(`.card-${card.index}`);
                                choisenCard.innerHTML = card.revers;
                                choisenCard.classList.remove('clicked');
                            }
                            this.choisenCards = [];
                            player.moves += 1;
                            player.renderMoves();
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

    startNewGame() {
        document.querySelector('.restart-btn').addEventListener('click', () => {
            const startPage = new StartPage();
            startPage.render();
            //clear player's statistics
            player.pairs = 0;
            player.moves = 0;
            player.render();
        });
    }

    render() {
        document.querySelector('#root').innerHTML = `
            <div class="board">
                ${player.render(this.cardsQuantity)}
               <button class="restart-btn">Restart</button>
            </div>
        `;
        this.renderCards();
        this.openAvers();
        this.startNewGame();
    }
};
export default Board;