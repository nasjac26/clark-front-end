import React from 'react';
import AdminClassCard from './AdminClassCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'



function AdminClassList({classList}) {
    const classListFactory = () => {
        return classList.map(e => {
            return (
                    <Col>
                        <AdminClassCard 
                            key={e.id}
                            id={e.id}
                            name={e.name}
                            price={e.price}
                            date={e.date}
                            location={e.location}
                        />
                    </Col>
            )
        }
        )
    }
    
    
    return (
        <div className="container-fluid">
            <Row>
            {classList && classListFactory()}   
            </Row>     
        </div>
    )
}

export default AdminClassList;
