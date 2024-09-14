import React, {useState} from 'react';
import './App.css';
import Card from './components/card/card.tsx';
import CardDeck from "./lib/CardDeck.ts";

interface CardType {
    rank: string;
    suit: 'diams' | 'hearts' | 'clubs' | 'spades';
}

const App: React.FC = () => {
    const [cards, setCards] = useState<CardType[]>([]);
    const handleClick = () => {
        const deck = new CardDeck();
        const newCards = deck.getCards(5);
        setCards(newCards);
    };
    return (
        <>
            <button type={'button'} onClick={handleClick}>Раздать карты</button>
            <div className="playingCards faceImages">
                {cards.map((card, index) => (
                    <Card key={index} rank={card.rank} suit={card.suit}/>
                ))}
            </div>
        </>
    );
};
export default App;
