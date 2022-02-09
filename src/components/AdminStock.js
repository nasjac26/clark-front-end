import React from 'react';
import { useState, useEffect } from "react";
import ProductCard from './HairExtensionCard';
import Row from 'react-bootstrap/Row'

import AdminProductCard from './AdminProductCard';
import Col from 'react-bootstrap/Col'


function AdminStock({productList}) {

    const productListFactory = () => {
        return productList.map(product => {
            return (
                
                    <Col>
                        <AdminProductCard 
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
    
    
    return (
        <div className="container-fluid">
            <Row>
            {productListFactory()}   
            </Row>     
        </div>
    )
}

export default AdminStock;
