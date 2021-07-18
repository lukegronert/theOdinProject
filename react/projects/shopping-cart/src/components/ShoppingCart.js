import React from 'react';

export default function ShoppingCart({cart, itemNumber}) {
    const shoppingCartModal = document.querySelector('.shoppingCartModal');

    let total = 0;
    let orderTotal = cart.forEach((item) => {
        total += item.price * item.amount;
    })
    
    return (
        <div className='shoppingCartModal hidden'>
            <div className='modalContent'>
                <span className='modalClose' onClick={() => {
                    shoppingCartModal.classList.add('hidden');
                }}>&times;</span>
                <h1>Shopping Cart</h1>
                <div className='cartHeaders'>
                    <div>{/* Empty div so headers line up with correct sections underneath */}</div>
                    <div>
                        <h5>Item</h5>
                    </div>
                    <div>
                        <h5>Price</h5>
                    </div>
                    <div>
                        <h5>Amount</h5>
                    </div>
                    <div>
                        <h5>Total Price</h5>
                    </div>
                </div>
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
                <div className='orderTotal'>
                    <h3>Order Total: ${total}</h3>
                </div>
                <div className='buttonDiv'>
                    <button>Continue Shopping</button>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}
