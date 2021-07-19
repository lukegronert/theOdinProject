import React from 'react';
import '../styles/Shop.css';
import {useState} from 'react';


export default function ItemCard({item, cart, setCart, itemNumber, setItemNumber}) {
    const [orderAmount, setOrderAmount] = useState(0);
    const addToCart = (title) => {
        if(orderAmount === 0) {
            return
        } else if (typeof cart.find(item => item.title === title) === 'undefined') {
            setCart([
                ...cart,
                {
                    id: itemNumber,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    amount: Number(orderAmount)
                }
            ])
            console.log(orderAmount);
        } else {
            const sameItem = cart.find(item => item.title === title);
            const newCart = cart.filter(item => item.title !== title);
            sameItem.amount += Number(orderAmount);
            setCart([
                ...newCart,
                sameItem
            ])
        }
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
                <input type="number" min='0' max='10' className='orderInput' onChange={event => setOrderAmount(event.target.value)} />
                <button onClick={() => {
                    addToCart(item.title);
                    setItemNumber(itemNumber+1);
                }}>Add to Cart</button>
            </div>
        </div>
    )
}
