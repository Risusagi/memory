import Board from "./Board";

class StartPage {
    constructor() {
        this.levelChoisen = false;
        this.boardToRender = new Board();
    }
    //renders board with cards
    handleStartClick() {
       this.levelChoisen ? this.boardToRender.render() : alert('Please select one of the levels');
       this.boardToRender.player.shouldTik = true;
    }
    //finds how many cards do we want to render depending on level; allows to click start
    getQuantity(e) {
        const quantity = e.currentTarget.innerText === 'Easy' ? 12 : e.currentTarget.innerText === 'Medium' ? 24 : 36;
        this.boardToRender.cardsQuantity = quantity;
        this.levelChoisen = this.levelChoisen ? this.levelChoisen : !this.levelChoisen;
    }
    render() {
        document.querySelector('#root').innerHTML = `
            <div class="start-page">
                <h1>Memory game</h1>
                
                <span>Same... but so different</span>
                <img src="img/logo-img.png">
                <p>Please select level of hardness</p>
                <div class="btns">
                    <button type="button" class="btn btn-outline-info level-btn easy">
                        Easy
                    </button>
                    
                    
                    <button type="button" class="btn btn-outline-info level-btn medium">
                        Medium
                    </button>
                    <button type="button" class="btn btn-outline-info level-btn hard">
                        Hard
                    </button>
                </div>
                
                <button type="button" class="btn btn-outline-info btn-lg start-btn">
                    Start
                </button>
            </div>    
        `;
        
        document.querySelectorAll('.level-btn').forEach(btn => btn.addEventListener('click', (e) => this.getQuantity(e)));
        document.querySelector('.start-btn').addEventListener('click', () => this.handleStartClick());
    }
};
export default StartPage;