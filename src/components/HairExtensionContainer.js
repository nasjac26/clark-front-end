import React from 'react';
import { useState } from "react";
import HairExtensionCard from './HairExtensionCard';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'





function HairExtensionContainer({ hairextensionList, sethairextensionList }) {
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    //using user search to make a filtered array to map through
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        const filteredData = hairextensionList.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }


    //Using an if/else to say if its blank render all hairextension and a search exists do th
    const hairextensionListFactory = () => {
        if (searchInput !== ""){
            return filteredResults.map(hairextension => {
                return (
                    
                        <Col>
                            {console.log("searching")}
                            <HairExtensionCard 
                                key={hairextension.id}
                                id={hairextension.id}
                                name={hairextension.name}
                                color={hairextension.color}
                                length={hairextension.length}
                                price={hairextension.price}
                                stock={hairextension.stock}
                                picture={hairextension.picture}
                            />
                        </Col>
                    
                )
            }
        )
    } else {
        return hairextensionList.map(hairextension => {
            return (
                    <Col>
                        <HairExtensionCard 
                            key={hairextension.id}
                            id={hairextension.id}
                            name={hairextension.name}
                            color={hairextension.color}
                            length={hairextension.length}
                            price={hairextension.price}
                            stock={hairextension.stock}
                            picture={hairextension.picture}
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
                {hairextensionListFactory()}   
            </Row>     
        </div>
        </div>
            
    )
}


export default HairExtensionContainer;