import React, {useState} from 'react';
import './App.css';
import Card from './components/card/card.tsx';
import CardDeck from "./lib/CardDeck.ts";
import PokerHand from "./lib/PokerHand.ts";

interface CardType {
    rank: string;
    suit: 'diams' | 'hearts' | 'clubs' | 'spades';
}

const App: React.FC = () => {
    const [cards, setCards] = useState<CardType[]>([]);
    const [outcome, setOutcome] = useState<string>('');
    const [selectedCards, setSelectedCards] = useState<boolean[]>(Array(5).fill(false));
    const handleClick = () => {
        const deck = new CardDeck();
        const newCards = deck.getCards(5);
        setCards(newCards);
        const pokerHand = new PokerHand(newCards);
        setOutcome(pokerHand.getOutcome());
    };
    const handleReplace = () => {
        const deck = new CardDeck();
        const newCards = cards.map((card, index) => (selectedCards[index] ? deck.getCard() : card));
        setCards(newCards);
        const pokerHand = new PokerHand(newCards);
        setOutcome(pokerHand.getOutcome());
    };
    const toggleSelectCard = (index: number) => {
        const newSelectedCards = [...selectedCards];
        newSelectedCards[index] = !newSelectedCards[index];
        setSelectedCards(newSelectedCards);
    }

    return (
        <>
            <button type={'button'} onClick={handleClick}>Раздать карты</button>
            <div className="playingCards faceImages">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        rank={card.rank}
                        suit={card.suit}
                        isSelected={selectedCards[index]}
                        onSelect={() => toggleSelectCard(index)}/>
                ))}
            </div>
            <button type={'button'} onClick={handleReplace}>Заменить выбранные карты</button>
            <div className="outcome">
                {outcome && <p>Комбинация: {outcome}</p>}
            </div>
        </>
    );
};
export default App;
