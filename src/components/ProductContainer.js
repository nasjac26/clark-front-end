import React from 'react';
import { useState, useEffect } from "react";

function ProductContainer() {
const [productList, setProductList] = useState("")

useEffect(() => {
    fetch("http://localhost:3000/hair_extensions")
    .then(responce => responce.json())
    .then(data => setProductList(data))
}, []);

let productCardFactory = () => {
    productList.map(
        (singleProduct) => {
            return(
                <ProductCard 
                    key={singleProduct.id}
                    name={singleProduct.name}
                    color={singleProduct.color}
                    length={singleProduct.length}
                    price={singleProduct.price}
                    stock={singleProduct.stock}
                    picture={singleProduct.picture}
                
                />
            )
        }
    )
}


    return (
        <div>
            <div className="container">
                {productCardFactory}
            </div>
        </div>
    )
}


export default ProductContainer;