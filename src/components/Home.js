import Carousel from "./Carousel";

function Home(props) {
    return (
        <div className="">
            <div className="">
                <h1 className="d-flex justify-content-center fw-bolder">ELEVATE YOUR ARTISTRY</h1>
                <h2 className="d-flex justify-content-center">your career starts here</h2>

            </div>
            <div className="m-4">
                <Carousel toolList={props.toolList} />
            </div>
            
            <div className="bg-secondary bg-gradient text-light d-flex justify-content-center p-3">
                <div>
                    <h1>Redefining the standard when it comes to hair extensions. Made by stylists for stylists.</h1>  
                </div>
            </div>

            <div className="container d-flex justify-content-center p-2">
                <div className="container">
                    <h1>High Quality</h1>
                    <p>Personally tested and approved by our expert team of stylists, our products are the best of the best.</p>
                </div>
                <div className="container">
                    <h1>Damage Free</h1>
                    <p>Our specially crafted silicone beads offer the most protection with a non slip grip.</p>
                </div>
                <div className="container">
                    <h1>Luxurious</h1>
                    <p>Setting the new standard for hair extension tools, we've created a line of functional yet sleek tools.</p>
                </div>                
            </div>

            <div className="bg-secondary bg-gradient text-light d-flex justify-content-center p-2">
                <div>
                    <h3 className="">Questions? Email us at phaneshairextensions@gmail.com </h3>
                    <h3 className="">Follow us on <a className="text-light" href="https://www.instagram.com/lanaphan_/">instagram</a></h3>  
                </div>
            </div>
            
        </div>
    )
}


export default Home;