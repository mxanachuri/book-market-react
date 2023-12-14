import React, { Component } from 'react';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 1,
            products: []
        }
    } 

    componentDidMount(){
        console.log('Se monta el componente')
        this.getProducts('http://localhost:3000/api/products')
    }

    componentDidUpdate(){
        console.log('Se actualiza el componente');
    }

    getProducts(url){
        fetch(url)
        .then((resp) => resp.json())
        .then(({ products }) => {
            this.setState({
                products: products
            })
            console.log(products)
        })
        .catch(err => console.log(err))
    }

    render() { 
        return ( 
            <>
                
            </>
        );
    }
}

export default Products;
