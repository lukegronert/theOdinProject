import React from 'react';
import '../styles/Shop.css'
import Nav from './Nav';
import ItemCard from './ItemCard';
import {useState, useEffect} from 'react';

export default function Shop() {
    const [itemData, setItemData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => setItemData(data))
                .finally(() => {
                    setLoading(false)
                })
            }, [])

    if (loading == true) {
        return 'Loading...'
    }

    return (
        <div>
            <Nav />
            <div className='itemDisplay'>
                {itemData.map((item) => {
                    return (
                        <ItemCard item={item} key={item.id} />
                    )
                })}
            </div>
        </div>
    )
}
