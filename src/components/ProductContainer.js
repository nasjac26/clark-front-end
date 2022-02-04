import React from 'react';
import { useState } from "react";
import ProductCard from './ProductCard';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'





function ProductContainer({ productList, setProductList }) {
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    //using user search to make a filtered array to map through
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        const filteredData = productList.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }


    //Using an if/else to say if its blank render all product and a search exists do th
    const productListFactory = () => {
        if (searchInput !== ""){
            return filteredResults.map(product => {
                return (
                    
                        <Col>
                            {console.log("searching")}
                            <ProductCard 
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                color={product.color}
                                length={product.length}
                                price={product.price}
                                stock={product.stock}
                                picture={product.picture}
                            />
                        </Col>
                    
                )
            }
        )
    } else {
        return productList.map(product => {
            return (
                    <Col>
                                        {console.log("not searching")}

                        <ProductCard 
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            color={product.color}
                            length={product.length}
                            price={product.price}
                            stock={product.stock}
                            picture={product.picture}
                        />
                    </Col>
                
            )
        }
    )
    }
};
    
    return (
        <div className='container'>
            <div className='justify-content-end'>
                    <input icon='search'
                    placeholder='Search...'
                    onChange={(event) => searchItems(event.target.value)}
                    />
                </div>
            <div className="container-fluid">
            
            <Row>
                {productListFactory()}   
            </Row>     
        </div>
        </div>
            
    )
}


export default ProductContainer;