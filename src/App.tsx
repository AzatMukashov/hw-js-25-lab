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
    const [deck, setDeck] = useState(new CardDeck());
    const [cards, setCards] = useState<CardType[]>([]);
    const [outcome, setOutcome] = useState<string>('');
    const [selectedCards, setSelectedCards] = useState<boolean[]>(Array(5).fill(false));
    const [isDeckEmpty, setIsDeckEmpty] = useState<boolean>(false);
    const handleClick = () => {
        if (deck.isEmpty()) {
            setIsDeckEmpty(true);
            return;
        }
        const newCards = deck.getCards(5);
        setCards(newCards);
        const pokerHand = new PokerHand(newCards);
        setOutcome(pokerHand.getOutcome());
    };
    const handleReplace = () => {
        if (deck.isEmpty()) {
            setIsDeckEmpty(true);
            return;
        }
        const newCards = cards.map((card, index) => (selectedCards[index] ? deck.getCard() : card));
        setCards(newCards as CardType[]);
        const pokerHand = new PokerHand(newCards as CardType[]);
        setOutcome(pokerHand.getOutcome());
    };
    const handleReset = () => {
        const newDeck = new CardDeck();
        setDeck(newDeck);
        setCards([]);
        setOutcome('');
        setSelectedCards(Array(5).fill(false));
        setIsDeckEmpty(false);
    }
    const toggleSelectCard = (index: number) => {
        const newSelectedCards = [...selectedCards];
        newSelectedCards[index] = !newSelectedCards[index];
        setSelectedCards(newSelectedCards);
    }

    return (
        <>
            <button type={'button'} onClick={handleClick} disabled={isDeckEmpty}>Раздать карты</button>
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
            <button type={'button'} onClick={handleReplace} disabled={isDeckEmpty}>Заменить выбранные карты</button>
            {isDeckEmpty && (
                <div className="deck-empty">
                    <p>Карты закончились! Начать заново?</p>
                    <button type='button' onClick={handleReset}>Сбросить колоду</button>
                </div>
            )}
            <div className="outcome">
                {outcome && <p>Комбинация: {outcome}</p>}
            </div>
        </>
    );
};
export default App;
