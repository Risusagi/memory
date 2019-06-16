class Card {
    constructor(index) {
        this.revers = `<img src="../../public/img/playing-card.jpg">`;
        this.index = index;
    }
    openAvers(i) {
        
        document.querySelectorAll('.card')[i].addEventListener('click', (e) => {
                e.currentTarget.innerHTML = 15;
                console.log(this)
                
        })
        
            
    }
    
    render(i) {
        const cardDiv = `
            <div class="card card-${i}">
                ${this.revers}
               
            </div>
        `;
        
        return cardDiv;
    }
};
export default Card;