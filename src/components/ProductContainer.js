import React from 'react';
import { useState, useEffect } from "react";
import ProductCard from './ProductCard';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function ProductContainer({productList}) {
    console.log("test", productList)

    const productListFactory = () => {
        return productList.map(product => {
            return (
                
                    <Col>
                        <ProductCard 
                            key={product.id}
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
    
    
    return (
        <div className="ms-4">
            <Row>
            {productListFactory()}   
            </Row>     
        </div>
    )
}






// const productToDisplay = props.productList.map(
//     (singleProduct) => {
//         return(
//         <div>
//             <ProductCard 
//                 key={singleProduct.id}
//                 name={singleProduct.name}
//                 color={singleProduct.color}
//                 length={singleProduct.length}
//                 price={singleProduct.price}
//                 stock={singleProduct.stock}
//                 picture={singleProduct.picture}
//             />
//         </div> 
//         )
//     }
// )



export default ProductContainer;