import React from "react";

interface CardProps {
    rank: string;
    suit: 'diams' | 'hearts' | 'clubs' | 'spades';
    isSelected: boolean;
    onSelect: () => void;
}

const Card: React.FC<CardProps> = ({rank, suit, isSelected, onSelect}) => {
    return (
        <div className={`card rank-${rank.toLowerCase()} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suit}</span>
            <input
                type="checkbox"
                checked={isSelected}
                onChange={onSelect}
                className="select-checkbox"
            />
        </div>
    );
};
export default Card;