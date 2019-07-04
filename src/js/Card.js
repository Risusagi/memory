class Card {
    constructor(index, avers) {
        //this.revers = `<img src="../../public/img/playing-card.jpg">`;
        this.revers = `<img src="https://cdn.pixabay.com/photo/2014/04/03/11/50/paw-312322_1280.png">`;
        
        this.index = index;
        this.avers = avers;
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