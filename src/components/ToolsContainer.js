import React from "react";
import { useState } from "react";
import ToolCard from './ToolCard';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ToolsContainer({ toolList, setToolList }) {
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    //using user search to make a filtered array to map through
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        const filteredData = toolList.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }


    //Using an if/else to say if its blank render all tool and a search exists do th
    const toolListFactory = () => {
        if (searchInput !== ""){
            return filteredResults.map(tool => {
                return (
                    
                        <Col>
                            {console.log("searching")}
                            <ToolCard 
                                key={tool.id}
                                id={tool.id}
                                name={tool.name}
                                color={tool.color}
                                length={tool.length}
                                price={tool.price}
                                stock={tool.stock}
                                picture={tool.picture}
                            />
                        </Col>
                    
                )
            }
        )
    } else {
        return toolList.map(tool => {
            return (
                    <Col>
                                        {console.log("not searching")}

                        <ToolCard 
                            key={tool.id}
                            id={tool.id}
                            name={tool.name}
                            color={tool.color}
                            length={tool.length}
                            price={tool.price}
                            stock={tool.stock}
                            picture={tool.picture}
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
                {toolListFactory()}   
            </Row>     
        </div>
        </div>
            
    )
}

export default ToolsContainer;


