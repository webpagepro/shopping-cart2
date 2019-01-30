import React, { Component } from 'react';


class CartItem extends Component {
    render() {
        console.log("CartItem ", this)
        let coins = this.props.item.product.priceInCents;
      let pcoins = parseFloat(coins).toFixed(2)
let q = this.props.item.quantity
     let pq = parseInt(q)
     console.log("Q ", pq)
     console.log("Q ", pcoins)
        return (
            <div>
             <div className="container" />
  
 
       <div className="collection-item">
  <div className="row">
    <div className="col-md-4">{this.props.item.product.name}</div>
        <div className="col-md-4">{(this.props.item.product.priceInCents).toFixed(2)}</div>
        <div className="col-md-4">{this.props.item.quantity}</div>


  </div>
</div>
  
            </div>
        );
    }
}

export default CartItem;