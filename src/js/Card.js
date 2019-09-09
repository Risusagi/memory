class Card {
    constructor(index, avers) {
        this.revers = `<img src="img/revers.png">`;
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