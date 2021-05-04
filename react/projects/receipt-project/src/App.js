import React, { Component } from 'react';
import { FaCocktail, FaCoffee, FaHamburger, FaHotdog, FaPizzaSlice, FaIceCream, FaCookie } from "react-icons/fa";
import Receipt from './components/Receipt.js';
import uniqid from 'uniqid';

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
      orderInput: {
        id: uniqid(),
        main: '',
        mainPrice: [],
        dessert: '',
        dessertPrice: [],
        drink: '',
        drinkPrice: [],
      },
      orderTotal: [],
    }
  }

  handleChange = (e) => {
    const category = e.target.name;
    const categoryPrice = category + 'Price';
    this.setState({
      orderInput: {
        ...this.state.orderInput,
        [category]: e.target.value,
        [categoryPrice]: e.target.dataset.price,
      }
    })
    console.log(this.state)
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      orderTotal: this.state.orderTotal.concat(this.state.orderInput),
      orderInput: {
        id: uniqid(),
        main: '',
        mainPrice: [],
        dessert: '',
        dessertPrice: [],
        drink: '',
        drinkPrice: [],
      }
    })
    setTimeout(() => {
      const form = document.querySelector('form');
      form.reset();
    }, 100)
    console.log(this.state.orderTotal)
  }

  render() {
    const { orderTotal } = this.state;
    return (
      <div className='appContainer'>
        <form className='formContainer' onSubmit={this.onSubmit}>
          <h1>Place your order:</h1>
          <div className='choiceRowDiv'>
            <div className='choiceDiv'>
              <label><FaHamburger className='icon' /><br />
              <span className='price'>$4.99</span><br />
              <input onChange={this.handleChange} type="radio" name='main' value='hamburger' data-price={4.99}></input>
              </label>
            </div>
            <div className='choiceDiv'>
              <label><FaPizzaSlice className='icon' />
              <br />
              <span className='price'>$3.99</span><br />
              <input onChange={this.handleChange} type="radio" name='main' value='pizza' data-price={3.99}></input>
              </label>
            </div>
            <div className='choiceDiv'>
              <label><FaHotdog className='icon' />
              <br />
              <span className='price'>$2.50</span><br />
              <input onChange={this.handleChange} type="radio" name='main' value='hotdog' data-price={2.50}></input>
              </label>
            </div>
          </div>
          <div className='choiceRowDiv'>
            <div className='choiceDiv'>
              <label><FaIceCream className='icon' />
              <br />
                <span className='price'>$1.99</span><br />
              <input onChange={this.handleChange} type="radio" name='dessert' value='icecream' data-price={1.99}></input>
                </label>
            </div>
            <div className='choiceDiv'>
              <label><FaCookie className='icon' />
              <br />
                <span className='price'>$0.50</span><br />
              <input onChange={this.handleChange} type="radio" name='dessert' value='cookie' data-price={0.50}></input>
                </label>
            </div>
          </div>
          <div className='choiceRowDiv'>
            <div className='choiceDiv'>
              <label><FaCoffee className='icon' />
              <br />
                <span className='price'>$0.99</span><br />
              <input onChange={this.handleChange} type="radio" name='drink' value='coffee' data-price={0.99}></input>
                </label>
            </div>
            <div className='choiceDiv'>
              <label><FaCocktail className='icon' />
              <br />
                <span className='price'>$5.99</span><br />
              <input onChange={this.handleChange} type="radio" name='drink' value='cocktail' data-price={5.99}></input>
                </label>
            </div>
          </div>
          <input type='submit'></input>
        </form>

        <Receipt order={orderTotal} />

      </div>
  )}
}

