import Card from "./card.ts";

class CardDeck {
    private deck: Card[] = [];
    private suits: ('diams' | 'hearts' | 'clubs' | 'spades')[] = ['diams', 'hearts', 'clubs', 'spades'];
    private rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    constructor() {
        this.initializeDeck();
    }

    private initializeDeck() {
        for (const suit of this.suits) {
            for (const rank of this.rank) {
                this.deck.push(new Card(rank, suit));
            }
        }
    }

    public getCard(): Card {
        const randomIndex = Math.floor(Math.random() * this.deck.length);
        return this.deck.splice(randomIndex, 1)[0];
    }

    public getCards(howMany: number): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            cards.push(this.getCard());
        }
        return cards;
    }
}

export default CardDeck;