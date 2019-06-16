import Card from './Card';

const card = new Card();

class Board {
    constructor() {
        this.cardsQuantity = null;
    }
    renderCards() {
        let averses = [];
        for (let i = 0; i < this.cardsQuantity; i++) {
            let number = Math.ceil((i + 1) / 2);
            averses.push(`<img src="../../public/img/cats-${number}.jpg">`);
        }
        averses.map((el, ind) => {
            let index = Math.floor(Math.random() * averses.length);
            let elToChange = averses[index];
            averses[index] = el;
            return averses[ind] = elToChange;
            
        });
        const cards = [];
        for (let i = 0; i < averses.length; i++) {
            let card = new Card(i);
            card.avers = averses[i];
            cards.push(card);
            document.querySelector('.board').innerHTML += card.render(i);
        }
        this.cards = cards;
    }

    openAvers() {
        let choisenCards = [];
        const handleCardClick = (e, index) => {
            console.log('clicked');
            if (choisenCards.length < 2) {
                e.currentTarget.innerHTML = this.cards[index].avers;

                choisenCards.push(this.cards[index]);

                if (choisenCards.length > 1) {
                    const myCards = this.cards.filter(el => {
                        return el === choisenCards[0] || el === choisenCards[1]
                    });
                    if (choisenCards[0].avers === choisenCards[1].avers) {
                        for (let card of choisenCards) {
                            setTimeout(() => {
                                
                                document.querySelector(`.card-${card.index}`).innerHTML = '';
                            }, 800)
                        }
                    } else {

                        setTimeout(() => {
                            for (let card of myCards) {
                                document.querySelector(`.card-${card.index}`).innerHTML = card.revers;
                            }
                        }, 800)


                    }
                    choisenCards = [];
                }

            }


        }
        document.querySelectorAll('.card')
            .forEach((el, index) => el.addEventListener('click', (e) => handleCardClick(e, index) ))
    }
    render() {
        
        document.querySelector('#root').innerHTML = `
            <div class="board">
               
                
            </div>
        `;
        this.renderCards();
        this.openAvers();
    }
};
export default Board;