import React, { Component } from 'react';
import './App.css';
import { Container, FormGroup } from 'reactstrap'
import Footer from './components/Footer'
import CartHeader from './components/CartHeader'
import CartItems from './components/CartItems'
import AddCartItem from './components/AddCartItem'

class App extends Component {
  state = 
   { 
     itemsInCart:[
          { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
          { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
          { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 }
        ],

        products: [
          { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
          { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
          { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
          { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
          { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
          { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
          { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
          { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
          { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }
        ],

        basketItem: []
        
  }

    addItemToCart = newItem => (item => { 
      //this.setState({ itemsInCart: this.state.itemsInCart.concat(newItem)})
      this.setState({ itemsInCart: [...this.state.itemsInCart, newItem]})
      })
    

  render() {
    
    console.log("App: addItemToCart ", this.state.addItemToCart)
    return (
      <div className="App">
            <Container>
        <header className="App-header">
       <CartHeader/>
       <CartItems itemsInCart={this.state.itemsInCart} />
       <AddCartItem products={this.state.products} addItemToCart={this.addItemToCart}/>
        </header>
        <Footer copy="2018" />
        </Container>
      </div>
    )
  }
}

export default App;
