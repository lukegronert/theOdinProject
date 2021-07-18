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

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => setItemsData(data))
                .finally(() => {
                    setLoading(false);
                })
            }, [])

    if (loading === true) {
        return 'Loading...'
    }
    const shoppingCartModal = document.querySelector('.shoppingCartModal');

    return (
        <div>
            <Nav />
            <div className='itemDisplay'>
                {itemsData.map((item) => {
                    return (
                        <ItemCard item={item} key={item.id} setCart={setCart} cart={cart} />
                    )
                })}
            </div>
            <button>
                <img src={cartPNG} alt='shopping cart' className='cartImage' onClick={() => shoppingCartModal.classList.remove('hidden')} />
            </button>
            <ShoppingCart cart={cart} />
        </div>
    )
}
