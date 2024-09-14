import React from "react";

const suitsObj = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠',
};

interface Rank_Suit {
    rank: string;
    suit: keyof typeof suitsObj;
}

const Card: React.FC<Rank_Suit> = ({rank, suit}) => {
    return (
        <>
            <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
                <span className="rank">{rank}</span>
                <span className="suit">{suitsObj[suit]}</span>
            </span>
        </>
    );
};
export default Card;