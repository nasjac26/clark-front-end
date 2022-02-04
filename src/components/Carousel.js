import React from 'react'
import blacklogo from '../assets/black-logo.png'
import whitelogo from '../assets/white-logo.png'


function Carousel(props) {
    console.log(props, "props for user in Home")

    return (
        <div className="container">
            <div className="justify-content-center">
                <h1>`Welcome, {props.user.email}`</h1>
            </div>
            <div className="container">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://i.ibb.co/GkQbTSY/beads.jpg" class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.ibb.co/GkQbTSY/beads.jpg" class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.ibb.co/GkQbTSY/beads.jpg" class="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
        </div>
    )
}

export default Carousel;
