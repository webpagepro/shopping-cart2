import React, { Component } from 'react';
import { Button, Form, FormGroup } from 'reactstrap'


class AddCartItem extends Component {

    state = {
        quantity: 1,
        selected: ''

    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
        console.log("value ", value)
    }


    handleSubmit = e => {
        let len = (this.props.products).length;
        e.preventDefault();
        this.props.addItemToCart(this.props.addItemToCart);
        for (let i = 0; i < len; i++) {
            console.log("this.props.products[i].name ", this.props.products[i].name)
        }
        const nItem = this.props.products.find(item => Number(this.props.product_id === Number(this.nItem.id)))
        const { name, quantity } = Number(parseFloat(nItem))
        let newItem = {}
        newItem.id = len + 1;
        newItem.product = nItem;
        newItem.quantity = this.state.quantity;
        this.props.addItemToCart(newItem);
    };



    render() {
        console.log('AddItemToCart ', this)

        let optionTags = this.props.products.map(product => {
            //console.log("AddCartItem ",  this.props.addItemToCart)
            return (<option key={product.id} value={product.id}>{product.name} -  ${(product.priceInCents).toFixed(2)}</option>
             )

        })


        return (
            <div>
                <FormGroup>
                    <form onSubmit={this.handleSubmit} >
                        <label>Quantity</label>
                        <input type="number" />
                        <select onChange={this.handleChange} value={this.state.selected} name='selected'>
                           {optionTags}
                        </select>
                        <input type="submit" value="Submit" />
                    </form>
                </FormGroup>
            </div>
        );
    }
}

export default AddCartItem;