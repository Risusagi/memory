import Board from "./Board";

const board = new Board();


class StartPage {
    constructor() {
        this.levelChoisen = false;
    }
    //renders board with cards
    handleClick() {
       this.levelChoisen ? board.render() : alert('Please select your level');
    }
    //finds how many cards do we want to render depending on level; allows to click start
    getQuantity(e) {
        const quantity = e.currentTarget.innerText === 'Easy' ? 12 : e.currentTarget.innerText === 'Medium' ? 24 : 36;
        board.cardsQuantity = quantity;
        this.levelChoisen = this.levelChoisen ? this.levelChoisen : !this.levelChoisen;
    }
    render() {
        document.querySelector('#root').innerHTML = `
            <button class="level-btn easy">
                Easy
            </button>
            <button class="level-btn medium">
                Medium
            </button>
            <button class="level-btn hard">
                Hard
            </button>
            <button class="start-btn">
                Start
            </button>
        `;
        
        document.querySelectorAll('.level-btn').forEach(btn => btn.addEventListener('click', (e) => this.getQuantity(e)));
        document.querySelector('.start-btn').addEventListener('click', () => this.handleClick());
    }
};
export default StartPage;