import React from 'react'

export default function Receipt(props) {
    const totalPrice = () => {
        let sum = 0;
        props.order.map((item) => {
            return sum += Number(item.mainPrice) + Number(item.drinkPrice) + Number(item.dessertPrice)
        })
        return sum.toFixed(2);
    }
    return (
        <div className='receiptContainer'>
            <h1>Receipt</h1>
            {props.order.map((item) => {
                return (<div key={item.id}>
                    {item.main ? <p>{item.main} - {item.mainPrice}</p> : null}
                    {item.dessert ? <p>{item.dessert} - {item.dessertPrice}</p> : null}
                    {item.drink ? <p>{item.drink} - {item.drinkPrice}</p> : null}
                    </div>)
            })}
            <h4>Total: {totalPrice()}
            </h4>
        </div>
    )
}
