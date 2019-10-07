import Board from "./Board";

class StartPage {
    constructor() {
        this.levelChoisen = false;
        this.boardToRender = new Board();
    }
    //renders board with cards
    handleStartClick() {
        if(!this.levelChoisen) return;

        this.boardToRender.render();
        this.boardToRender.player.shouldTik = true;
    }
    //finds how many cards do we want to render depending on level; allows to click start
    getQuantity(e) {
        const quantity = e.currentTarget.innerText === 'Easy' ? 12 : e.currentTarget.innerText === 'Medium' ? 24 : 36;
        this.boardToRender.cardsQuantity = quantity;
        this.levelChoisen = true;
        document.querySelector('.start-btn').innerText = 'Start';
    }
    render() {
        document.querySelector('#root').innerHTML = `
            <div class="start-page">
                <h1>Playful cats</h1>
                
                <span>Same... but so different</span>
                <img src="img/logo-img.png">

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
                    Select level please
                </button>
            </div>    
        `;
        
        document.querySelectorAll('.level-btn').forEach(btn => btn.addEventListener('click', (e) => this.getQuantity(e)));
        document.querySelector('.start-btn').addEventListener('click', () => this.handleStartClick());
    }
};
export default StartPage;