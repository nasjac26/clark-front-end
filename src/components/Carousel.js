import React from 'react'
import blacklogo from '../assets/black-logo.png'
import whitelogo from '../assets/white-logo.png'


function Carousel(props) {

    return (
        <div className="container">
            <div className="container shadow-lg p-3 mb-5 bg-body rounded w-auto">
                <div id="carouselExampleControls" class="carousel slide h" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://i.ibb.co/GkQbTSY/beads.jpg" class="d-block w-75" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.ibb.co/dMWYn26/tool-kit-logo.jpg" class="d-block w-75" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.ibb.co/GkQbTSY/beads.jpg" class="d-block" alt="..."></img>
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
