import React, { Component } from 'react';
import CartItem from './CartItem'

class CartItems extends Component {
    render() {

       let cartListItems = this.props.itemsInCart.map(item => {
            return <CartItem key={item.id} item={item} />    
        })

        let total = cartListItems.reduce((acc, item) => {
          console.log("product cartitems:", item)
          return acc + Number(item.priceInCents * item.quantity)
        }, 0)
        let cost = parseFloat(total).toFixed(2)
        console.log('cartItemsList ', this.cartItemsList)
        return (
            <div>
                <div className="container">
  <h1>Cart Items</h1>
  <div className="list-group">
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-4">Product</div>
        <div className="col-md-4">Price</div>
        <div className="col-md-4">Quantity</div>
      </div>
    </div>
    {cartListItems}
  </div>
  Total: ${(cost)/100} 
</div>
            </div>
        );
    }
}

export default CartItems;