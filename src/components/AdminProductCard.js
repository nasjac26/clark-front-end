import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom';




function AdminProductCard(props) {
    const navigate = useNavigate();
    const [stock, setStockCount] = useState(props.stock)

    function handleSubmit(event) {
        event.preventDefault();
        setStockCount(event.target.value)
        fetch(`http://localhost:3000/hair_extensions/${props.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ stock }),
        }).then((response) => {
            if (response.ok) {
                console.log("good job!", stock)
            }
            
        });
    
        navigate('/');
    }



        return (
        <Card className="ms-3 mt-5 p-1 mobile-cards">
            <Row>
                <Col>
                    <Card.Img className="img-fluid" src="https://picsum.photos/1100/2200" />
                </Col>
                <Col>
                    <Card.Body>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label htmlfor="username" class="form-label">Stock Count</label>
                            <input 
                                type="stockCount" 
                                class="form-control" 
                                id="stock-count"
                                value={stock}
                                onChange={(event) => setStockCount(event.target.value)}
                                
                            />
                        </div>
                      
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>

    
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default AdminProductCard;


