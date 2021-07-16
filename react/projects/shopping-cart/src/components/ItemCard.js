import React from 'react';
import '../styles/Shop.css';
import {useState} from 'react';


export default function ItemCard({item, cart, setCart}) {
    const [orderAmount, setOrderAmount] = useState(0);
    const addToCart = () => {
        const orderInput = document.querySelector('.orderInput');
        setCart([
            ...cart,
            {
                title: item.title,
                image: item.image,
                price: item.price,
                amount: Number(orderAmount)
            }
        ])
        console.log(cart);
    }
    return (
        <div className='itemCard'>
            <div className='imageDiv'>
                <img src={item.image} />
            </div>
            <div>
                    <h5 style={{textAlign: 'center'}}>${item.price.toFixed(2)}</h5>
                    <p>{item.title}</p>
            </div>
            <div className='orderDiv'>
                <input type="number" min='0' max='10' style={{width: '50%'}} className='orderInput' onChange={event => setOrderAmount(event.target.value)} />
                <button onClick={() => {
                    addToCart();
                }}>Add to Cart</button>
            </div>
        </div>
    )
}
