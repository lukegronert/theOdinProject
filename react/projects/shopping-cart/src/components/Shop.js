import React from 'react';
import '../styles/Shop.css';
import Nav from './Nav';
import ItemCard from './ItemCard';
import ShoppingCart from './ShoppingCart';
import {useState, useEffect} from 'react';
import cartPNG from '../images/shopping-cart.png';


export default function Shop() {
    const [itemsData, setItemsData] = useState({});
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [itemNumber, setItemNumber] = useState(0);

    const shoppingCartModal = document.querySelector('.shoppingCartModal');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => setItemsData(data))
                .finally(() => {
                    setLoading(false);
                })
            }, [])
    
    if (cart.length !== 0) {
        const cartImage = document.querySelector('.cartImage');
        cartImage.classList.remove('hidden');
    }

    if (loading === true) {
        return 'Loading...'
    }

    return (
        <div>
            <Nav />
            <div className='itemDisplay'>
                {itemsData.map((item) => {
                    return (
                        <ItemCard item={item} key={item.id} setCart={setCart} cart={cart} itemNumber={itemNumber} setItemNumber={setItemNumber} />
                    )
                })}
            </div>
            <ShoppingCart cart={cart} setCart={setCart} itemNumber={itemNumber} />
            <button>
                <img src={cartPNG} alt='shopping cart' className='cartImage hidden' onClick={() => shoppingCartModal.classList.remove('hidden')} />
            </button>
        </div>
    )
}
