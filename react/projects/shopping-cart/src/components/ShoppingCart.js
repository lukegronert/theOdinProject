import React from 'react';

export default function ShoppingCart({cart, itemNumber}) {
    const shoppingCartModal = document.querySelector('.shoppingCartModal');
    
    return (
        <div className='shoppingCartModal hidden'>
            <div className='modalContent'>
                <span className='modalClose' onClick={() => {
                    shoppingCartModal.classList.add('hidden');
                }}>&times;</span>
                <h1>Shopping Cart</h1>
                    {cart.map((item) => {
                        return (
                            <div key={item.id} className='cartItemDiv'>
                                <img src={item.image} alt='pic' />
                                <div className='itemTitle'>
                                    <h3>{item.title}</h3>
                                </div>
                                <div className='itemPrice'>
                                    <p>${item.price}</p>
                                </div>
                                <div className='itemQuantity'>
                                    <p>{item.amount}</p>
                                </div>
                                <div className='itemTotalPrice'>
                                    <p>${item.price * item.amount}</p>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
