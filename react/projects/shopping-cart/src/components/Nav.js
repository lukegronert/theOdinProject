import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

export default function Nav() {

    return (
        <nav>
            <h1>Shop</h1>
            <ul className='nav-links'>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <li>Home</li>
            </Link>
            <Link to='/shop'  style={{ textDecoration: 'none' }}>
                <li>Shop</li>
            </Link>
            </ul>
        </nav>
    )
}
