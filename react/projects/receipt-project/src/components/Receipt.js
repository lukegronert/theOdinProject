import React from 'react'

export default function Receipt(props) {
    const totalPrice = () => {
        let sum = 0;
        props.order.map((item) => {
            sum += Number(item.mainPrice) + Number(item.drinkPrice) + Number(item.dessertPrice)
        })
        return sum.toFixed(2);
    }
    return (
        <div className='receiptContainer'>
            <h1>Receipt</h1>
            {props.order.map((item) => {
                return (<div key={item.id}>
                    <p>{item.main} - {item.mainPrice}</p>
                    <p>{item.dessert} - {item.dessertPrice}</p>
                    <p>{item.drink} - {item.drinkPrice}</p>
                    </div>)
            })}
            <h4>Total: {totalPrice()}
            </h4>
        </div>
    )
}
