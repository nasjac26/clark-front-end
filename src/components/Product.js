import React from 'react';
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Product() {
    const [currentProduct, setCurrentProduct] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        getProduct()
        }, [productId]);

        const getProduct = () => {
        fetch(`https:localhost:3001/tools/${id}`)
            .then(r => r.json())
            .then((data) => setCurrentProduct(data))
        }
    
    
    return(
        <div>
            <h3>Message </h3>
            <h3>Message </h3>

            <h3>Message </h3>

            <h3>Message </h3>

            <h3>Message </h3>
            <h3>Message </h3>
            <h3>Message </h3>
            <h3>Message </h3>
            <Outlet />

        </div>
    )
}


export default Product;
