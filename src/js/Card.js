class Card {
    constructor() {
        this.revers = `<img src="../../public/img/playing-card.jpg">`
    }
    openAvers(i) {
        
        document.querySelectorAll('.card')[i].addEventListener('click', (e) => {
                e.currentTarget.innerHTML = 15;
                console.log(this)
                
        })
        
            
    }
    lu() {
        console.log(255666)
    }
    render() {
        const cardDiv = `
            <div class="card">
                ${this.revers}
               
            </div>
        `;
       
        return cardDiv;
    }
};
export default Card;