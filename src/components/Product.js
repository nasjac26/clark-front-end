import React from 'react';
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Product(props) {
    const [currentProduct, setCurrentProduct] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        getProduct()
        }, [id]);

        const getProduct = () => {
        fetch(`http://localhost:3001/tools/${id}`)
            .then(r => r.json())
            .then((data) => setCurrentProduct(data))
        }
    
    
    return(
        <div>
            <div className='container'>
               <div className='container'>
                
                </div> 
                <h1>{currentProduct.name} </h1>

            </div>
        </div>
    )
}


export default Product;
