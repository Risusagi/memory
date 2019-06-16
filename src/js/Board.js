import Card from './Card';
import StartPage from './StartPage';


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
        if (!e.currentTarget.classList.contains('done')) {

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
                            }, 600);
                            this.choisenCards = [];
                        }
                    } else {
                        setTimeout(() => {
                            for (let card of this.choisenCards) {
                                document.querySelector(`.card-${card.index}`).innerHTML = card.revers;
                            }
                            this.choisenCards = [];
                        }, 600)
                    }
                }
            }
        }
    }
    
    openAvers() {
        document.querySelectorAll('.card')
            .forEach( (el, index) => el.addEventListener('click', (e) => this.handleCardClick(e, index)) );
    }

    startNewGame() {
        document.querySelector('.restart-btn').addEventListener('click', () => {
            const startPage = new StartPage();
            startPage.render();
        });
    }

    render() {
        document.querySelector('#root').innerHTML = `
            <div class="board">
               <button class="restart-btn">Restart</button>
            </div>
        `;
        this.renderCards();
        this.openAvers();
        this.startNewGame();
    }
};
export default Board;