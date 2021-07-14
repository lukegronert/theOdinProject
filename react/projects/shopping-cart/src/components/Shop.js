import React from 'react';
import '../styles/Shop.css'
import Nav from './Nav';
import ItemCard from './ItemCard';
import {useState, useEffect} from 'react';

export default function Shop() {
    const [itemsData, setItemsData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => setItemsData(data))
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
                {itemsData.map((item) => {
                    return (
                        <ItemCard item={item} key={item.id} />
                    )
                })}
            </div>
        </div>
    )
}
