import React from 'react';
import Card from './Card'

export default function Gameboard(props) {
    return (
        <div className='gameboard'>
            {props.cardList.map((card) => {
                return <Card clickCard={props.clickCard} key={card} card={card} />
            })}
        </div>
    )
}
