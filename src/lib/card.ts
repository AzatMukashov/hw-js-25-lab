class Card {
    public rank: string;
    public suit: 'diams' | 'hearts' | 'clubs' | 'spades';

    constructor(rank: string, suit: 'diams' | 'hearts' | 'clubs' | 'spades') {
        this.rank = rank;
        this.suit = suit;
    }
}

export default Card;