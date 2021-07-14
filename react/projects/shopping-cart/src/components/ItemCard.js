import React from 'react';
import '../styles/Shop.css';


export default function ItemCard({item}) {
    return (
        <div className='itemCard'>
            <div className='imageDiv'>
                <img src={item.image} />
            </div>
            <div>
                    <p>{item.price}</p>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
            </div>
        </div>
    )
}
