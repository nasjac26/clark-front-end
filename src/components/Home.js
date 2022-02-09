import Carousel from "./Carousel";
import { NavLink } from "react-router-dom";

function Home(props) {
    console.log(props)
    return (
        <div className="">
            <div className="m-5 text-justify">
                <h1 className="d-flex justify-content-center">ELEVATE YOUR ARTISTRY</h1>
                <p className="d-flex justify-content-center">your career starts here</p>

            </div>
            <div className="">
                <Carousel />

            </div>
        </div>
    )
}


export default Home;