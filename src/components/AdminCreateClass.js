import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function AdminCreateClass(props) {
    const navigate = useNavigate();
    const [ name, setName ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ date, setDate ] = useState("")
    const [ location, setLocation ] = useState("")
    const [stock, setStock ] = useState("")

    let url = `http://localhost:3001/events`

    function handleSubmit(event) {
        event.preventDefault();

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, date: date, price: price, location: location, description: "", stock: stock }),
        })
        .then(response => response.json())
        .then(alert("CLASS ADDED SUCCESSFULLY. Please Verify Class Lists for Addition and relogin to admin account to add another."))
        .catch((error) => {
            console.error('Error:', error);
        });
        navigate('/');
        window.location.reload();

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                    <input 
                        type="text"
                        class="form-control"
                        id="createdEventName"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                <label>Date</label>
                    <input 
                        type="date"
                        class="form-control"
                        id="createdEventDate"
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                    />
                <label>Price</label>
                    <input 
                        type="number"
                        class="form-control"
                        id="createdEventPrice"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                <label>Location</label>
                    <input 
                        type="text"
                        class="form-control"
                        id="createdEventLocation"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                    />
                <label>Seats Available</label>
                    <input 
                        type="number"
                        class="form-control"
                        id="createdEventSeatCount"
                        value={stock}
                        onChange={(event) => setStock(event.target.value)}
                    />
            <button type="submit" className="btn btn-dark">Create Class</button>
            </form>
        </div>
    )
}

export default AdminCreateClass;




