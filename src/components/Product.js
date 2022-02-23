import React from 'react';
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"


function Product(props) {
    const [currentProduct, setCurrentProduct] = useState([])
    const { id } = useParams()
    console.log(currentProduct)
    
    useEffect(() => {
        getProduct()
        }, [id]);

        const getProduct = () => {
        fetch(`https://clarks-backend.herokuapp.com/tools/${id}`)
            .then(r => r.json())
            .then((data) => setCurrentProduct(data))
        };
    const mobileProductDescriptionRender = () => {
        return(
            <div>
                <Card className="ms-4 mt-1 mobile-cards text-center">
                    <Card.Img className="img-fluid" src={currentProduct.picture} />
                    <Card.Body>
                        <Card.Title>{currentProduct.name}</Card.Title>
                        <Card.Text>
                            {props.color}
                        </Card.Text>
                        <Card.Text>
                            {currentProduct.description}
                        </Card.Text>
                        <Card.Text>
                            ${currentProduct.price}
                        </Card.Text>
                        <div className=' d-grid gap-2'>
                            <Button
                                variant="dark"
                                className="snipcart-add-item d-flex justify-content-center"
                                data-item-id={currentProduct.id}
                                data-item-name={currentProduct.name}
                                data-item-price={currentProduct.price}
                                data-item-description={currentProduct.description}
                                data-item-url={`/tools/${props.id}`}>
                                    Add to Cart
                            </Button>
                        </div>    
                            
                            </Card.Body>
                </Card>
            </div>
        )  
    };

    const desktopProductDescriptionRender = () => {
        return (
            <div>
                <div className='container d-flex pt-5 mt-5'>
                    <div className='container'>
                        <img src={currentProduct.picture} alt="Picture of product" width="500" height="600" className='shadow-lg p-3 mb-5 bg-body rounded'></img>
                    </div> 
                    <div className='container bg-light p-5 m-5'>
                        <h1>{currentProduct.name} </h1>
                        <h3 className=''>${currentProduct.price} USD</h3>
                        <p>{currentProduct.description} </p>
                        <div className=' d-grid gap-2'>
                            <Button
                                variant="dark"
                                className="snipcart-add-item d-flex justify-content-center"
                                data-item-id={currentProduct.id}
                                data-item-name={currentProduct.name}
                                data-item-price={currentProduct.price}
                                data-item-description={currentProduct.description}
                                data-item-url={`/tools/${props.id}`}>

                                    Add to Cart
                            </Button>
                        </div>
                    </div> 

                </div>
        </div>

        )
    }
    
    const checkWindowSizeForRender = () => {
        if (window.matchMedia("(max-width: 400px)").matches) {
            return(mobileProductDescriptionRender())
        } else {
            return(desktopProductDescriptionRender())
          }
    }
    
    
    return(
        checkWindowSizeForRender()

    )
}


export default Product;

