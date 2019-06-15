import Board from "./Board";

const board = new Board(0);


class StartPage {
    constructor() {
        this.levelChoisen = false;
    }
    //renders board with cards
    handleClick() {
        board.render();
    }
    //finds how many cards do we want to render depending on level; allows to click start
    getQuantity(e) {
        const quantity = e.currentTarget.classList.contains('easy') ? 12 : e.currentTarget.classList.contains('medium') ? 24 : 36;
        board.cardsQuantity = quantity;
        this.levelChoisen = this.levelChoisen ? this.levelChoisen : !this.levelChoisen;
        document.querySelector('.start-btn').addEventListener('click', () => {
            this.handleClick(); 
        }
        );
    }
    showAlert() {
        if (!this.levelChoisen) {
            alert('Please select your level');
        }
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
        document.querySelector('.start-btn').addEventListener('click', () => {
            this.showAlert();
        });
    }
};
export default StartPage;