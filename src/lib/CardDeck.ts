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

    public getCard(): Card | null {
        if (this.deck.length === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * this.deck.length);
        return this.deck.splice(randomIndex, 1)[0];
    }

    public getCards(howMany: number): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            const card = this.getCard();
            if (card) {
                cards.push(card);
            } else {
                break;
            }
        }
        return cards;
    }
    public isEmpty(): boolean {
        return this.deck.length === 0;
    }
    public resetDeck() {
        this.initializeDeck();
    }
}

export default CardDeck;