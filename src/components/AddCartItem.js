import React, { Component } from 'react';

class AddCartItem extends Component {

    state = {
        quantity: 1,
        selected: 40

    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: Number(value)

        })
        console.log("handleChange value ", value)
    }

    q = { quantity: this.state.quantity
     }

    handleSubmit = e => {

        e.preventDefault();
        const nItem = {
            product: this.props.products.find(item => this.state.selected === item.id),
            quantity: this.state.quantity
        }
        
        this.props.addItemToCart(nItem)
    }

    render() {
        console.log('AddItemToCart ', this)

        let optionTags = this.props.products.map(product => {
            //   console.log("AddCartItem ",  this.props.addItemToCart)
            return (<option key={product.id} value={product.id}>{product.name} -  ${((product.priceInCents).toFixed(2)/100)}</option>
            )
        })

        return (
            <div>

                <form onSubmit={this.handleSubmit} >
                    <label>Quantity</label>
                    <input type="Number" onChange={this.handleChange}
                        value={this.state.quantity} name='quantity' />
                    <select onChange={this.handleChange} value={this.state.selected} name='selected'>
                        {optionTags}
                    </select>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        );
    }
}

export default AddCartItem;