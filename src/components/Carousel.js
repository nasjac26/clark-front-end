import React from 'react'



function Carousel() {

    return (
        <div className="container">
            <div className="shadow-lg rounded h-100">
                <div class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner p-5 ">
                        <div class="carousel-item active">
                            <img src="https://i.ibb.co/GkQbTSY/beads.jpg" className="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.ibb.co/GkQbTSY/beads.jpg" className="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.ibb.co/GkQbTSY/beads.jpg" className="d-block w-100" alt="..."></img>
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
