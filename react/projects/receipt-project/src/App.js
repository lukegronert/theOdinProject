import React, { Component } from 'react';
import { FaCocktail, FaCoffee, FaHamburger, FaHotdog, FaPizzaSlice, FaIceCream, FaCookie } from "react-icons/fa";
import Receipt from './components/Receipt.js';

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
      id: '',
      name: '',
      burger: '',
      dessert: '',
      drink: '',
    }

  }
  render() {
    return (
      <div className='appContainer'>
        <form className='formContainer'>
          <h1>Place your order:</h1>
          <div className='choiceRowDiv'>
            <div className='choiceDiv'>
              <label><FaHamburger className='icon' /><br />
              <span className='price'>$4.99</span><br />
              <input type="radio" name='burger' value='hamburger'></input>
              </label>
            </div>
            <div className='choiceDiv'>
              <label><FaPizzaSlice className='icon' />
              <br />
              <span className='price'>$3.99</span><br />
              <input type="radio" name='burger' value='pizza'></input>
              </label>
            </div>
            <div className='choiceDiv'>
              <label><FaHotdog className='icon' />
              <br />
              <span className='price'>$2.50</span><br />
              <input type="radio" name='burger' value='hotdog'></input>
              </label>
            </div>
          </div>
          <div className='choiceRowDiv'>
            <div className='choiceDiv'>
              <label><FaIceCream className='icon' />
              <br />
                <span className='price'>$1.99</span><br />
              <input type="radio" name='dessert' value='icecream'></input>
                </label>
            </div>
            <div className='choiceDiv'>
              <label><FaCookie className='icon' />
              <br />
                <span className='price'>$0.50</span><br />
              <input type="radio" name='dessert' value='cookie'></input>
                </label>
            </div>
          </div>
          <div className='choiceRowDiv'>
            <div className='choiceDiv'>
              <label><FaCoffee className='icon' />
              <br />
                <span className='price'>$0.99</span><br />
              <input type="radio" name='drink' value='coffee'></input>
                </label>
            </div>
            <div className='choiceDiv'>
              <label><FaCocktail className='icon' />
              <br />
                <span className='price'>$5.99</span><br />
              <input type="radio" name='drink' value='cocktail'></input>
                </label>
            </div>
          </div>
          <input type='submit'></input>
        </form>

        <Receipt />

      </div>
  )}
}

