class Card {
    constructor(index, avers) {
        this.revers = `<img src="../../public/img/playing-card.jpg">`;
        this.index = index;
        this.avers = avers;
    }
    openAvers(i) {
        
        document.querySelectorAll('.card')[i].addEventListener('click', (e) => {
                e.currentTarget.innerHTML = 15;
                console.log(this)
                
        })
        
            
    }
    
    render(i) {
        return `
            <div class="card card-${i}">
                ${this.revers}
            </div>
        `;
    }
};
export default Card;