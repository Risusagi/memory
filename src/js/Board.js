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
            
        //    document.querySelector('.board').innerHTML += card.render(i + 1);
        }
         
        
        averses.map((el, ind) => {
            let index = Math.floor(Math.random() * averses.length);
            let elToChange = averses[index];
            averses[index] = el;
            averses[ind] = elToChange;
            
        })
        
        for (let avers of averses) {
            let card = new Card();
            card.avers = avers;
            document.querySelector('.board').innerHTML += card.render();
        }
        // for (let i = 0; i < averses.length; i++) {
        //     card.openAvers(i);
        // }

    }
    render() {
        
        document.querySelector('#root').innerHTML = `
            <div class="board">
               
                
            </div>
        `;
        this.renderCards();
        
    }
};
export default Board;