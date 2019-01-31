import React, { Component } from 'react';
import CartItem from './CartItem'

class CartItems extends Component {
    render() {

       let cartListItems = this.props.itemsInCart.map(item => {
            return <CartItem key={item.id} item={item} />    
        })
     
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

</div>
   
            </div>
        );
    }
}

export default CartItems;