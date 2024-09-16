import Card from './card.ts';

class PokerHand {
    private cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    public getOutcome(): string {
        if (this.isRoyalFlush()) {
            return 'Royal Flush';
        } else if (this.isStraightFlush()) {
            return 'Straight Flush';
        } else if (this.isFourOfAkind()) {
            return 'Four of Kind';
        } else if (this.isFullHouse()) {
            return 'Full House';
        } else if (this.isFlush()) {
            return 'flush';
        } else if (this.isStraight()) {
            return 'Straight';
        } else if (this.isThreeOfAkind()) {
            return 'Three of a Kind';
        } else if (this.isTwoPair()) {
            return 'Two Pair';
        } else if (this.isOnePair()) {
            return 'One Pair';
        } else {
            return 'High Card';
        }
    }

    private isRoyalFlush(): boolean {
        const royalRanks = ['10', 'J', 'Q', 'K', 'A'];
        return this.isFlush() && royalRanks.every(rank => this.cards.some(card => card.rank === rank));
    }

    private isStraightFlush(): boolean {
        return this.isFlush() && this.isStraight();
    }

    private isFourOfAkind(): boolean {
        return this.hasNOfAkind(4);
    }

    private isFullHouse(): boolean {
        const ranks = this.cards.map(card => card.rank);
        const uniqueRanks = new Set(ranks);
        return uniqueRanks.size === 2 && (this.hasNOfAkind(3) && this.hasNOfAkind(2));
    }

    private isFlush(): boolean {
        const suit = this.cards[0].suit;
        return this.cards.every(card => card.suit === suit);
    }

    private isStraight(): boolean {
        const rankOrder = 'A23456789TJQK';
        const ranks = this.cards.map(card => card.rank).sort((a, b) => rankOrder.indexOf(a) - rankOrder.indexOf(b));
        const startIndex = rankOrder.indexOf(ranks[0]);
        return ranks.every((rank, index) => rankOrder[startIndex + index] === rank);
    }

    private isThreeOfAkind(): boolean {
        return this.hasNOfAkind(3);
    }

    private isTwoPair(): boolean {
        const ranks = this.cards.map(card => card.rank);
        const pairs = ranks.filter((rank, index) => ranks.indexOf(rank) !== index);
        return new Set(pairs).size === 2;
    }

    private isOnePair(): boolean {
        return this.hasNOfAkind(2);
    }

    private hasNOfAkind(n: number): boolean {
        const ranks = this.cards.map(card => card.rank);
        return ranks.some(rank => ranks.filter(r => r === rank).length === n);
    }
}

export default PokerHand;