import React, { Component } from 'react';


class CartItem extends Component {
    render() {
        console.log("item ", this)
        return (
            <div>
             <div className="container" />
  
 
       <div className="collection-item">
  <div className="row">
    <div className="col-md-4">{this.props.item.product.name}</div>
        <div className="col-md-4">{this.props.item.product.priceInCents}</div>
        <div className="col-md-4">{this.props.item.quantity}</div>


  </div>
</div>
  
            </div>
        );
    }
}

export default CartItem;